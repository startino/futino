import { setError, superValidate } from 'sveltekit-superforms/server';
import { registerUserSchema } from '$lib/schemas';
import { fail, redirect, error } from '@sveltejs/kit';;
import type { Actions, PageServerLoad } from "./$types";
import { AuthApiError } from "@supabase/supabase-js";
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

export const load: PageServerLoad = async (event) => {

	const session = await event.locals.getSession();

	return {
		form: await superValidate(registerUserSchema)
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

		if (form.data.password !== form.data.confirmPassword) {
			return setError(form, "confirmPassword", "Passwords do not match");
		}


		const { error: authError } = await event.locals.supabase.auth.signInWithOtp({
			email: form.data.email,
			options: {
				emailRedirectTo: `http://localhost:5173/home`
			}
			
		});

		if (authError) {
			return setError(form, "An error occured while registering.");
		} 
		else {
			throw redirect(302, "/home");
		}
		return {
			msg: "Form is valid!",
			form: form
		}

	},
}