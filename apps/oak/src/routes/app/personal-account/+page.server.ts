import { fail, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { emailSchema, departmentIdSchema } from '$lib/schemas';

export const load = async ({ locals: { apiClient } }) => {
	const emailForm = await superValidate(zod(emailSchema));
	const departmentForm = await superValidate(zod(departmentIdSchema));

	return { email: apiClient.user.email, emailForm, departmentForm };
};

export const actions = {
	updateEmail: async ({ request, locals: { supabase, apiClient } }) => {
		const emailForm = await superValidate(request, zod(emailSchema));

		if (!emailForm.valid) {
			return fail(400, { emailForm });
		}

		const { data, error } = await supabase.auth.updateUser({ email: emailForm.data.email });

		if (error) {
			return setError(emailForm, 'email', 'Unable to update the email. Please try again.', {
				status: 500
			});
		}

		apiClient.user = data.user;

		return { emailForm };
	},
	updateDepartment: async ({ request, locals: { supabase, apiClient, currentProfile } }) => {
		const departmentForm = await superValidate(request, zod(departmentIdSchema));

		if (!departmentForm.valid) {
			return fail(400, { departmentForm });
		}

		const { error } = await supabase
			.from('profiles')
			.update(departmentForm.data)
			.eq('id', apiClient.user.id);

		if (error) {
			departmentForm.data.department_id = currentProfile.department_id;
			return setError(
				departmentForm,
				'department_id',
				'Unable to update the department. Please try again.',
				{ status: 500 }
			);
		}

		return { departmentForm };
	}
};
