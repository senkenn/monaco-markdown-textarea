# Process Flow for Developers

## 1. Trigger with Shortcut, Ctrl+M

Send a message that invokes the command edit-field-with-monaco to the content script.

```ts
const message = {
  action: "B2C_EDIT_CURRENT_FIELD",
};
```

## 2. Get the current text in the textarea

Content script receives the message from the background and re-sends the textareas' value to the background.

```ts
const message = {
  action: "C2B_OPEN_MONACO",
  data: {
    elementId: "xxxxxxxx-xxxx-4xxx-vxxx-xxxxxxxxxxxx",
    text: textarea.value,
  },
};
```

## 3. Open Monaco Editor

Background script receives the message from the content script and opens the Monaco Editor.
