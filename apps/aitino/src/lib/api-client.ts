import { supabase } from '$lib/supabase';
import type { TablesInsert } from '$lib/supabase.types';

export async function saveMaeveNodes(data: TablesInsert<'maeve_nodes'>) {
	return supabase.from('maeve_nodes').upsert(data);
}

export async function getMaeveNodes(userId: string) {
	return supabase.from('maeve_nodes').select('*').eq('user_id', userId).single();
}
