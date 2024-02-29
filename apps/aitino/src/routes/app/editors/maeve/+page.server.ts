import * as db from "$lib/server/db";
import type { MaeveLoad } from "$lib/types/loads";

export const load = async ({ locals: { userId } }) => {
	const data: MaeveLoad = {
		profileId: userId,
		maeve: {
			id: "",
			profile_id: userId,
			reciever_id: "",
			title: "",
			description: "",
			nodes: [],
			edges: [],
			created_at: ""
		}
	};

	const maeves = await db.getMaeves(userId);

	if (maeves.length !== 0) {
		data.maeve = maeves[0]; // TODO: select most recent maeve by default and add support for managing maeve
	}

	return data;
};

export const actions = {
	// 	save: async ({ cookies, request }) => {
	// 		const data = cookies.get("data");
	//
	// 		const { error } = await db.postMaeve({
	// 			id: data.maeve.id,
	// 			profile_id: data.maeve.profileId,
	// 			title: data.maeve.title,
	// 			description: data.maeve.description,
	// 			receiver_id: $receiver?.node.id ?? null,
	// 			nodes: getCleanNodes($nodes),
	// 			edges: $edges
	// 		});
	// 	}
};
