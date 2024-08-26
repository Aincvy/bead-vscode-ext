import * as vscode from 'vscode';

export interface BeadConfig {
    serverType: 'None' | 'Manual';
    server: {
        host: string;
        port: number;
    };
    autoTrigger: boolean;
}

export const defaultConfig: BeadConfig = {
    serverType: 'None',
    server: {
        host: '127.0.0.1',
        port: 31551,
    },
    autoTrigger: false,
};

export class ConfigManager {
    private static instance: ConfigManager;
    private currentConfig: BeadConfig;

    private constructor() {
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
}

// 使用示例
// const configManager = ConfigManager.getInstance();
// const currentConfig = configManager.getConfig();