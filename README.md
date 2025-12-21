# Copy Placeholder

A Chrome extension that allows you to copy placeholder text from text fields via the right-click context menu.

## Features

- Right-click on any text input field to access the "Copy Placeholder" option
- Works with:
  - `<input>` fields (text, email, password, search, tel, url, number)
  - `<textarea>` elements
  - Contenteditable elements (supports `data-placeholder` and `aria-placeholder` attributes)
- Visual notification when placeholder is copied

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

1. Right-click on any text input field that has a placeholder
2. Select "Copy Placeholder" from the context menu
3. The placeholder text is now in your clipboard

## Permissions

This extension requires the following permissions:
- `contextMenus`: To add the "Copy Placeholder" option to the context menu
- `clipboardWrite`: To copy the placeholder text to your clipboard
- Access to all URLs: To detect placeholder text on any website

## Privacy

This extension:
- Does NOT collect any personal data
- Does NOT send any data to external servers
- Only reads placeholder attributes from text fields when you right-click
- All operations are performed locally in your browser

See [PRIVACY.md](PRIVACY.md) for the full privacy policy.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
