import { getMaeveNodes } from '$lib/api-client';
import type { Edge, Node } from '@xyflow/svelte';

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
		count: {
			agents: nodes.filter((n) => n.type === 'agent').length,
			prompts: nodes.filter((n) => n.type === 'prompt').length
		}
	};
};
