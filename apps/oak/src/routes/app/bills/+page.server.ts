import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { message, setError, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { billSchema } from '$lib/schemas';
import { getBillDataTableRow } from '$lib/server/db/bills';
import { getInitialApprover } from '$lib/server/db/profiles';
import { sendEmailNotif } from '$lib/utils';
import { PUBLIC_SITE_URL } from '$env/static/public';
import type { Tables } from '$lib/server/supabase.types.js';

export const load = async ({ locals: { organization, supabase } }) => {
	const form = await superValidate(zod(billSchema));

	const { data: bills, error: billsError } = await getBillDataTableRow({
		client: supabase,
		orgId: organization.id
	});

	if (billsError) {
		console.log('Error while loading', { billsError });
		return error(500, 'Something went wrong!');
	}

	return { bills, form };
};

export const actions = {
	default: async ({
		locals: { supabase, organization, currentProfile, smtpTransporter, iam },
		request
	}) => {
		const form = await superValidate(request, zod(billSchema));

		if (!iam.isAllowedTo('bills.create')) {
			return error(401, 'Not allowed to add bill');
		}

		if (!form.valid) {
			return fail(400, { form: withFiles(form) });
		}

		const formData = form.data as RecursiveRequired<typeof form.data>;

		const path = `/${crypto.randomUUID()}-${formData.attachment.name}`;

		try {
			const { data: contract, error: contractError } = await supabase
				.from('contracts')
				.select('owner:profiles!contracts_owner_id_fkey (*)')
				.eq('id', formData.contract_id)
				.single();

			if (contractError) throw contractError;

			const { error: uploadError } = await supabase.storage
				.from('invoices')
				.upload(path, formData.attachment, {
					cacheControl: '3600',
					upsert: false
				});

			if (uploadError) throw uploadError;

			let approver: Tables<'profiles'> | null = null;

			if (formData.amount <= contract.owner.approval_threshold) {
				approver = contract.owner;
			} else {
				const { approver: initalApprover, error: approverError } = await getInitialApprover({
					profile: contract.owner,
					amount: formData.amount,
					client: supabase
				});

				if (approverError) throw approverError;
				approver = initalApprover;
			}

			const { data, error: billError } = await supabase
				.from('bills')
				.insert({
					...formData,
					organization_id: organization.id,
					creator_id: currentProfile.id,
					attachment: path,
					approver_id: approver ? approver.id : null
				})
				.select()
				.single();

			if (billError) throw billError;

			if (approver) {
				sendEmailNotif('new-entry', {
					subject: 'New Bill',
					receiverProfileId: approver.id,
					client: supabase,
					smtp: smtpTransporter,
					context: {
						link: { url: `${PUBLIC_SITE_URL}/app/bills/${data.id}`, label: 'View bill' },
						entryName: 'bill'
					}
				});
			}
		} catch (error) {
			console.error(error);

			return setError(
				withFiles(form),
				'attachment',
				'Unable to upload the file. Please try again.',
				{
					status: 500
				}
			);
		}

		return message(form, 'Bill successfully added!');
	}
};
