import * as db from "$lib/server/db";
import type { SessionLoad } from "$lib/types/loads";
import type { Maeve, Session } from "$lib/types/models";
import type { Re

export const load = async ({ locals: { userId } }) => {
	const data: SessionLoad = {
		profileId: userId,
		maeveId: null,
		session: null,
		messages: [],
		reply: ""
	};

	const maeves: Maeve[] = await db.getMaeves(userId);
	if (maeves.length === 0) return data;
	data.maeveId = maeves[0].id;

	const sessions: Session[] = await db.getSessions(data.profileId, data.maeveId);
	if (sessions.length === 0) return data;
	data.session = sessions[0];

	data.messages = await db.getMessages(data.session.id);
};

export const actions = {
	create: async ({ request: Request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userid'), data.get('description'));
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};
