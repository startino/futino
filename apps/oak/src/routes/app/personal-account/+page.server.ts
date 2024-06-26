import { fail, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { emailSchema, departmentIdSchema } from '$lib/schemas';

export const load = async ({ locals: { user } }) => {
	const emailForm = await superValidate(zod(emailSchema));
	const departmentForm = await superValidate(zod(departmentIdSchema));

	return { email: user.email, emailForm, departmentForm };
};

export const actions = {
	updateEmail: async ({ request, locals: { supabase } }) => {
		const emailForm = await superValidate(request, zod(emailSchema));

		if (!emailForm.valid) {
			return fail(400, { emailForm });
		}

		const { error } = await supabase.auth.updateUser({ email: emailForm.data.email });

		if (error) {
			if (error.code === 'email_exists') {
				return setError(emailForm, 'email', 'This email is already registered', { status: 400 });
			}
			return setError(emailForm, 'email', 'Unable to update the email. Please try again.', {
				status: 500
			});
		}

		return { emailForm };
	},
	updateDepartment: async ({ request, locals: { supabase, currentProfile } }) => {
		const departmentForm = await superValidate(request, zod(departmentIdSchema));

		if (!departmentForm.valid) {
			return fail(400, { departmentForm });
		}

		const { error } = await supabase
			.from('profiles')
			.update(departmentForm.data)
			.eq('id', currentProfile.id);

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
