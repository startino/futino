import { setError, superValidate } from 'sveltekit-superforms/server';
import { registerUserSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';;
import type { Actions, PageServerLoad } from "./$types";
import { AuthApiError } from "@supabase/supabase-js";
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

export const load: PageServerLoad = async ({locals: getSession}) => {
	const form = await superValidate(registerUserSchema);

	return {
		session: await getSession,
		form: form
	}
}

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, registerUserSchema);

		if (!form.valid) {
			return fail(400, {
				msg: form.errors,
				form: form
			})
		}

		if(form.data.password !== form.data.confirmPassword) {
			return setError(form, "confirmPassword", "Passwords do not match");
		}

		
		//TODO:  Register user

		return {
			msg: "Form is valid!",
			form: form
		}

	},
}