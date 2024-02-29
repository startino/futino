import type { Edge, Node } from "@xyflow/svelte";

import * as db from "$lib/server/db";
import { getNodesCount } from "$lib/utils.js";
import { error } from "@sveltejs/kit";

export const load = async ({ locals: { userId } }) => {
	const { data, error: err } = await db.getMaeve(userId);
	if (err) {
		throw error(500, "Failed attempt at retrieving maeve. Please reload the page.");
	}

	if (data.length === 0) {
		return {
			user_id: userId,
			title: "Untitled maeve",
			description: "No description",
			nodes: [],
			edges: [],
			count: {
				agents: 0,
				prompts: 0
			}
		};
	}

	const nodes = data[0].nodes as Node[];

	return {
		...data[0],
		nodes,
		edges: data[0].edges as Edge[],
		count: getNodesCount(nodes)
	};
};
