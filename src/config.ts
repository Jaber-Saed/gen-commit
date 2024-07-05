import * as vscode from 'vscode';

export const ConfigKeys = {
  API_KEY: 'API_KEY',
  API_BASE_URL: 'API_BASE_URL',
  MODEL: 'MODEL',
  AI_COMMIT_LANGUAGE: 'AI_COMMIT_LANGUAGE',
  EMOJI_ENABLED: 'EMOJI_ENABLED',
  FULL_GITMOJI_SPEC: 'FULL_GITMOJI_SPEC'
};

export function getConfig<T>(key: string): T {
  const config = vscode.workspace.getConfiguration('gen-commit');
  return config.get<T>(key, null as unknown as T);
}
