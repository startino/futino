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
		console.log(provider, "provider");
		if (provider) {
			const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
				provider: provider
			});

			console.log(data, "data from provider");

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
		console.log(form, "form zod supervalidate");
		console.log(body, "from register server");

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { data, error: err } = await locals.supabase.auth.signUp({
			email: body.email as string,
			password: body.password as string
		});

		console.log(data, "data", err, "error");

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: "Invalid credentials"
				});
			}
			return fail(500, {
				message: "Server error. Please try again later."
			});
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

		return {
			success: true,
			message: "Check your email for the verification link"
		};
	}
};
