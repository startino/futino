import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { message, setError, superValidate, withFiles } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

import { contractSchema } from '$lib/schemas';
import type { ContractDatableRow } from '$lib/types';

export const load = async ({ locals: { currentProfile, supabase } }) => {
	const { data, error: e } = await supabase
		.from('contracts')
		.select('*, owner:owner_id (*), vendor:vendor_id(*)')
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false })
		.returns<ContractDatableRow[]>();

	if (e) {
		console.error(e);

		error(500, 'Something went wrong!');
	}

	const form = await superValidate(zod(contractSchema));

	return { contracts: data, form };
};

export const actions = {
	default: async ({ request, locals: { supabase, currentProfile } }) => {
		const form = await superValidate(request, zod(contractSchema));

		if (!form.valid) {
			console.log({ form });

			return fail(400, { form: withFiles(form) });
		}

		type FormData = RecursiveRequired<typeof form.data>;

		const formData: FormData = form.data as FormData;

		const path = `/${crypto.randomUUID()}-${formData.attachment.name}`;

		const { error: uploadError } = await supabase.storage
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

		const { error } = await supabase.from('contracts').insert({
			...formData,
			organization_id: currentProfile.organization_id,
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
