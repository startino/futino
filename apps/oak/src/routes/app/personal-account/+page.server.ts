import { fail, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { emailSchema } from '$lib/schemas';

export const load = async ({ locals: { apiClient } }) => {
	const emailForm = await superValidate(zod(emailSchema));
	return { email: apiClient.user.email, emailForm };
};

export const actions = {
	updateEmail: async ({ request, locals: { supabase, apiClient } }) => {
		const emailForm = await superValidate(request, zod(emailSchema));

		if (!emailForm.valid) {
			return fail(400, { emailForm });
		}

		const { data, error } = await supabase.auth.updateUser({ email: emailForm.data.email });

		if (error) {
			return setError(emailForm, 'email', { status: 500 });
		}

		apiClient.user = data.user;

		return { emailForm };
	}
};
