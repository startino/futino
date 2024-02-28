import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { Provider } from "@supabase/supabase-js";

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async ({ request, locals, cookies, url }) => {
		const provider = url.searchParams.get("provider") as Provider;
		if (provider) {
			const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
				provider: provider
			});

			if (err) {
				console.log(err);
				return fail(400, {
					message: "Something went wrong"
				});
			}

			throw redirect(307, data.url);
		}
		const body = Object.fromEntries(await request.formData());

		const { data, error } = await locals.supabase.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		});

		// if (data) {
		// 	cookies.set("session", data.session.access_token, {
		// 		path: "/",
		// 		httpOnly: true,
		// 		expires: data.session.expires_at ? new Date(data.session.expires_at) : undefined
		// 	});
		// }

		if (error) {
			return fail(500, {
				error: error.message
			});
		}

		throw redirect(307, "/");
	}
};
