import * as vscode from 'vscode';
import { ChildProcess, spawn } from 'child_process';
import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as path from 'path';
import * as net from 'net';

export interface ServerInfo {
    running: boolean;
    port: number | null;
    pid: number | null;
    startTime: Date | null;
}

export class ServerManager extends EventEmitter {
    private process: ChildProcess | null = null;
    private dynamicPort: number | null = null;
    private startTime: Date | null = null;

    constructor() {
        super();
    }

    /**
     * 检查端口是否可用
     */
    private async isPortAvailable(port: number): Promise<boolean> {
        return new Promise((resolve) => {
            const server = net.createServer();

            server.listen(port, () => {
                server.close(() => {
                    resolve(true);
                });
            });

            server.on('error', () => {
                resolve(false);
            });
        });
    }

    /**
     * 生成可用的随机端口
     */
    private async generateAvailablePort(): Promise<number> {
        let attempts = 0;
        const maxAttempts = 10;

        while (attempts < maxAttempts) {
            const port = Math.floor(Math.random() * (65535 - 30000 + 1)) + 30000;

            if (await this.isPortAvailable(port)) {
                return port;
            }

            attempts++;
        }

        throw new Error('无法找到可用端口');
    }

    /**
     * 验证服务器文件是否存在
     */
    private validateServerPath(serverPath: string): boolean {
        if (!serverPath) {
            return false;
        }

        const executablePath = path.join(serverPath, 'bead-server.exe');
        return fs.existsSync(executablePath);
    }

    /**
     * 启动服务器
     */
    public async startServer(
        serverPath: string,
        configFilePath?: string,
        fixedPort?: number
    ): Promise<ServerInfo> {
        if (this.process && !this.process.killed) {
            throw new Error('服务器已在运行中');
        }

        if (!this.validateServerPath(serverPath)) {
            throw new Error(`无效的服务器路径或找不到bead-server.exe: ${serverPath}`);
        }

        try {
            // 确定端口
            let port: number;
            if (fixedPort) {
                if (!(await this.isPortAvailable(fixedPort))) {
                    throw new Error(`端口 ${fixedPort} 不可用`);
                }
                port = fixedPort;
                this.dynamicPort = null;
            } else {
                port = await this.generateAvailablePort();
                this.dynamicPort = port;
            }

            // 确定配置文件路径
            const configFile = configFilePath || path.join(serverPath, 'bead-server.config.json');

            // 验证配置文件是否存在
            if (!fs.existsSync(configFile)) {
                vscode.window.showWarningMessage(`配置文件不存在: ${configFile}`);
            }

            // 启动进程
            const executablePath = path.join(serverPath, 'bead-server.exe');
            const args = [
                '--config_file', configFile,
                '--port', port.toString()
            ];

            this.process = spawn(executablePath, args, {
                cwd: serverPath,
                stdio: ['ignore', 'pipe', 'pipe'],
                detached: false
            });

            this.startTime = new Date();

            // 设置进程事件监听
            this.setupProcessListeners();

            // 等待一段时间确保服务器启动
            await this.waitForServerStart(port);

            const serverInfo: ServerInfo = {
                running: true,
                port: port,
                pid: this.process.pid || null,
                startTime: this.startTime
            };

            this.emit('serverStarted', serverInfo);
            return serverInfo;

        } catch (error) {
            this.cleanup();
            throw error;
        }
    }

    /**
     * 等待服务器启动
     */
    private async waitForServerStart(port: number, timeout: number = 5000): Promise<void> {
        const startTime = Date.now();

        while (Date.now() - startTime < timeout) {
            try {
                await new Promise<void>((resolve, reject) => {
                    const socket = net.createConnection(port, '127.0.0.1');

                    socket.on('connect', () => {
                        socket.end();
                        resolve();
                    });

                    socket.on('error', () => {
                        reject(new Error('Connection failed'));
                    });

                    setTimeout(() => {
                        socket.destroy();
                        reject(new Error('Timeout'));
                    }, 1000);
                });

                return; // 连接成功，服务器已启动
            } catch {
                // 等待一段时间后重试
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }

        throw new Error('服务器启动超时');
    }

    /**
     * 设置进程事件监听器
     */
    private setupProcessListeners(): void {
        if (!this.process) return;

        this.process.on('error', (error) => {
            console.error('Bead服务器进程错误:', error);
            this.emit('serverError', error);
            this.cleanup();
        });

        this.process.on('exit', (code, signal) => {
            console.log(`Bead服务器进程退出，代码: ${code}, 信号: ${signal}`);

            const serverInfo: ServerInfo = {
                running: false,
                port: null,
                pid: null,
                startTime: null
            };

            this.emit('serverStopped', { code, signal, serverInfo });
            this.cleanup();
        });

        // 监听输出
        if (this.process.stdout) {
            this.process.stdout.on('data', (data) => {
                const output = data.toString().trim();
                if (output) {
                    // console.log(`[Bead服务器] ${output}`);    // 没必要输出，看日志文件把。。 
                    this.emit('serverOutput', output);
                }
            });
        }

        if (this.process.stderr) {
            this.process.stderr.on('data', (data) => {
                const error = data.toString().trim();
                if (error) { 
                    // console.error(`[Bead服务器错误] ${error}`);      // 没必要输出，看日志文件把。。 
                    this.emit('serverError', error);
                }
            });
        }
    }

    /**
     * 停止服务器
     */
    public async stopServer(force: boolean = false): Promise<void> {
        if (!this.process || this.process.killed) {
            return;
        }

        return new Promise<void>((resolve) => {
            if (!this.process) {
                resolve();
                return;
            }

            const timeout = setTimeout(() => {
                if (this.process && !this.process.killed) {
                    console.log('强制终止Bead服务器进程');
                    this.process.kill('SIGKILL');
                }
                resolve();
            }, force ? 1000 : 5000);

            this.process.once('exit', () => {
                clearTimeout(timeout);
                resolve();
            });

            // 尝试优雅关闭
            if (force) {
                this.process.kill('SIGKILL');
            } else {
                this.process.kill('SIGTERM');
            }
        });
    }

    /**
     * 重启服务器
     */
    public async restartServer(
        serverPath: string,
        configFilePath?: string,
        fixedPort?: number
    ): Promise<ServerInfo> {
        await this.stopServer();

        // 等待一段时间确保进程完全关闭
        await new Promise(resolve => setTimeout(resolve, 1000));

        return await this.startServer(serverPath, configFilePath, fixedPort);
    }

    /**
     * 获取服务器状态
     */
    public getServerInfo(): ServerInfo {
        return {
            running: this.process !== null && !this.process.killed,
            port: this.dynamicPort || null,
            pid: this.process?.pid || null,
            startTime: this.startTime
        };
    }

    /**
     * 获取动态端口
     */
    public getDynamicPort(): number | null {
        return this.dynamicPort;
    }

    /**
     * 检查服务器是否运行
     */
    public isRunning(): boolean {
        return this.process !== null && !this.process.killed;
    }

    /**
     * 清理资源
     */
    private cleanup(): void {
        this.process = null;
        this.dynamicPort = null;
        this.startTime = null;
    }

    /**
     * 销毁管理器
     */
    public async dispose(): Promise<void> {
        await this.stopServer(true);
        this.removeAllListeners();
    }
}