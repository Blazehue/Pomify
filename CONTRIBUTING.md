# Contributing to Pomify

First off, thank you for considering contributing to Pomify! It's people like you that make Pomify such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:
- Be respectful and inclusive
- Welcome newcomers and be patient with beginners
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots** if possible
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List some examples** of how it would be used

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code, add tests if applicable
3. Ensure your code follows the existing style
4. Make sure your code lints (`npm run lint`)
5. Write clear commit messages
6. Include screenshots in your pull request when appropriate

## Development Process

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Pomify.git
cd Pomify

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Coding Style

- Use TypeScript for all new files
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests after the first line

Example:
```
Add notification sound settings

- Add sound volume control
- Add option to mute notifications
- Update settings panel UI

Fixes #123
```

### Testing

Before submitting a pull request:

```bash
# Run linter
npm run lint

# Build the project
npm run build

# Test in development mode
npm run dev
```

## Project Structure

```
pomify/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── pomodoro/    # Pomodoro-specific components
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript definitions
├── public/              # Static assets
└── ...config files
```

## Areas for Contribution

We especially welcome contributions in these areas:

- 🐛 **Bug Fixes** - Help squash bugs!
- 📱 **Mobile Responsiveness** - Improve mobile experience
- ♿ **Accessibility** - Make Pomify accessible to everyone
- 🎨 **UI/UX Improvements** - Enhance the user interface
- 📝 **Documentation** - Improve or translate documentation
- ✨ **New Features** - Add features from the roadmap
- 🧪 **Testing** - Add unit or integration tests
- 🌍 **Internationalization** - Add language translations

## Questions?

Feel free to:
- Open an issue with the `question` label
- Reach out to the maintainers
- Check existing documentation

Thank you for contributing! 🎉
