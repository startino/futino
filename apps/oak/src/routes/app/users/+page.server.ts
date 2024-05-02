import { setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

import { profileSchema } from '$lib/schemas';
import type { JoinedProfile } from '$lib/types';

export const load = async () => {
	const form = await superValidate(zod(profileSchema));

	return { form };
};

export const actions = {
	default: async ({ request, locals: { apiClient, orgID } }) => {
		const form = await superValidate(request, zod(profileSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const formData = form.data;

		const { error, data } = await apiClient.supabase.auth.admin.createUser({
			email: formData.email,
			password: formData.password,
			email_confirm: true,
			user_metadata: {
				organization_id: orgID,
				...formData
			}
		});

		if (error) {
			if (error.code === 'email_exists') {
				return setError(form, 'This email is already registered', { status: 400 });
			}
			return setError(form, 'Something went wrong while adding user. Please try again.', {
				status: 500
			});
		}

		const { data: newProfile } = await apiClient.supabase
			.from('profiles')
			.select('*, approver:approver_id (*)')
			.eq('id', data.user.id)
			.returns<JoinedProfile[]>()
			.single();

		return { newProfile };
	}
};
