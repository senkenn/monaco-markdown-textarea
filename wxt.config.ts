import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ["@wxt-dev/module-react"],
	manifest: {
		name: "Monaco Markdown",
		version: "0.0.0",
		commands: {
			"edit-field-with-monaco": {
				suggested_key: {
					default: "Ctrl+M",
					mac: "Command+M",
				},
				description: "Edit current text field",
			},
		},
		content_scripts: [
			{
				matches: ["*://*/*"],
				js: ["content-scripts/content.js"],
			},
		],
		web_accessible_resources: [
			{
				resources: ["example-iframe.html"],
				matches: ["<all_urls>"],
			},
		],
	},
});
