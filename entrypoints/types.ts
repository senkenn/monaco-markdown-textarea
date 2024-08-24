export type Message = {
	action: keyof MessageData;
	data: MessageData[keyof MessageData];
};

type MessageData = {
	C2B_OPEN_MONACO: {
		text: string;
		elementId: string;
	};
	// P2B_GET_MONACO_CONFIG: {
	// 	windowId: number;
	// };
	// B2P_SEND_MONACO_TEXT: {
	// 	text: string;
	// 	elementId: string;
	// };

	/**
	 * background to content
	 */
	B2C_EDIT_CURRENT_FIELD: undefined;
};

export default defineUnlistedScript(() => {});
