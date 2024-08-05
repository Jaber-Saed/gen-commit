# Gen Commit

Gen Commit is a VS Code extension that simplifies the commit process by automatically generating commit messages based on your Git changes. It supports multiple AI models and offers customizable features to enhance your Git workflow.

## Features

- Generate commit messages using OpenAI API and other OpenAI-compatible APIs (Llama3, WizardCoder, Mistral, DeepSeek-Coder)
- Support for multi-language commit messages
- Optional Gitmoji integration

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "Gen Commit"
4. Click Install

## Usage

1. Ensure the "Gen Commit" extension is installed and enabled
2. Configure the extension settings (see Configuration section)
3. Make changes in your project and stage them (`git add`)
4. In the Source Control panel, click the "Gen Commit" icon next to the commit message input box
5. Review the generated commit message and commit your changes

> **Note**: If your code changes exceed the maximum token length, consider staging and committing in smaller batches.

## Configuration

Configure the extension in VS Code settings under the "gen-commit" section:

| Configuration      | Type    | Default | Required | Description |
|--------------------|---------|---------|----------|-------------|
| API_KEY            | string  | None    | Yes      | Your AI service API key |
| API_BASE_URL       | string  | None    | Yes      | Base URL for the AI service API |
| AI_MODEL_NAME      | string  | None    | Yes      | Name of the AI model to use |
| AI_COMMIT_LANGUAGE | string  | "en"    | Yes      | Language for commit messages |
| EMOJI_ENABLED      | boolean | false    | Yes      | Enable/disable Gitmoji |
| FULL_GITMOJI_SPEC  | boolean | false   | No       | Use full Gitmoji specification |


   ### Example Configuration

    {
      "gen-commit.API_KEY": "your-api-key",
      "gen-commit.API_BASE_URL": "https://api.openai.com",
      "gen-commit.AI_MODEL_NAME": "gpt-3.5-turbo",
      "gen-commit.AI_COMMIT_LANGUAGE": "en",
      "gen-commit.EMOJI_ENABLED": true,
      "gen-commit.FULL_GITMOJI_SPEC": false
    }





## Supported AI Models

- OpenAI GPT models
- Llama3
- WizardCoder
- Mistral
- DeepSeek-Coder

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

## Support

If you encounter any problems or have any suggestions, please open an issue in the GitHub repository.

If you find this project useful, please consider starring🌟 our GitHub repository to support our work! Your star helps us grow and continue developing new features.
