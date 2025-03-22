# bead README

Two main features: 
- A code auto completion tool for openai/[fauxpilot](https://github.com/fauxpilot/fauxpilot) server.
- Export type-related prompt text.

The server part is not open source. You can download it from release page.

[vscode market](https://marketplace.visualstudio.com/items?itemName=Aincvy.bead-auto-completion) 


## bead-server

start command: `.\bead-server.exe --config_file .\bead-server.config.json`

### config options

- openai:  which model do you want to use? (use model name)
- models:  model name and model info
  - promptMaxLength:  max characters the client will send.
  - topicPrompt: useless, you can change it in vscode command: Bead: Set Topic Prompt.
- functionReferenceCount:  when construct a prompt, how many methods(code) above this method will include?
- singleRefFunctionMaxCharCount:  characters.
- textCompletionReqAllowTime: milliseconds. *packet sent from vscode and packet handle time will less than this value.*

### deepseek-chat model

It can use, but very slow(response in seconds). Prefer fauxpilot server(my gpu is 4070TI, very good feeling).
