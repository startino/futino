import { loginUserSchema } from "$lib/schemas";
import { setError, superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(loginUserSchema);
	return {
		form: form
	};
};

export const actions: Actions = {
	default: async (event) => {
		const redirectTo = event.url.searchParams.get("redirectTo");
		const form = await superValidate(event, loginUserSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { error: authError } = await event.locals.supabase.auth.signInWithPassword(form.data);

		if (authError) {
			if (authError instanceof AuthApiError && authError.status === 400) {
				setError(form, "email", "Invalid credentials");
				setError(form, "password", "Invalid credentials");
				return fail(400, {
					form
				});
			}
		}

		if (redirectTo) {
			throw redirect(302, `/${redirectTo.slice(1)}`);
		}

		throw redirect(302, "/");
	}
};
