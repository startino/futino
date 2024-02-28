import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		console.log(body, "from register server");

		const { data, error } = await locals.supabase.auth.signUp({
			email: body.email as string,
			password: body.password as string,
		});

		console.log(data, "data", error, "error");

		if (error) {
			return fail(500, {
				error: error.message
			});
		}

		throw redirect(303, "/");
	}
};
