import * as vscode from 'vscode';
import { NetworkManager } from './network';
import { BeadMessageManager } from './beadMsg';
import * as beadMessage from './bead_message';
import * as path from 'path';
import { ConfigManager, BeadConfig } from './config';
import { sleep, BeadLogger } from './utils';
import { ServerManager } from './serverManager';
import { log } from 'console';

const runtimeEntity = {
    project: {
        name: '',
        path: ''
    }
};

const networkManager = new NetworkManager();
const logger = BeadLogger.getInstance();

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

const serverManager = new ServerManager();

function createCompletionItems(res: beadMessage.bead.msg.IResTextCompletion, pos: vscode.Position): vscode.ProviderResult<vscode.InlineCompletionItem[]> {
    if (res.errorType === beadMessage.bead.msg.ResTextCompletion.ErrorTypeT.Success && (res.content?.length ?? 0) > 0) {
        const completionItem = new vscode.InlineCompletionItem(res.content || "", new vscode.Range(pos, pos.translate(0, res.content?.length)));
        // completionItem.insertText = res.content || '';
        logger.info('content is !!! ', completionItem.insertText);

        return [completionItem];
    } 

    logger.info('completion failed: ', res.errorType);
    return [];
}

beadMsgManager.on('onTextCompletion', (id: number, res: beadMessage.bead.msg.IResTextCompletion) => {
    logger.info('Received text completion:', id, res.content);

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
    logger.info('Received ping pong:', id);
});

beadMsgManager.on('onExportTypePrompt', (id: number, res : beadMessage.bead.msg.IResExportTypePrompt) => {
    logger.info('Received export type prompt:', id, res.errorType);
    if (res.errorType !== beadMessage.bead.msg.ResExportTypePrompt.ErrorTypeT.Success) {
        // show 一个提示
        vscode.window.showErrorMessage("Export type prompt failed!");
    }
});

ConfigManager.getInstance().on('prompt-config-changed', (mgr: ConfigManager) => {
    const config = mgr.getConfig();
    beadMsgManager.sendChangeConfig(config.prompt.topic, config.prompt.functionReferenceCount);
});

/**
 * 开启 bead-serve 进程
 * @param config 
 */
async function startServerProcess(config: BeadConfig) {
    const success = await serverManager.startServer(config.beadServerPath, config.configFilePath);
    if (success) {
        const port = serverManager.getDynamicPort();
        vscode.window.showInformationMessage(`Bead服务器启动成功，端口: ${port}`);

    } else {
        vscode.window.showWarningMessage('Bead服务器启动失败，请检查配置');
    }
}

export function registerCommands(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('bead.connect', async () => {
        const saved = await vscode.workspace.saveAll();

        if (!saved) {
            // 用户取消了保存操作
            return;
        }

        vscode.window.showInformationMessage('bead: try connect to server');
        networkManager.connect();
    });
    context.subscriptions.push(disposable);

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

    // bead.exportTypePrompt
    const exportTypePromptCommand = vscode.commands.registerCommand('bead.exportTypePrompt', async (document: vscode.TextDocument, range: vscode.Range) => {
        if (!document || !range) {
            vscode.window.showInformationMessage('bead: use source action to export type related prompt.');
            return;
        }

        const filePath = document.uri.fsPath;
        beadMsgManager.sendExportTypePrompt(filePath, range);
        logger.info('send exportTypePromptCommand', filePath, range);
    });
    context.subscriptions.push(exportTypePromptCommand);

    const configManager = ConfigManager.getInstance();
    // 重启服务器命令
    const restartServerCommand = vscode.commands.registerCommand('bead.restartServer', async () => {
        // try {
        //     const success = await configManager.restartBeadServer();
        //     if (success) {
        //         vscode.window.showInformationMessage('Bead服务器重启成功');
        //     } else {
        //         vscode.window.showWarningMessage('Bead服务器重启失败，请检查配置');
        //     }
        // } catch (error) {
        //     vscode.window.showErrorMessage(`重启Bead服务器时发生错误: ${error}`);
        // }
    });

    // 启动服务器命令
    const startServerCommand = vscode.commands.registerCommand('bead.startServer', async () => {
        try {
            if (serverManager.isRunning()) {
                vscode.window.showInformationMessage('Bead服务器已经在运行中');
                return;
            }

            const config = configManager.getConfig();
            await startServerProcess(config);

        } catch (error) {
            vscode.window.showErrorMessage(`启动Bead服务器时发生错误: ${error}`);
        }
    });

    // 停止服务器命令
    const stopServerCommand = vscode.commands.registerCommand('bead.stopServer', async () => {
        try {
            if (!serverManager.isRunning()) {
                vscode.window.showInformationMessage('Bead服务器未运行');
                return;
            }

            await serverManager.stopServer();
            vscode.window.showInformationMessage('Bead服务器已停止');
        } catch (error) {
            vscode.window.showErrorMessage(`停止Bead服务器时发生错误: ${error}`);
        }
    });

    // 显示服务器状态命令
    const showServerStatusCommand = vscode.commands.registerCommand('bead.showServerStatus', () => {
        const status = serverManager.getServerInfo();
        const config = configManager.getConfig();

        let message = `服务器状态: ${status.running ? '运行中' : '已停止'}`;

        if (status.running) {
            message += `\n端口: ${status.port}`;
            message += `\n进程ID: ${status.pid}`;
            message += `\n启动时间: ${status.startTime}`;
        }

        message += `\n配置路径: ${config.beadServerPath || '未配置'}`;
        // message += `\n自动启动: ${config.autoStartServer ? '是' : '否'}`;

        vscode.window.showInformationMessage(message, { modal: true });
    });

    // 注册所有命令到订阅列表
    context.subscriptions.push(
        restartServerCommand,
        startServerCommand,
        stopServerCommand,
        showServerStatusCommand
    );
}

export function activate(context: vscode.ExtensionContext) {

    logger.initialize();
    logger.info('Bead 插件已激活');

    const configManager = ConfigManager.getInstance();

    const onDidChangeTextDocumentDisposable = vscode.workspace.onDidChangeTextDocument(event => {
        const document = event.document;
        const filepath = document.uri.fsPath;

        // logger.info('onDidChangeTextDocument: ', filepath, event.contentChanges);
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
            logger.info(`新打开的文件夹路径: ${folder.uri.fsPath}`);
            logger.info(`新打开的文件夹名称: ${path.basename(folder.uri.fsPath)}`);

            const projectName = path.basename(folder.uri.fsPath);
            const projectPath = folder.uri.fsPath;

            beadMsgManager.sendInitProject(projectName, projectPath);
            break;   // only can open 1 folder now 
        }
    });

    // 监听文件打开事件
    const textDocumentOpenedDisposable = vscode.workspace.onDidOpenTextDocument(document => {
        logger.info(`打开的文件路径: ${document.uri.fsPath}`);

        beadMsgManager.sendOpenFile(document.uri.fsPath);
    });

    const provider = vscode.languages.registerInlineCompletionItemProvider(
        [
            // { scheme: 'file', language: 'c' },
            // { scheme: 'file', language: 'cpp' },
            // { scheme: 'file', pattern: '**/*.h' },
            // { scheme: 'file', language: 'java' },
            {pattern: "**"}
        ],
        {
            async provideInlineCompletionItems(document: vscode.TextDocument, position: vscode.Position, context: vscode.InlineCompletionContext, cancelToken: vscode.CancellationToken) {
                const filepath = document.uri.fsPath;
                const line = position.line;
                const column = position.character;

                if (!configManager.getConfig().autoTrigger && context.triggerKind === vscode.InlineCompletionTriggerKind.Automatic) {
                    return [];
                }

                logger.info("provideInlineCompletionItems at line:", line);
                try {
                    const messageId = await beadMsgManager.sendTextCompletion(filepath, line, column, document.getText());
                    logger.info(`Sent completion request, messageId: ${messageId}`);

                    let i = 0;
                    while (i++ < 45) {
                        if (cancelToken.isCancellationRequested) {
                            return [];
                        }

                        // 检查 globalMessageMap 是否存在结果
                        if (globalMessageMap.has(messageId)) {
                            logger.info('return to vscode, messageId: ', messageId);
                            const res = globalMessageMap.get(messageId)!;
                            globalMessageMap.delete(messageId);
                            return createCompletionItems(res, position);
                        } 

                        // logger.info('wait once');
                        await sleep(25);
                    }
                    
                    logger.info("messageId: ", messageId, " timeout!");
                    return [];
                } catch (error) {
                    logger.error('Error in completion provider:', error);
                    return [];
                }
            }
        }
    );
    const onFileRename = vscode.workspace.onDidRenameFiles(async (e: vscode.FileRenameEvent) => {
        // e.files 是一个数组，包含了所有被移动的文件信息
        // 每个文件都有 oldUri 和 newUri 属性
        for (const { oldUri, newUri } of e.files) {
            logger.info("send file delete: ", oldUri.fsPath);
            beadMsgManager.sendFileDelete(oldUri.fsPath);
        }

        await sleep(25);
        for (const { oldUri, newUri } of e.files) {
            logger.info("send file open: ", oldUri.fsPath);
            beadMsgManager.sendOpenFile(newUri.fsPath);
        }
    });

    const onFileDeleted = vscode.workspace.onDidDeleteFiles(async (event: vscode.FileDeleteEvent) => {
        for (const file of event.files) {
            logger.info('File deleted: ', file.fsPath);

            await beadMsgManager.sendFileDelete(file.fsPath);
        }
    });

    context.subscriptions.push(onDidChangeTextDocumentDisposable);
    context.subscriptions.push(workspaceFoldersChangeDisposable);
    context.subscriptions.push(provider);

    context.subscriptions.push(textDocumentOpenedDisposable);
    context.subscriptions.push(onFileRename);
    context.subscriptions.push(onFileDeleted);
    context.subscriptions.push(vscode.workspace.onWillDeleteFiles(e => logger.info('will delete file event, count ', e.files.length)));

    registerCommands(context);

    registerCodeActions(context);    

    serverManager.on('serverStarted', serverInfo => {
        networkManager.disconnect();
        networkManager.connect(serverInfo.port);
    });

    serverManager.on('serverStopped', () => {
        networkManager.disconnect();
    });

    if (configManager.isConfigInvalid()) {
        // 配置无效
        return;
    }

    const config = configManager.getConfig();
    if (config.serverType == 'Manual') {
        networkManager.connect();
    } else if(config.serverType == 'Auto'){
        // 自动启动
        startServerProcess(config);
    }
}


// This method is called when your extension is deactivated
export function deactivate() {
    logger.info('extension "bead" is now deactivated!');
    networkManager.disconnect();

    ConfigManager.getInstance().dispose();
    serverManager.dispose();
    logger.dispose();
}


function checkCurrentWorkspace() {
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        for (let folder of vscode.workspace.workspaceFolders) {
            logger.info(`当前打开的文件夹路径: ${folder.uri.fsPath}`);
            logger.info(`当前打开的文件夹名称: ${path.basename(folder.uri.fsPath)}`);

            const projectName = path.basename(folder.uri.fsPath);
            const projectPath = folder.uri.fsPath;

            runtimeEntity.project.name = projectName;
            runtimeEntity.project.path = projectPath;

            beadMsgManager.sendInitProject(projectName, projectPath);
            break;  // only can open 1 folder now 
        }
    } 
}

function registerCodeActions(context: vscode.ExtensionContext) {
    const provider = vscode.languages.registerCodeActionsProvider(
        [
            { scheme: 'file', language: 'java' },
        ],
        {
            provideCodeActions(
                document: vscode.TextDocument,
                range: vscode.Range,
                context: vscode.CodeActionContext,
                token: vscode.CancellationToken
            ): vscode.CodeAction[] {
                const action = new vscode.CodeAction(
                    'Bead: Export type related prompt',
                    vscode.CodeActionKind.Empty
                );

                // 把 range 信息传递给命令
                action.command = {
                    command: 'bead.exportTypePrompt',
                    title: 'exportTypePrompt',
                    // 可以通过参数传递更多信息
                    arguments: [document, range]
                };

                return [action];
            }
        }
    );

    context.subscriptions.push(provider);
}

