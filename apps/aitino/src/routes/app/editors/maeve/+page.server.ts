import type { Edge, Node } from "@xyflow/svelte";

import { getMaeveNodes } from "$lib/api-client";
import { getNodesCount } from "$lib/utils.js";

export const load = async ({ locals: { userId } }) => {
	const { data } = await getMaeveNodes(userId);

	let [nodes, edges]: [Node[], Edge[]] = [[], []];

	if (data) {
		nodes = data.nodes;
		edges = data.edges;
	}

	return {
		id: data ? data.id : undefined,
		userId,
		nodes,
		edges,
		count: getNodesCount(nodes)
	};
};
