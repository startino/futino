import { supabase } from "$lib/supabase";
import type { TablesInsert } from "$lib/types/supabase";
import { error } from "@sveltejs/kit";
import type { Maeve } from "$lib/types/models";
import { getNodesCount } from "$lib/utils.js";

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
	const { data: data, error: err } = await supabase
		.from("maeves")
		.select("*")
		.eq("user_id", userId);

	let maeves: Maeve[] = [];

	if (err) {
		return maeves;
	}

	if (data.length === 0) {
		return maeves;
	}

	for (let i = 0; i < data.length; i++) {
		const maeve = data[i] as Maeve;
		maeve.count = getNodesCount(maeve.nodes);

		maeves = [...maeves, maeve];
	}

	return maeves;
}
