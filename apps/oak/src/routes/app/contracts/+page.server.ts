import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { message, setError, superValidate, withFiles } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

import { contractSchema } from '$lib/schemas';
import type { ContractDatableRow } from '$lib/types';
import { PUBLIC_SITE_URL } from '$env/static/public';
import { findApprover } from '$lib/server/db/profiles';
import { sendEmailNotif } from '$lib/utils';

export const load = async ({ locals: { currentProfile, supabase } }) => {
	const { data, error: e } = await supabase
		.from('contracts')
		.select('*, owner:owner_id (*), vendor:vendor_id(*)')
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false })
		.returns<ContractDatableRow[]>();

	if (e) {
		console.warn(e);
		error(500, 'Something went wrong!');
	}

	const form = await superValidate(zod(contractSchema));

	return { contracts: data, form };
};

export const actions = {
	default: async ({ request, locals: { supabase, currentProfile, smtpTransporter, iam } }) => {
		if (!iam.isAllowedTo('contracts.create') || !currentProfile.approver_id) {
			return error(403);
		}
		const form = await superValidate(request, zod(contractSchema));

		if (!form.valid) {
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
			console.warn({ uploadError });
			return setError(
				withFiles(form),
				'attachment',
				'Unable to upload the file. Please try again.',
				{
					status: 500
				}
			);
		}

		const { approver, error: approverError } = await findApprover({
			profile: currentProfile,
			amount: formData.amount,
			client: supabase
		});

		if (approverError) {
			console.warn('approver error', { approverError });
			return setError(withFiles(form), 'Unable to add contract. Please try again.', {
				status: 500
			});
		}

		const { data: newContract, error: contractError } = await supabase
			.from('contracts')
			.insert({
				...formData,
				organization_id: currentProfile.organization_id,
				approver_id: approver ? approver.id : null,
				owner_id: currentProfile.id,
				attachment: path
			})
			.select('*, vendor:vendors (*)')
			.single();

		if (contractError) {
			console.warn({ contractError });
			return setError(withFiles(form), 'Unable to add contract. Please try again.', {
				status: 500
			});
		}

		// If the user is a signer no need to notify anyone
		sendEmailNotif('new-entry', {
			receiverProfileId: approver.id,
			subject: 'New contract',
			smtp: smtpTransporter,
			client: supabase,
			context: {
				entryName: 'contract',
				link: {
					url: `${PUBLIC_SITE_URL}/app/contracts/${newContract.id}`,
					label: `#${newContract.number} ${newContract.vendor.name}`
				}
			}
		});

		return message(withFiles(form), 'success');
	}
};
