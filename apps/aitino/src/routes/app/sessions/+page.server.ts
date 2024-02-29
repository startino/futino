import * as db from "$lib/server/db";
import type { SessionLoad } from "$lib/types/loads";

export const load = async ({ locals: { userId } }) => {
	const data: SessionLoad = {
		maeveId: null,
		sessionId: null,
		messages: [],
		reply: ""
	};

	const maeves = await db.getMaeves(userId);
	if (maeves.length === 0) {
		return data;
	}
	data.maeveId = maeves[0].id;
	data.messages = await db.getMessages(data.sessionId);
};
