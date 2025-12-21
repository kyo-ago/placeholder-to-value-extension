# Placeholder to Value

A Chrome extension that fills empty text fields with their placeholder text when you double-click them.

## Features

- Double-click any empty text field to fill it with its placeholder text
- Works with:
  - `<input>` fields (text, email, search, tel, url)
  - `<textarea>` elements
- Automatically selects the filled text for easy editing
- Triggers input/change events for compatibility with forms

## Installation

### From Chrome Web Store
1. Visit the [Chrome Web Store page](https://chrome.google.com/webstore) (link coming soon)
2. Click "Add to Chrome"

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the extension directory

## Usage

1. Find any text input field that has a placeholder and is empty
2. Double-click on the field
3. The placeholder text is now entered as the field's value

## Permissions

This extension requires minimal permissions:
- Access to all URLs: To detect and fill placeholder text on any website

## Privacy

This extension:
- Does NOT collect any personal data
- Does NOT send any data to external servers
- Only reads placeholder attributes from text fields when you double-click
- All operations are performed locally in your browser

See [PRIVACY.md](PRIVACY.md) for the full privacy policy.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
