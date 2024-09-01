import { EventEmitter } from 'events';
import * as beadMessage from './bead_message';
import { NetworkManager } from './network';

export class BeadMessageManager extends EventEmitter {
    private networkManager: NetworkManager | null = null;
    // private nextId: number = 10000;
    private static sharedBuffer = new SharedArrayBuffer(4);
    private static counter = new Int32Array(BeadMessageManager.sharedBuffer);

    constructor() {
        super();
    }

    public setNetworkManager(networkManager: NetworkManager) {
        this.networkManager = networkManager;
        this.setupMessageListener();
    }

    private setupMessageListener() {
        if (!this.networkManager) {
            throw new Error('NetworkManager not set');
        }

        this.networkManager.on('message', (data: Uint8Array) => {
            const message = beadMessage.bead.msg.BeadSingleMessage.decode(data);
            this.handleMessage(message);
        });
    }

    private handleMessage(message: beadMessage.bead.msg.IBeadSingleMessage) {
        switch (message.type) {
            case beadMessage.bead.msg.MessageType.TextCompletion:
                this.emit('onTextCompletion', message.id, beadMessage.bead.msg.ResTextCompletion.decode(message.msg!));
                break;
            case beadMessage.bead.msg.MessageType.FileEdit:
                this.emit('onFileEdit', message.id, beadMessage.bead.msg.ResFileEdit.decode(message.msg!));
                break;
            case beadMessage.bead.msg.MessageType.InitProject:
                this.emit('onInitProject', message.id, beadMessage.bead.msg.ResInitProject.decode(message.msg!));
                break;
            case beadMessage.bead.msg.MessageType.OpenFile:
                this.emit('onOpenFile', message.id, beadMessage.bead.msg.ResOpenFile.decode(message.msg!));
                break;
            case beadMessage.bead.msg.MessageType.PingPong:
                this.emit('onPingPong', message.id);
                break;
            // Add more cases as needed
        }
    }

    private getNextId(): number {
        return Atomics.add(BeadMessageManager.counter, 0, 1) + 10000;
    }

    private async sendMessage(type: beadMessage.bead.msg.MessageType, message: Uint8Array): Promise<number> {
        if (!this.networkManager) {
            // throw new Error('NetworkManager not set');
            console.log('NetworkManager not set');
            return Promise.reject('NetworkManager not set');
        }
        
        const id = this.getNextId();
        const singleMessage = beadMessage.bead.msg.BeadSingleMessage.create({
            type: type,
            id: id,
            msg: message
        });

        // console.log('Sending message: ', singleMessage);
        const encodedMessage = beadMessage.bead.msg.BeadSingleMessage.encode(singleMessage).finish();
        await this.networkManager.send(encodedMessage);
        return id;
    }

    public async sendTextCompletion(filepath: string, line: number, column: number): Promise<number> {
        const message = beadMessage.bead.msg.ReqTextCompletion.create({ filepath, line, column });
        const encodedMessage = beadMessage.bead.msg.ReqTextCompletion.encode(message).finish();
        return await this.sendMessage(beadMessage.bead.msg.MessageType.TextCompletion, encodedMessage);
    }

    public async sendFileEdit(filepath: string, range: beadMessage.bead.msg.IFileRange, newText: string): Promise<number> {
        const message = beadMessage.bead.msg.ReqFileEdit.create({ filepath, range, newText });
        const encodedMessage = beadMessage.bead.msg.ReqFileEdit.encode(message).finish();
        return await this.sendMessage(beadMessage.bead.msg.MessageType.FileEdit, encodedMessage);
    }

    public async sendInitProject(projectName: string, projectPath: string): Promise<number> {
        const message = beadMessage.bead.msg.ReqInitProject.create({ projectName, projectPath });
        const encodedMessage = beadMessage.bead.msg.ReqInitProject.encode(message).finish();
        return await this.sendMessage(beadMessage.bead.msg.MessageType.InitProject, encodedMessage);
    }

    public async sendOpenFile(filepath: string): Promise<number> {
        const message = beadMessage.bead.msg.ReqOpenFile.create({ filepath });
        const encodedMessage = beadMessage.bead.msg.ReqOpenFile.encode(message).finish();
        return await this.sendMessage(beadMessage.bead.msg.MessageType.OpenFile, encodedMessage);
    }

    public async sendPing(): Promise<number> {
        return await this.sendMessage(beadMessage.bead.msg.MessageType.PingPong, new Uint8Array());
    }
}