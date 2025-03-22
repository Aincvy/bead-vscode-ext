import * as vscode from 'vscode';
import { EventEmitter } from 'events';

export interface BeadConfig {
    serverType: 'None' | 'Manual';
    server: {
        host: string;
        port: number;
    };
    autoTrigger: boolean;
    prompt: {
        topic: string;
        functionReferenceCount: number;
    };
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
};

export class ConfigManager extends EventEmitter {
    private static instance: ConfigManager;
    private currentConfig: BeadConfig;

    private constructor() {
        super();

        this.currentConfig = this.loadConfig();
        this.setupConfigListener();
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
        };
    }

    private setupConfigListener() {
        vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('bead')) {
                this.reloadConfig();
            }
        });
    }

    private reloadConfig() {
        this.currentConfig = this.loadConfig();
        // 这里可以添加重新加载配置后的其他操作，比如通知其他部分的代码
        console.log('Bead configuration reloaded:', this.currentConfig);
    }

    public async updateTopicPrompt(topicPrompt: string) {
        await vscode.workspace.getConfiguration('bead').update('prompt.topic', topicPrompt, true);
        await this.sendChangePromptConfig();
    }

    private async sendChangePromptConfig() {
        // const config = this.getConfig();
        // const beadClient = BeadClient.getInstance();
        // await beadClient.sendChangeConfig(config.prompt.topic, config.prompt.functionReferenceCount);
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
}

// 使用示例
// const configManager = ConfigManager.getInstance();
// const currentConfig = configManager.getConfig();