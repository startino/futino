import { fail, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { resetPasswordSchema } from '$lib/schemas';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const form = await superValidate(zod(resetPasswordSchema));

	return { form };
};

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const form = await superValidate(request, zod(resetPasswordSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const { error } = await supabase.auth.updateUser({
			password: form.data.password
		});

		if (error) {
			console.log({ error });
			return setError(form, 'Something went wrong, please try again', { status: 500 });
		}

		redirect(302, '/app/personal-account');
	}
};
