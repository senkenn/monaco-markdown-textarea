import type { Message } from "./types";

// if someone clicks Ctrl + E we want to send a command to the background script to open the monaco editor
type TextOrHTMLInputElement = HTMLInputElement | HTMLTextAreaElement;

const elementMap = new Map<string, TextOrHTMLInputElement>();

export default defineContentScript({
	matches: ["*://*/*"],
	main() {
		// console.log("Hello content.");
	},
});

browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	console.log("msg:", msg);

	const element = document.activeElement;
	if (element === null) {
		return;
	}

	const tempElement = element as TextOrHTMLInputElement;

	// check if target is an input field or text area, if not, return by checking nodeName
	if (tempElement.nodeName !== "INPUT" && tempElement.nodeName !== "TEXTAREA") {
		return;
	}

	const elementId = crypto.randomUUID();
	elementMap.set(elementId, tempElement);

	const currentValue = tempElement.value;

	// Send a message to the background script
	const message: Message = {
		action: "C2B_OPEN_MONACO",
		data: {
			elementId: elementId,
			text: currentValue,
		},
	};
	browser.runtime.sendMessage(message);
});
