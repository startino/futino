import { supabase } from "$lib/supabase";
import type { TablesInsert } from "$lib/supabase.types";
import { error } from "@sveltejs/kit";

export async function getMessages(session_id: string | null) {
	if (!session_id) {
		return [];
	}
	const { data, error: err } = await supabase
		.from("messages")
		.select("*")
		.eq("session_id", session_id);
	if (err) {
		throw error(500, "Failed attempt at retrieving messages. Please reload the page.");
	}

	if (data.length === 0) {
		return [];
	}

	return data;
}

export async function postMaeve(data: TablesInsert<"maeve_nodes">) {
	localStorage.setItem("currentMeaveId", data.id);
	return supabase.from("maeve_nodes").upsert(data);
}

export async function getMaeve(userId: string) {
	return await supabase.from("maeve_nodes").select("*").eq("user_id", userId);
}
