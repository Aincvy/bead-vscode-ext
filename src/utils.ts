import * as vscode from 'vscode';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class BeadLogger {
    private static instance: BeadLogger;
    private outputChannel: vscode.OutputChannel | null = null;
    private readonly channelName = 'Bead';

    private constructor() { }

    public static getInstance(): BeadLogger {
        if (!BeadLogger.instance) {
            BeadLogger.instance = new BeadLogger();
        }
        return BeadLogger.instance;
    }

    /**
     * 初始化 OutputChannel，在插件激活时调用
     */
    public initialize(): void {
        if (!this.outputChannel) {
            this.outputChannel = vscode.window.createOutputChannel(this.channelName);
        }
    }

    /**
     * 输出一行日志
     */
    public log(message: string): void {
        if (this.outputChannel) {
            const timestamp = new Date().toLocaleTimeString();
            this.outputChannel.appendLine(`[${timestamp}] ${message}`);
        }
    }

    /**
     * 格式化参数为字符串
     */
    private formatArgs(...args: any[]): string {
        return args.map(arg => {
            if (arg === null) return 'null';
            if (arg === undefined) return 'undefined';
            if (typeof arg === 'string') return arg;
            if (typeof arg === 'object') {
                try {
                    return JSON.stringify(arg, null, 2);
                } catch {
                    return '[Object]';
                }
            }
            return String(arg);
        }).join(' ');
    }

    /**
     * 输出信息日志
     */
    public info(...args: any[]): void {
        const message = this.formatArgs(...args);
        this.log(`[INFO] ${message}`);
    }

    /**
     * 输出警告日志
     */
    public warn(...args: any[]): void {
        if (this.outputChannel) {
            const timestamp = new Date().toLocaleTimeString();
            const message = this.formatArgs(...args);
            this.outputChannel.appendLine(`[${timestamp}] [WARN] ${message}`);
        }
    }

    /**
     * 输出错误日志并显示面板
     */
    public error(...args: any[]): void {
        if (this.outputChannel) {
            const timestamp = new Date().toLocaleTimeString();
            const message = this.formatArgs(...args);
            this.outputChannel.appendLine(`[${timestamp}] [ERROR] ${message}`);
        }
    }

    /**
     * 输出调试日志（仅在开发模式下）
     */
    public debug(...args: any[]): void {
        if (process.env.NODE_ENV === 'development') {
            const message = this.formatArgs(...args);
            this.log(`[DEBUG] ${message}`);
        }
    }

    /**
     * 清空输出内容
     */
    public clear(): void {
        if (this.outputChannel) {
            this.outputChannel.clear();
            this.log('Output cleared');
        }
    }

    /**
     * 输出分隔线
     */
    public separator(): void {
        this.log('─'.repeat(50));
    }

    /**
     * 输出对象（格式化为 JSON）
     */
    public logObject(obj: any, label?: string): void {
        const message = label ? `${label}: ${JSON.stringify(obj, null, 2)}` : JSON.stringify(obj, null, 2);
        this.log(message);
    }

    /**
     * 清理资源，在插件停用时调用
     */
    public dispose(): void {
        if (this.outputChannel) {
            this.outputChannel.dispose();
            this.outputChannel = null;
        }
    }

    /**
     * 获取 OutputChannel 实例（如果需要直接操作）
     */
    public getOutputChannel(): vscode.OutputChannel | null {
        return this.outputChannel;
    }
}