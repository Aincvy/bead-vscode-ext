// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { NetworkManager } from './network';
import { BeadMessageManager } from './beadMsg';
import * as beadMessage from './bead_message';

const networkManager = new NetworkManager();

networkManager.on('connected', () => {
    console.log('Connected to server');
});
networkManager.on('message', (data) => {
    // 处理接收到的消息
    console.log('Received message:', data);
});

const beadMsgManager = new BeadMessageManager();
beadMsgManager.setNetworkManager(networkManager);

beadMsgManager.on('onTextCompletion', (res: beadMessage.bead.msg.IResTextCompletion) => {
    console.log('Received text completion:', res);
});

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "bead" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('bead.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from bead!');
    });
    
    networkManager.connect();

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
    console.log('Goodbye, your extension "bead" is now deactivated!');
    networkManager.disconnect();
}

