import { loginSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate, setError } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const form = await superValidate(zod(loginSchema));

	return {
		form
	};
};

export const actions = {
	default: async ({ request, locals: { apiClient } }) => {
		const form = await superValidate(request, zod(loginSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const { error } = await apiClient.supabase.auth.signInWithPassword(
			form.data as Required<typeof form.data>
		);

		if (error) {
			return setError(form, error.message, { status: 400 });
		}

		redirect(302, '/app');
	}
};
