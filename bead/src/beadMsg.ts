import { EventEmitter } from 'events';
import * as beadMessage from './bead_message';
import { NetworkManager } from './network';


export class BeadMessageManager extends EventEmitter {
    private networkManager: NetworkManager | null = null;

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
                this.emit('onTextCompletion', beadMessage.bead.msg.ResTextCompletion.decode(message.msg!));
                break;
            case beadMessage.bead.msg.MessageType.FileEdit:
                this.emit('onFileEdit', beadMessage.bead.msg.ResFileEdit.decode(message.msg!));
                break;
            case beadMessage.bead.msg.MessageType.InitProject:
                this.emit('onInitProject', beadMessage.bead.msg.ResInitProject.decode(message.msg!));
                break;
            case beadMessage.bead.msg.MessageType.OpenFile:
                this.emit('onOpenFile', beadMessage.bead.msg.ResOpenFile.decode(message.msg!));
                break;
            // Add more cases as needed
        }
    }

    private async sendMessage(type: beadMessage.bead.msg.MessageType, message: Uint8Array): Promise<void> {
        if (!this.networkManager) {
            throw new Error('NetworkManager not set');
        }

        const singleMessage = beadMessage.bead.msg.BeadSingleMessage.create({
            type: type,
            id: Date.now(), // 使用时间戳作为简单的ID生成方式
            msg: message
        });

        const encodedMessage = beadMessage.bead.msg.BeadSingleMessage.encode(singleMessage).finish();
        await this.networkManager.send(encodedMessage);
    }

    public async sendTextCompletion(filepath: string, line: number, column: number): Promise<void> {
        const message = beadMessage.bead.msg.ReqTextCompletion.create({ filepath, line, column });
        const encodedMessage = beadMessage.bead.msg.ReqTextCompletion.encode(message).finish();
        await this.sendMessage(beadMessage.bead.msg.MessageType.TextCompletion, encodedMessage);
    }

    public async sendFileEdit(filepath: string, range: beadMessage.bead.msg.IFileRange, newText: string): Promise<void> {
        const message = beadMessage.bead.msg.ReqFileEdit.create({ filepath, range, newText });
        const encodedMessage = beadMessage.bead.msg.ReqFileEdit.encode(message).finish();
        await this.sendMessage(beadMessage.bead.msg.MessageType.FileEdit, encodedMessage);
    }

    public async sendInitProject(projectName: string, projectPath: string): Promise<void> {
        const message = beadMessage.bead.msg.ReqInitProject.create({ projectName, projectPath });
        const encodedMessage = beadMessage.bead.msg.ReqInitProject.encode(message).finish();
        await this.sendMessage(beadMessage.bead.msg.MessageType.InitProject, encodedMessage);
    }

    public async sendOpenFile(filepath: string): Promise<void> {
        const message = beadMessage.bead.msg.ReqOpenFile.create({ filepath });
        const encodedMessage = beadMessage.bead.msg.ReqOpenFile.encode(message).finish();
        await this.sendMessage(beadMessage.bead.msg.MessageType.OpenFile, encodedMessage);
    }
}

// 使用示例
// const beadMsgManager = new BeadMessageManager();
// beadMsgManager.setNetworkManager(networkManager);
//
// beadMsgManager.on('onTextCompletion', (res: beadMessage.bead.msg.IResTextCompletion) => {
//     console.log('Received text completion:', res);
// });
//
// beadMsgManager.sendTextCompletion('path/to/file.ts', 10, 5).catch(console.error);