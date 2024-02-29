import type { Edge, Node } from "@xyflow/svelte";

import * as db from "$lib/server/db";
import type { MaeveLoad } from "$lib/types/loads";
import { error } from "@sveltejs/kit";

export const load = async ({ locals: { userId } }) => {
	const data: MaeveLoad = {
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
		data.maeve = maeves[0];
	}

	return data;
};
