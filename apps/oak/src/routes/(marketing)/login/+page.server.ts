import { loginUserSchema } from '$lib/schemas';
import { setError, superValidate } from 'sveltekit-superforms/server';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

export const load = async () => {
	const form = await superValidate(loginUserSchema);

	return {
		form: form
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, loginUserSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { error: authError } = await event.locals.apiClient.supabase.auth.signInWithPassword({
			email: form.data.email,
			password: form.data.password
		});

		if (authError) {
			if (authError instanceof AuthApiError && authError.status === 400) {
				setError(form, 'email', 'Invalid credentials');
				setError(form, 'password', 'Invalid credentials');
				return fail(400, {
					form
				});
			}
		} else {
			throw redirect(302, '/app');
		}
	}
};
