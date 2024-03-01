import * as db from "$lib/server/db";
import type { MaeveLoad } from "$lib/types/loads";
import type { PageServerLoad, Actions } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
	// BEGIN TEMP FORCE PROFILE
	const profileId = "edb9a148-a8fc-48bd-beb9-4bf5de602b78"; //cookies.get("profileId");
	const expirationDate = new Date();
	expirationDate.setMonth(expirationDate.getMonth() + 1);
	cookies.set("profileId", profileId, {
		path: "/",
		httpOnly: true,
		sameSite: "strict",
		secure: process.env.NODE_ENV === "production",
		expires: expirationDate
	});
	// END TEMP FORCE PROFILE

	if (!profileId) {
		throw error(401, "Unauthorized");
	}

	const data: MaeveLoad = {
		profileId: profileId,
		maeve: {
			id: "",
			profile_id: profileId,
			receiver_id: "",
			title: "",
			description: "",
			nodes: [],
			edges: [],
			created_at: ""
		}
	};

	const maeves = await db.getMaeves(profileId);

	console.log("tessssst");

	if (maeves.length !== 0) {
		data.maeve = maeves[0]; // TODO: select most recent maeve by default and add support for managing maeve
	}
	console.log("tetet");

	return data;
};

export const actions: Actions = {
	save: async ({ cookies, request }) => {
		const data = await request.json();

		if (!data.id) throw error(400, "Invalid Maeve ID");
		if (!data.profile_id) throw error(400, "Invalid Profile ID");
		if (!data.title) throw error(400, "Invalid Maeve Title");
		if (!data.description) throw error(400, "Invalid Maeve Description");
		if (!data.receiver_id) throw error(400, "Invalid Receiver ID");
		if (!data.nodes) throw error(400, "Invalid Maeve Nodes");
		if (!data.edges) throw error(400, "Invalid Maeve Edges");

		const { error: err } = await db.postMaeve({
			id: data.id,
			profile_id: data.profile_id,
			title: data.title,
			description: data.description,
			receiver_id: data.receiver_id,
			nodes: data.nodes,
			edges: data.edges
		});

		if (err) {
			console.log(err);
			throw error(500, "Failed attempt at saving Maeve. Please try again.");
		}
	}
};
