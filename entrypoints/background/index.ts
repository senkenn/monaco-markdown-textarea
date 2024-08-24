import type { Windows } from "wxt/browser";
import type { Message } from "./types";

export default defineBackground(() => {
	browser.commands.onCommand.addListener((command, tab) => {
		console.log("command:", command, tab);
		const message: Message = {
			action: "B2C_EDIT_CURRENT_FIELD",
			data: undefined,
		};
		if (command === "edit-field-with-monaco" && tab?.id) {
			browser.tabs.sendMessage(tab.id, message);
		}
		// if (command === "edit-field-with-monaco" && tab?.id) {
		//   browser.tabs.executeScript(tab.id, { file: "content.js" }, () => {
		//     const message: Message = {
		//       action: "B2C_EDIT_CURRENT_FIELD",
		//       data: undefined,
		//     };
		//     browser.tabs.sendMessage(tab.id, message);
		//   });
		// }
	});

	browser.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
		if (msg.action === "C2B_OPEN_MONACO") {
			const openMonacoMessage = msg;
			const frameLessWindowOptions: Windows.CreateCreateDataType = {
				url: "./popup-editor.html",
				type: "popup",
				width: 300,
				height: 600,
				focused: true,
			};
			const monacoWindow = await browser.windows.create(frameLessWindowOptions);
			// if (monacoWindow.id === undefined) {
			// 	console.error("Could not create window");
			// 	return;
			// }
			// if (sender.tab === undefined) {
			// 	console.error("Could not get tab");
			// 	return;
			// }
			// const monacoWindowConfig = {
			// 	data: {
			// 		text: openMonacoMessage.data.text,
			// 		callbackTabId: sender.tab.id,
			// 		elementId: openMonacoMessage.data.elementId,
			// 	},
			// };
			// // store the text in the map
			// windowIdToConfigMap.set(monacoWindow.id, monacoWindowConfig);
		}
	});
});
