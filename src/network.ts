import * as net from 'net';
import { EventEmitter } from 'events';
import { ConfigManager } from './config';
import { BeadLogger } from './utils';

export class NetworkManager extends EventEmitter {
    private socket: net.Socket | null = null;
    private readBuffer: Buffer = Buffer.alloc(0);
    // private writeBuffer: Buffer = Buffer.alloc(0);
    private isConnected: boolean = false;
    private logger = BeadLogger.getInstance();

    constructor() {
        super();
        // this.connect();
    }

    public connect(port?: number) {
        if (this.isConnected) {
            this.logger.info('Already connected');
            return;
        }

        const config = ConfigManager.getInstance().getConfig();
        this.socket = new net.Socket();

        this.socket.connect(port ?? config.server.port, config.server.host, () => {
            this.logger.info('Connected to server');
            this.isConnected = true;
            this.emit('connected');
        });

        this.socket.on('data', (data: Buffer) => {
            this.readBuffer = Buffer.concat([this.readBuffer, data]);
            this.processReadBuffer();
        });

        this.socket.on('close', () => {
            this.logger.info('Connection closed');
            this.isConnected = false;
            this.emit('disconnected');
            // 可以在这里添加重连逻辑
        });

        this.socket.on('error', (err) => {
            console.error('Socket error:', err);
            this.emit('error', err);
        });
    }

    private processReadBuffer() {
        while (this.readBuffer.length >= 4) {
            const length = this.readBuffer.readUInt32BE(0);
            if (this.readBuffer.length >= length + 4) {
                const data = this.readBuffer.subarray(4, length + 4);
                this.emit('message', data);
                this.readBuffer = this.readBuffer.subarray(length + 4);
            } else {
                break;
            }
        }
    }

    public async send(message: Uint8Array): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.isConnected) {
                reject(new Error('Not connected to server'));
                return;
            }
            
            
            const data = message;
            const length = Buffer.alloc(4);
            length.writeUInt32BE(data.length, 0);

            const buffer = Buffer.concat([length, data]);
            // this.logger.info('Send bytes:', buffer.length);

            this.socket!.write(buffer, (err) => {
                if (err) {
                    this.logger.info(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    public getReadBuffer(): Buffer {
        return this.readBuffer;
    }

    public isConnectedToServer(): boolean {
        return this.isConnected;
    }

    public disconnect(): void {
        if (this.socket) {
            this.socket.destroy();
            this.socket = null;
            this.isConnected = false;
        }
    }

    public reconnect(): void {
        this.disconnect();
        this.connect();
    }
}
