// Create context menu item when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyPlaceholder",
    title: "Copy Placeholder",
    contexts: ["editable"]
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyPlaceholder") {
    chrome.tabs.sendMessage(tab.id, { action: "getPlaceholder" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error:", chrome.runtime.lastError.message);
        return;
      }
      if (response && response.placeholder) {
        // Copy to clipboard using offscreen document or content script
        chrome.tabs.sendMessage(tab.id, {
          action: "copyToClipboard",
          text: response.placeholder
        });
      }
    });
  }
});
