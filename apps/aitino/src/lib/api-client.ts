import { type Node, type Edge } from '@xyflow/svelte';

import { supabase } from '$lib/supabase';

export async function saveMaeveNodes(data: {
	id?: string;
	title: string;
	description: string;
	user_id: string;
	receiver_id: string | null;
	nodes: Node[];
	edges: Edge[];
}) {
	return supabase.from('maeve_nodes').upsert(data);
}

export async function getMaeveNodes(userId: string) {
	return supabase.from('maeve_nodes').select('*').eq('user_id', userId).single();
}
