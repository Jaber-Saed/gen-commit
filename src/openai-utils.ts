import OpenAI from 'openai';
import { ConfigKeys, getConfig } from './config';

const apiKey = getConfig<string>(ConfigKeys.API_KEY);
const baseURL = getConfig<string>(ConfigKeys.API_BASE_URL);
const model = getConfig<string>(ConfigKeys.MODEL);

if (!apiKey) {
  throw new Error('The API_KEY environment variable is missing or empty.');
}

if (!baseURL) {
  throw new Error('The API_BASE_URL environment variable is missing or empty.');
}

const openaiConfig: {
  apiKey: string;
  baseURL: string;
} = {
  apiKey,
  baseURL
};

const openai = new OpenAI(openaiConfig);

export async function ChatGPTAPI(messages) {
  const result = await openai.chat.completions.create({
    model,
    messages
  });
  return result.choices[0]!.message?.content;
}
