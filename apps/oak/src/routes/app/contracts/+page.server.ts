import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { message, setError, superValidate, withFiles } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

import { contractSchema } from '$lib/schemas';
import type { ContractDatableRow } from '$lib/types';
import { SMTP_USER } from '$env/static/private';
import { PUBLIC_SITE_URL } from '$env/static/public';
import type { Tables } from '$lib/server/supabase.types.js';

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
	default: async ({ request, locals: { supabase, currentProfile, smtpTransporter, iam } }) => {
		if (!iam.isAllowedTo('contracts.sign') && !currentProfile.approver_id) {
			return error(403);
		}
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

		const { data: newContract, error: contractError } = await supabase
			.from('contracts')
			.insert({
				...formData,
				organization_id: currentProfile.organization_id,
				current_approver_id: currentProfile.approver_id,
				owner_id: currentProfile.id,
				start_date: formData.start_date.toISOString(),
				end_date: formData.end_date.toISOString(),
				attachment: path
			})
			.select('*, vendor:vendor_id (*)')
			.returns<Array<Tables<'contracts'> & { vendor: Tables<'vendors'> }>>()
			.single();

		if (contractError) {
			console.error(error);
			return setError(withFiles(form), 'Unable to add contract. Please try again.', {
				status: 500
			});
		}

		if (!iam.isAllowedTo('contracts.sign')) {
			const {
				data: { user }
			} = await supabase.auth.admin.getUserById(currentProfile.approver_id);

			await smtpTransporter.sendMail({
				template: 'new-contract',
				from: `"Oak" <${SMTP_USER}>`,
				to: user.email,
				subject: 'New contract',
				context: {
					link: `${PUBLIC_SITE_URL}/app/contracts/${newContract.id}`,
					label: `#${newContract.number} ${newContract.vendor.name}`
				}
			});
		}

		return message(withFiles(form), 'success');
	}
};
