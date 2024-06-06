import type { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, error } from '@sveltejs/kit';
import genarator from 'generate-password';

const { generate: generatePassword } = genarator;

import type { Database } from '$lib/server/supabase.types';
import { createUserByAdminSchema, updateUserByAdminSchema } from '$lib/schemas';
import type { JoinedProfile } from '$lib/types';
import { PUBLIC_SITE_URL, PUBLIC_SMTP_USER } from '$env/static/public';

export const load = async ({ locals: { iam } }) => {
	iam.isAllowedTo('profiles.create');
	const createForm = await superValidate(zod(createUserByAdminSchema));
	const updateForm = await superValidate(zod(updateUserByAdminSchema));
	return { createForm, updateForm };
};

export const actions = {
	create: async ({
		request,
		locals: {
			smtpTransporter,
			supabase,
			currentProfile: { organization_id }
		}
	}) => {
		const createForm = await superValidate(request, zod(createUserByAdminSchema));

		if (!createForm.valid) {
			return fail(400, { createForm });
		}

		const formData = createForm.data;
		formData.password = generatePassword({ numbers: true, strict: true });

		const { error: authError, data } = await supabase.auth.admin.createUser({
			email: formData.email,
			password: formData.password,
			user_metadata: {
				organization_id,
				...formData
			}
		});

		if (authError) {
			console.log({ authError });

			if (authError.code === 'email_exists') {
				return setError(createForm, 'This email is already registered', { status: 400 });
			}
			return setError(createForm, 'Something went wrong while adding user. Please try again.', {
				status: 500
			});
		}

		const {
			data: {
				properties: { action_link }
			}
		} = await supabase.auth.admin.generateLink({
			email: formData.email,
			password: formData.password,
			type: 'signup',
			options: {
				redirectTo: `${PUBLIC_SITE_URL}/login?confirmed&email=${formData.email}`
			}
		});

		smtpTransporter.sendMail({
			template: 'new-user',
			from: `"Oak" <${PUBLIC_SMTP_USER}>`,
			to: formData.email,
			subject: 'Your Oak credentials',
			context: {
				email: formData.email,
				password: formData.password,
				action_link
			}
		});

		const { data: newProfile, error: profileError } = await supabase
			.from('profiles')
			.select('*, approver:approver_id (*), department:department_id (*)')
			.eq('id', data.user.id)
			.returns<JoinedProfile[]>()
			.single();

		if (profileError) {
			console.log({ profileError });
			return error(500, 'Something went wrong');
		}

		return message(createForm, newProfile);
	},
	update: async ({ request, locals: { supabase } }) => {
		const updateForm = await superValidate(request, zod(updateUserByAdminSchema));

		if (!updateForm.valid) {
			return fail(400, { updateForm });
		}

		const formData = updateForm.data;

		const { result, error: cycleError } = await hasCycle(
			formData.id,
			formData.approver_id,
			supabase
		);

		if (cycleError) {
			return setError(updateForm, 'Something went wrong while saving changes. Please try again.', {
				status: 500
			});
		}

		if (result)
			return setError(
				updateForm,
				'approver_id',
				'Cannot use this user as an approver as it might leads an infinite approval loop'
			);

		const { data: updatedProfile, error } = await supabase
			.from('profiles')
			.update({ ...formData })
			.eq('id', formData.id)
			.select('*, approver:approver_id (*), department:department_id (*)')
			.returns<JoinedProfile[]>()
			.single();

		if (error) {
			console.log({ error });

			return setError(updateForm, 'Something went wrong while saving changes. Please try again.', {
				status: 500
			});
		}

		return { updateForm, updatedProfile };
	}
};

const hasCycle = async (
	userId: string,
	approverId: string | null,
	supabase: SupabaseClient<Database>,
	visited: Array<string> = []
): Promise<{ result: boolean | null; error: PostgrestError | null }> => {
	if (!approverId) return { result: false, error: null };

	if (visited.length === 0) visited.push(userId);

	if (visited.includes(approverId)) return { result: true, error: null };

	visited.push(approverId);

	const { data, error } = await supabase.from('profiles').select().eq('id', approverId).single();

	if (error) return { error, result: null };

	return await hasCycle(userId, data.approver_id, supabase, visited);
};
