import { setError, superValidate } from 'sveltekit-superforms/server';
import { registerUserSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(registerUserSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, registerUserSchema);

		if (!form.valid) {
			return fail(400, {
				msg: form.errors,
				form: form
			});
		}

		if (form.data.password !== form.data.confirmPassword) {
			return setError(form, 'confirmPassword', 'Passwords do not match');
		}

		const { error: authError } = await event.locals.supabase.auth.signUp({
			email: form.data.email,
			password: form.data.password,
			options: {
				data: {
					full_name: form.data.fullName
				}
			}
		});

		if (authError) {
			return setError(form, 'An error occured while registering.');
		} else {
			throw redirect(302, '/login');
		}
	}
};
