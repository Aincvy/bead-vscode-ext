// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { NetworkManager } from './network';
import { BeadMessageManager } from './beadMsg';
import * as beadMessage from './bead_message';
import * as path from 'path';
import { ConfigManager } from './config';
import { sleep } from './utils';

const runtimeEntity = {
    project: {
        name: '',
        path: ''
    }
};

const networkManager = new NetworkManager();

networkManager.on('connected', () => {
    vscode.window.showInformationMessage('bead: connected server');
    beadMsgManager.sendPing();

    // 检查当前是否有打开的文件夹
    checkCurrentWorkspace();

    const mgr = ConfigManager.getInstance();
    const config = mgr.getConfig();
    beadMsgManager.sendChangeConfig(config.prompt.topic, config.prompt.functionReferenceCount);
});

const beadMsgManager = new BeadMessageManager();
beadMsgManager.setNetworkManager(networkManager);

const globalMessageMap = new Map<number, beadMessage.bead.msg.IResTextCompletion>();


function createCompletionItems(res: beadMessage.bead.msg.IResTextCompletion, pos: vscode.Position): vscode.ProviderResult<vscode.InlineCompletionItem[]> {
    if (res.errorType === beadMessage.bead.msg.ResTextCompletion.ErrorTypeT.Success && (res.content?.length ?? 0) > 0) {
        const completionItem = new vscode.InlineCompletionItem(res.content || "", new vscode.Range(pos, pos.translate(0, res.content?.length)));
        // completionItem.insertText = res.content || '';
        console.log('content is !!! ', completionItem.insertText);

        return [completionItem];
    } 

    console.log('completion failed: ', res.errorType);
    return [];
}

beadMsgManager.on('onTextCompletion', (id: number, res: beadMessage.bead.msg.IResTextCompletion) => {
    console.log('Received text completion:', id, res.content);

    // 将结果放入globalMessageMap
    globalMessageMap.set(id, res);

    // 移除 key 小于id 的所有元素
    for (const key of globalMessageMap.keys()) {
        if (key < id) {
            globalMessageMap.delete(key);
        }
    }
});
beadMsgManager.on('onPingPong', (id: number) => {
    console.log('Received ping pong:', id);
});

ConfigManager.getInstance().on('prompt-config-changed', (mgr: ConfigManager) => {
    const config = mgr.getConfig();
    beadMsgManager.sendChangeConfig(config.prompt.topic, config.prompt.functionReferenceCount);
});

export function registerCommands(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('bead.setTopicPrompt', async () => {
            const topicPrompt = await vscode.window.showInputBox({
                prompt: "Enter the topic prompt",
                placeHolder: "Topic prompt"
            });
            if (topicPrompt !== undefined) {
                await ConfigManager.getInstance().updateTopicPrompt(topicPrompt);
            }
        }),
        vscode.commands.registerCommand('bead.increaseFunctionReferenceCount', async () => {
            await ConfigManager.getInstance().updateFunctionReferenceCount('increase');
        }),
        vscode.commands.registerCommand('bead.decreaseFunctionReferenceCount', async () => {
            await ConfigManager.getInstance().updateFunctionReferenceCount('decrease');
        })
    );

    let reParseFileCommand = vscode.commands.registerCommand('bead.reParseFile', () => {
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            const filePath = activeEditor.document.uri.fsPath;
            beadMsgManager.sendReParseFile(filePath);
        } else {
            vscode.window.showErrorMessage('No active file to re-parse');
        }
    });

    context.subscriptions.push(reParseFileCommand);

    const clearCacheCommand = vscode.commands.registerCommand('bead.clearCache', () => {
        beadMsgManager.sendClearCache();

        if (runtimeEntity.project.path.length > 0) {
            // 存在
            beadMsgManager.sendInitProject(runtimeEntity.project.name, runtimeEntity.project.path);
        }
    });
    context.subscriptions.push(clearCacheCommand);
}



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

        const filepath = document.uri.fsPath;
        // 过滤条件
        if (filepath.includes('extension-output-') ||
            document.uri.scheme === 'output' ||
            document.uri.scheme === 'debug' ||  // 排除调试输出
            filepath.startsWith('output:') ||   // 排除输出面板
            document.languageId === 'log') {    // 排除日志文件
            return;
        }

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
            { scheme: 'file', pattern: '**/*.h' },
            { scheme: 'file', language: 'java' },
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

                    let i = 0;
                    while (i++ < 90) {
                        if (cancelToken.isCancellationRequested) {
                            return [];
                        }

                        // 检查 globalMessageMap 是否存在结果
                        if (globalMessageMap.has(messageId)) {
                            console.log('return to vscode, messageId: ', messageId);
                            const res = globalMessageMap.get(messageId)!;
                            globalMessageMap.delete(messageId);
                            return createCompletionItems(res, position);
                        } 

                        // console.log('wait once');
                        await sleep(25);
                    }
                    
                    console.log("messageId: ", messageId, " timeout!");
                    return [];
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

    context.subscriptions.push(vscode.workspace.onDidDeleteFiles(beadMsgManager.handleFileDelete));


    registerCommands(context);
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

            runtimeEntity.project.name = projectName;
            runtimeEntity.project.path = projectPath;

            beadMsgManager.sendInitProject(projectName, projectPath);
            break;  // only can open 1 folder now 
        }
    } 
}

