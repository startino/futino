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
	if (!data.id) throw error(400, "Invalid Maeve ID");
	if (!data.profile_id) throw error(400, "Invalid Profile ID");
	if (!data.title) throw error(400, "Invalid Maeve Title");
	if (!data.description) throw error(400, "Invalid Maeve Description");
	if (!data.receiver_id) throw error(400, "Invalid Receiver ID");
	if (!data.nodes) throw error(400, "Invalid Maeve Nodes");
	if (!data.edges) throw error(400, "Invalid Maeve Edges");

	return supabase.from("maeves").upsert(data);
}

export async function getMaeves(profileId: string) {
	const { data, error: err } = await supabase
		.from("maeves")
		.select("*")
		.eq("profile_id", profileId);

	if (err) {
		return [];
	}
	if (data.length === 0) {
		return [];
	}

	const maeves: Maeve[] = data as Maeve[];

	return maeves;
}

export async function getSessions(profileId: string, maeveId: string) {
	const { data, error: err } = await supabase
		.from("sessions")
		.select("*")
		.eq("profile_id", profileId)
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
