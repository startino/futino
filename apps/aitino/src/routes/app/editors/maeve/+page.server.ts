import type { Edge, Node } from '@xyflow/svelte';

import { getMaeveNodes } from '$lib/api-client';
import { getNodesCount } from '$lib/utils.js';
import { error } from '@sveltejs/kit';

export const load = async ({ locals: { userId } }) => {
	const { data, error: err } = await getMaeveNodes(userId);

	if (err) {
		throw error(500, 'something went wrong');
	}

	const nodes = data.nodes as Node[];

	return {
		...data,
		nodes,
		edges: data.edges as Edge[],
		count: getNodesCount(nodes)
	};
};
