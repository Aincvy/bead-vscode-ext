// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { NetworkManager } from './network';
import { BeadMessageManager } from './beadMsg';
import * as beadMessage from './bead_message';
import * as path from 'path';
import { ConfigManager } from './config';

const networkManager = new NetworkManager();

networkManager.on('connected', () => {
    vscode.window.showInformationMessage('bead: connected server');
    beadMsgManager.sendPing();

    // 检查当前是否有打开的文件夹
    checkCurrentWorkspace();
});

const beadMsgManager = new BeadMessageManager();
beadMsgManager.setNetworkManager(networkManager);

const globalMessageMap = new Map<number, beadMessage.bead.msg.IResTextCompletion>();

// 定义类型A
type A = [number, Promise<(items: vscode.InlineCompletionItem[]) => void>];

// 声明类型A的全局列表变量L
let L: A[] = [];

function createCompletionItems(res: beadMessage.bead.msg.IResTextCompletion): vscode.InlineCompletionItem[] {
    if (res.errorType === beadMessage.bead.msg.ResTextCompletion.ErrorTypeT.Success) {
        const completionItem = new vscode.InlineCompletionItem(res.content || "");
        completionItem.insertText = res.content || '';
        return [completionItem];
    }
    return [];
}

beadMsgManager.on('onTextCompletion', (id: number, res: beadMessage.bead.msg.IResTextCompletion) => {
    console.log('Received text completion:', id, res.content);

    // 将消息存储到全局 Map 中
    // globalMessageMap.set(id, res);

    const index = L.findIndex(([msgId]) => msgId === id);
    if (index !== -1) {
        // 如果在L中找到对应的id，设置结果
        L[index][1].then(resolve => resolve(createCompletionItems(res)));
        // 移除L中id小于等于当前id的元素
        L = L.filter(([msgId]) => msgId > id);
    } else {
        // 如果不在L中，将结果放入globalMessageMap
        globalMessageMap.set(id, res);
    }
});
beadMsgManager.on('onPingPong', (id: number) => {
    console.log('Received ping pong:', id);
});

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "bead" is now active!');

    const configManager = ConfigManager.getInstance();
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('bead.connect', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
        vscode.window.showInformationMessage('bead: try connect to server');
        networkManager.connect();
    });
    
    networkManager.connect();

    const onDidChangeTextDocumentDisposable = vscode.workspace.onDidChangeTextDocument(event => {
        const document = event.document;

        // 在这里添加发送消息的代码
        event.contentChanges.forEach(change => {
            const filepath = document.uri.fsPath; // 获取文档的绝对路径
            const range = {
                start: {
                    line: change.range.start.line,
                    column: change.range.start.character
                },
                end: {
                    line: change.range.end.line,
                    column: change.range.end.character
                }
            };
            const newText = change.text;

            beadMsgManager.sendFileEdit(filepath, range, newText)
                .catch(error => console.error('Error sending file edit message:', error));
        });
    });

    // 监听工作区文件夹变化事件
    const workspaceFoldersChangeDisposable = vscode.workspace.onDidChangeWorkspaceFolders(event => {
        for (let folder of event.added) {
            console.log(`新打开的文件夹路径: ${folder.uri.fsPath}`);
            console.log(`新打开的文件夹名称: ${path.basename(folder.uri.fsPath)}`);

            const projectName = path.basename(folder.uri.fsPath);
            const projectPath = folder.uri.fsPath;

            beadMsgManager.sendInitProject(projectName, projectPath);
            break;   // only can open 1 folder now 
        }
    });

    // 监听文件打开事件
    const textDocumentOpenedDisposable = vscode.workspace.onDidOpenTextDocument(document => {
        console.log(`打开的文件路径: ${document.uri.fsPath}`);

        beadMsgManager.sendOpenFile(document.uri.fsPath);
    });

    const provider = vscode.languages.registerInlineCompletionItemProvider(
        [
            { scheme: 'file', language: 'c' },
            { scheme: 'file', language: 'cpp' },
            { scheme: 'file', pattern: '**/*.h' }
        ],
        {
            async provideInlineCompletionItems(document: vscode.TextDocument, position: vscode.Position, context: vscode.InlineCompletionContext, cancelToken: vscode.CancellationToken) {
                const filepath = document.uri.fsPath;
                const line = position.line;
                const column = position.character;

                if (!configManager.getConfig().autoTrigger && context.triggerKind === vscode.InlineCompletionTriggerKind.Automatic) {
                    return [];
                }

                console.log("provideInlineCompletionItems at line:", line);
                try {
                    const messageId = await beadMsgManager.sendTextCompletion(filepath, line, column);
                    if (cancelToken.isCancellationRequested) {
                        return [];
                    }

                    // 检查 globalMessageMap 是否存在结果
                    if (globalMessageMap.has(messageId)) {
                        const res = globalMessageMap.get(messageId)!;
                        globalMessageMap.delete(messageId);
                        return createCompletionItems(res);
                    } else {
                        // 如果不存在，创建一个新的 Promise 并添加到 L 中
                        return new Promise<vscode.InlineCompletionItem[]>((resolve) => {
                            L.push([messageId, Promise.resolve(resolve)]);
                        });
                    }
                } catch (error) {
                    console.error('Error in completion provider:', error);
                    return [];
                }
            }
        }
    );

    context.subscriptions.push(disposable);
    context.subscriptions.push(onDidChangeTextDocumentDisposable);
    context.subscriptions.push(workspaceFoldersChangeDisposable);
    context.subscriptions.push(textDocumentOpenedDisposable);
    context.subscriptions.push(provider);
}


// This method is called when your extension is deactivated
export function deactivate() {
    console.log('Goodbye, your extension "bead" is now deactivated!');
    networkManager.disconnect();
}


function checkCurrentWorkspace() {
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        for (let folder of vscode.workspace.workspaceFolders) {
            console.log(`当前打开的文件夹路径: ${folder.uri.fsPath}`);
            console.log(`当前打开的文件夹名称: ${path.basename(folder.uri.fsPath)}`);

            const projectName = path.basename(folder.uri.fsPath);
            const projectPath = folder.uri.fsPath;

            beadMsgManager.sendInitProject(projectName, projectPath);
            break;  // only can open 1 folder now 
        }
    } 
}

