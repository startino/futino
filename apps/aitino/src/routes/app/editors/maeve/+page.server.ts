import type { Edge, Node } from '@xyflow/svelte';

import { getMaeveNodes } from '$lib/api-client';
import { getNodesCount } from '$lib/utils.js';
import { error } from '@sveltejs/kit';

export const load = async ({ locals: { userId } }) => {
	const { data, error: err } = await getMaeveNodes(userId);
	if (err) {
		throw error(500, 'something went wrong');
	}

	if (data.length === 0) {
		return {
			title: 'Untitled maeve',
			description: 'No description',
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
