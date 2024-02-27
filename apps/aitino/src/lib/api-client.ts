import { supabase } from "$lib/supabase";
import type { TablesInsert } from "$lib/supabase.types";

export async function saveMaeveNodes(data: TablesInsert<"maeve_nodes">) {
	localStorage.setItem("currentMeaveId", data.id);
	return supabase.from("maeve_nodes").upsert(data);
}

export async function getMaeveNodes(userId: string) {
	return await supabase.from("maeve_nodes").select("*").eq("user_id", userId);
}
