import { type Node, type Edge } from '@xyflow/svelte';

import { supabase } from '$lib/supabase';

export async function saveMaeveNodes(data: { user_id: string; nodes: Node[]; edges: Edge[] }) {
	return supabase.from('maeve_nodes').upsert(data);
}

export async function getMeaveNodes(userId: string) {
	return supabase.from('maeve_nodes').select('*').eq('user_id', userId).single();
}
