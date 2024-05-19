import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { message, setError, superValidate, withFiles } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

import { contractSchema } from '$lib/schemas';

export const load = async ({ locals: { apiClient, orgID } }) => {
	const { data, error: e } = await apiClient.getContractRows(orgID);

	if (e) {
		console.error(e);

		error(500, 'Something went wrong!');
	}

	const form = await superValidate(zod(contractSchema));

	return { contracts: data, form };
};

export const actions = {
	default: async ({ request, locals: { apiClient, orgID, currentProfile } }) => {
		const form = await superValidate(request, zod(contractSchema));

		if (!form.valid) {
			console.log({ form });

			return fail(400, { form: withFiles(form) });
		}

		type FormData = RecursiveRequired<typeof form.data>;

		const formData: FormData = form.data as FormData;

		const path = `/${crypto.randomUUID()}-${formData.attachment.name}`;

		const { error: uploadError } = await apiClient.supabase.storage
			.from('contract-attachments')
			.upload(path, formData.attachment, {
				cacheControl: '3600',
				upsert: false
			});

		if (uploadError) {
			console.error(uploadError);
			return setError(
				withFiles(form),
				'attachment',
				'Unable to upload the file. Please try again.',
				{
					status: 500
				}
			);
		}

		const { error } = await apiClient.supabase.from('contracts').insert({
			...formData,
			organization_id: orgID,
			current_approver_id: currentProfile.approver_id,
			owner_id: currentProfile.id,
			start_date: formData.start_date.toISOString(),
			end_date: formData.end_date.toISOString(),
			attachment: path
		});

		if (error) {
			console.error(error);
			return setError(withFiles(form), 'Unable to add contract. Please try again.', {
				status: 500
			});
		}

		return message(withFiles(form), 'success');
	}
};
