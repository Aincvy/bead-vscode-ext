import * as vscode from 'vscode';
import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as path from 'path';

export interface BeadConfig {
    serverType: 'None' | 'Manual' | 'Auto';
    server: {
        host: string;
        port: number;
    };
    autoTrigger: boolean;
    prompt: {
        topic: string;
        functionReferenceCount: number;
    };
    beadServerPath: string;
    // autoStartServer: boolean;
    configFilePath?: string;
}

export const defaultConfig: BeadConfig = {
    serverType: 'None',
    server: {
        host: '127.0.0.1',
        port: 31551,
    },
    autoTrigger: false,
    prompt: {
        topic: '',
        functionReferenceCount: 1,
    },
    beadServerPath: '',
    // autoStartServer: false,
    configFilePath: undefined,
};

export class ConfigManager extends EventEmitter {
    private static instance: ConfigManager;
    private currentConfig: BeadConfig;
    private configInvalid: boolean = false;
    private configWatcher: vscode.Disposable | null = null;

    private constructor() {
        super();

        this.currentConfig = this.loadConfig();
        this.setupConfigListener();
        this.validateConfig();
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    public getConfig(): BeadConfig {
        return this.currentConfig;
    }

    private loadConfig(): BeadConfig {
        const config = vscode.workspace.getConfiguration('bead');
        return {
            serverType: config.get('serverType', defaultConfig.serverType),
            server: {
                host: config.get('server.host', defaultConfig.server.host),
                port: config.get('server.port', defaultConfig.server.port),
            },
            autoTrigger: config.get('autoTrigger', defaultConfig.autoTrigger),
            prompt: {
                topic: config.get('prompt.topic', defaultConfig.prompt.topic),
                functionReferenceCount: config.get('prompt.functionReferenceCount', defaultConfig.prompt.functionReferenceCount),
            },
            beadServerPath: config.get('beadServerPath', defaultConfig.beadServerPath),
            // autoStartServer: config.get('autoStartServer', defaultConfig.autoStartServer),
            configFilePath: config.get('configFilePath', defaultConfig.configFilePath),
        };
    }

    private setupConfigListener() {
        this.configWatcher = vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('bead')) {
                this.reloadConfig();
            }
        });
    }

    private reloadConfig() {
        this.currentConfig = this.loadConfig();
        this.validateConfig();

        // 这里可以添加重新加载配置后的其他操作，比如通知其他部分的代码
        console.log('Bead configuration reloaded:', this.currentConfig);
    }

    public async updateTopicPrompt(topicPrompt: string) {
        await vscode.workspace.getConfiguration('bead').update('prompt.topic', topicPrompt, true);
        await this.sendChangePromptConfig();
    }

    private async sendChangePromptConfig() {
        this.emit('prompt-config-changed', this);
    }

    public async updateFunctionReferenceCount(change: 'increase' | 'decrease') {
        const config = vscode.workspace.getConfiguration('bead');
        let count = config.get('prompt.functionReferenceCount', 0);
        count = change === 'increase' ? count + 1 : Math.max(0, count - 1);
        await config.update('prompt.functionReferenceCount', count, true);
        await this.sendChangePromptConfig();

        // Show status bar message
        vscode.window.setStatusBarMessage(`Function Reference Count: ${count}`, 5000);
    }

    private validateConfig(): void {
        this.configInvalid = false;

        if (!this.currentConfig.beadServerPath) {
            return; // 如果没有配置路径，不进行验证
        }

        const serverExecutable = path.join(this.currentConfig.beadServerPath, 'bead-server.exe');

        if (!fs.existsSync(this.currentConfig.beadServerPath)) {
            this.showConfigError(`Bead服务器目录不存在: ${this.currentConfig.beadServerPath}`);
            this.configInvalid = true;
            return;
        }

        if (!fs.existsSync(serverExecutable)) {
            this.showConfigError(`找不到bead-server.exe文件: ${serverExecutable}`);
            this.configInvalid = true;
            return;
        }

        // 验证配置文件路径（如果指定了）
        if (this.currentConfig.configFilePath && !fs.existsSync(this.currentConfig.configFilePath)) {
            this.showConfigError(`配置文件不存在: ${this.currentConfig.configFilePath}`);
            this.configInvalid = true;
            return;
        }
    }

    private showConfigError(message: string): void {
        vscode.window.showErrorMessage(`Bead配置错误: ${message}`);
        this.emit('configError', message);
    }

    private generateRandomPort(): number {
        // 生成 30000-65535 之间的随机端口
        return Math.floor(Math.random() * (65535 - 30000 + 1)) + 30000;
    }

    private getConfigFilePath(): string {
        if (this.currentConfig.configFilePath) {
            return this.currentConfig.configFilePath;
        }
        return path.join(this.currentConfig.beadServerPath, 'bead-server.config.json');
    }

    public async dispose(): Promise<void> {
        // 清理配置监听器
        if (this.configWatcher) {
            this.configWatcher.dispose();
            this.configWatcher = null;
        }

        // 清理事件监听器
        this.removeAllListeners();
    }

    public isConfigInvalid(): boolean {
        return this.configInvalid;
    }

}
