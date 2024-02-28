import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "$lib/schma";
import { AuthApiError, type Provider } from "@supabase/supabase-js";

export const load = (async () => {
	return {
		registerForm: await superValidate(formSchema)
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ request, locals, url }) => {
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
		// const form = await superValidate(request, );
		const form = await superValidate(body, formSchema);

		if (!form.valid) {
			return fail(400, {
				form,
				success: false,
				errors: form.errors
			});
		}

		const { data, error: err } = await locals.supabase.auth.signUp({
			email: body.email as string,
			password: body.password as string
		});


		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				throw redirect(307, '/login');
			}
		}

		// const user = data.user;

		// if (user) {
		// 	const { error: profileError } = await locals.supabase
		// 		.from("profiles")
		// 		.insert([{ user_id: user.id, display_name: body.display_name as string }]);

		// 	if (profileError) {
		// 		console.error("Failed to create user profile:", profileError);
		// 		return fail(500, { error: "Failed to create user profile" });
		// 	}
		// }

		throw redirect(301, "/");
	}
};
