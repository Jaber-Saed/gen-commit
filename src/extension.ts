import * as vscode from 'vscode';

import aiCommitController from './gen-commit-controller';

export async function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.gen-commit', async (arg) => {
      await aiCommitController(arg);
    })
  );
}

export function deactivate() {}
