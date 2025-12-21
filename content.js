// Listen for double-click events on the document
document.addEventListener("dblclick", (event) => {
  const target = event.target;

  // Check if target is an editable text field
  if (!isEditableTextField(target)) {
    return;
  }

  // Check if the field is empty and has a placeholder
  const placeholder = getPlaceholder(target);
  if (!placeholder) {
    return;
  }

  if (!isEmpty(target)) {
    return;
  }

  // Fill the field with the placeholder value
  fillWithPlaceholder(target, placeholder);
});

// Check if element is an editable text field
function isEditableTextField(element) {
  if (!element) return false;

  const tagName = element.tagName.toLowerCase();

  // Input fields with text-like types
  if (tagName === "input") {
    const textTypes = ["text", "email", "search", "tel", "url", ""];
    const type = (element.type || "").toLowerCase();
    return textTypes.includes(type);
  }

  // Textarea
  if (tagName === "textarea") {
    return true;
  }

  return false;
}

// Get placeholder from element
function getPlaceholder(element) {
  if (!element) return null;
  return element.placeholder || null;
}

// Check if field is empty
function isEmpty(element) {
  return element.value === "";
}

// Fill the field with placeholder text
function fillWithPlaceholder(element, placeholder) {
  // Set the value
  element.value = placeholder;

  // Dispatch input event to trigger any listeners
  const inputEvent = new Event("input", { bubbles: true, cancelable: true });
  element.dispatchEvent(inputEvent);

  // Dispatch change event
  const changeEvent = new Event("change", { bubbles: true, cancelable: true });
  element.dispatchEvent(changeEvent);

  // Select all the text so user can easily modify or replace
  element.select();
}
