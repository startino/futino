import { supabase } from "$lib/supabase";
import type { TablesInsert } from "$lib/types/supabase";
import { error } from "@sveltejs/kit";
import type { Maeve, Session } from "$lib/types/models";

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

export async function postMaeve(data: TablesInsert<"maeves">) {
	localStorage.setItem("currentMeaveId", data.id);
	return supabase.from("maeves").upsert(data);
}

export async function getMaeves(userId: string) {
	const { data, error: err } = await supabase.from("maeves").select("*").eq("user_id", userId);

	if (err) {
		return [];
	}
	if (data.length === 0) {
		return [];
	}

	const maeves: Maeve[] = data as Maeve[];

	return maeves;
}

export async function getSessions(userId: string, maeveId: string) {
	const { data, error: err } = await supabase
		.from("sessions")
		.select("*")
		.eq("user_id", userId)
		.eq("maeve_id", maeveId);

	if (err) {
		return [];
	}
	if (data.length === 0) {
		return [];
	}

	const sessions: Session[] = data as Session[];

	return sessions;
}
