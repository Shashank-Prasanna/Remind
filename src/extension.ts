// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { watchFile } from 'fs';
import { monitorEventLoopDelay } from 'perf_hooks';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "remind" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let test = vscode.commands.registerCommand('remind.testRemind', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage("If you get this message, it means that Remind is working!");
	});

	let gitUpload = vscode.commands.registerCommand('remind.gitUploadRemind', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('git add fileName.js', 'Continue')
		.then(selection => {
				vscode.window.showInformationMessage('git commit -m "commit message"', 'Continue')
				.then(selection => {
							vscode.window.showInformationMessage('git push -u remoteName', 'Done');
						});
				});

	});

	let gitInitialize = vscode.commands.registerCommand('remind.gitInitializeRemind', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage("Create a github repository", 'Continue')
		.then(selection => {
			vscode.window.showInformationMessage('git remote add remoteName https://github.com/link.git', 'Done')
		});
	});

	context.subscriptions.push(test);
	context.subscriptions.push(gitUpload);
	context.subscriptions.push(gitInitialize)
}

// this method is called when your extension is deactivated
export function deactivate() {
	vscode.window.showWarningMessage("Remind is disabled");
}

// Repository Link: https://github.com/Shashank-Prasanna/Remind