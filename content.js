// Track the last focused element
let lastFocusedElement = null;

// Listen for focus events on editable elements
document.addEventListener("focusin", (event) => {
  const target = event.target;
  if (isEditableElement(target)) {
    lastFocusedElement = target;
  }
});

// Also track on contextmenu event (right-click)
document.addEventListener("contextmenu", (event) => {
  const target = event.target;
  if (isEditableElement(target)) {
    lastFocusedElement = target;
  }
});

// Check if element is an editable text field
function isEditableElement(element) {
  if (!element) return false;

  const tagName = element.tagName.toLowerCase();

  // Input fields with text-like types
  if (tagName === "input") {
    const textTypes = ["text", "email", "password", "search", "tel", "url", "number"];
    return textTypes.includes(element.type.toLowerCase()) || !element.type;
  }

  // Textarea
  if (tagName === "textarea") {
    return true;
  }

  // Contenteditable elements
  if (element.isContentEditable) {
    return true;
  }

  return false;
}

// Get placeholder from element
function getPlaceholder(element) {
  if (!element) return null;

  // Standard placeholder attribute
  if (element.placeholder) {
    return element.placeholder;
  }

  // For contenteditable, check for data-placeholder or aria-placeholder
  if (element.isContentEditable) {
    return element.getAttribute("data-placeholder") ||
           element.getAttribute("aria-placeholder") ||
           null;
  }

  return null;
}

// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showNotification("Placeholder copied!");
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      showNotification("Placeholder copied!");
    } catch (execErr) {
      console.error("Failed to copy:", execErr);
      showNotification("Failed to copy placeholder", true);
    }
    document.body.removeChild(textArea);
  }
}

// Show a brief notification
function showNotification(message, isError = false) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    background-color: ${isError ? "#f44336" : "#4CAF50"};
    color: white;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    z-index: 2147483647;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 2000);
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPlaceholder") {
    const placeholder = getPlaceholder(lastFocusedElement);
    sendResponse({ placeholder: placeholder });
  } else if (request.action === "copyToClipboard") {
    if (request.text) {
      copyToClipboard(request.text);
    } else {
      showNotification("No placeholder found", true);
    }
  }
  return true;
});
