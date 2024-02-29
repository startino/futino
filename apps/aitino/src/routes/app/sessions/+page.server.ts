import * as db from "$lib/server/db";
import type { SessionLoad } from "$lib/loads";

export const load = async () => {
	const data: SessionLoad = {
		maeveId: localStorage.getItem("maeveId"),
		sessionId: localStorage.getItem("sessionId"),
		messages: [],
		reply: localStorage.getItem("currentReply") || ""
	};

	data.messages = await db.getMessages(data.sessionId);
};
