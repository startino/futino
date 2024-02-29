import * as db from "$lib/server/db";
import type { SessionLoad } from "$lib/types/loads";
import type { Maeve, Session } from "$lib/types/models";
import type { PageServerLoad, Actions } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
	const profileId = cookies.get("profileId");

	if (!profileId) {
		throw error(401, "Unauthorized");
	}

	const data: SessionLoad = {
		profileId: profileId,
		maeveId: null,
		session: null,
		messages: [],
		reply: ""
	};

	const maeves: Maeve[] = await db.getMaeves(profileId);
	if (maeves.length !== 0) {
		data.maeveId = maeves[0].id;

		const sessions: Session[] = await db.getSessions(data.profileId, data.maeveId);
		if (sessions.length !== 0) {
			data.session = sessions[0];

			data.messages = await db.getMessages(data.session.id);
		}
	}

	return data;
};

export const actions: Actions = {
	// create: async ({ request }) => {
	// 	const data = await request.formData();
	// 	db.createTodo(cookies.get('userid'), data.get('description'));
	// },
	//
	// delete: async ({ request }) => {
	// 	const data = await request.formData();
	// 	db.deleteTodo(cookies.get('userid'), data.get('id'));
	// }
};
