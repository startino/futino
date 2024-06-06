import { error, fail } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { today } from '@internationalized/date';

import { getBillById } from '$lib/server/db';
import { billApprovalSchema } from '$lib/schemas';
import { sendEmailNotif } from '$lib/utils.js';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const load = async ({ locals: { supabase }, params }) => {
	const { data: bill, error: billError } = await getBillById({ client: supabase, id: params.id });

	if (billError) {
		billError.code === 'PGRST116'
			? error(404, 'Bill Not Found!')
			: error(500, 'Something went wrong.');
	}

	const {
		data: { signedUrl }
	} = await supabase.storage.from('invoices').createSignedUrl(bill.attachment, 60 * 60 * 24);

	const form = await superValidate(zod(billApprovalSchema));

	return { bill, attachmentUrl: signedUrl, form };
};

export const actions = {
	approve: async ({ request, locals: { currentProfile, supabase, smtpTransporter } }) => {
		const form = await superValidate(request, zod(billApprovalSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const formData = form.data;
		console.log({ formData });

		const { data: bill, error } = await supabase
			.from('bills')
			.select()
			.eq('id', formData.bill_id)
			.single();

		if (error) {
			console.log({ error });

			return setError(form, 'Unable to approve this bill. Please try again', {
				status: 500
			});
		}

		if (bill.approver_id === currentProfile.id || currentProfile.roles.includes('signer')) {
			const { error: updateError } = await supabase
				.from('bills')
				.update({
					approver_id: currentProfile.id,
					posting_period: today(formData.time_zone).toString(),
					status: 'approved'
				})
				.eq('id', bill.id);

			if (updateError) {
				console.log({ updateError });

				return setError(form, 'Unable to approve this bill. Please try again', {
					status: 500
				});
			}

			sendEmailNotif('validated-entry', {
				client: supabase,
				smtp: smtpTransporter,
				subject: 'Bill approved',
				receiverProfileId: bill.creator_id,
				context: {
					entryName: 'bill',
					link: { url: `${PUBLIC_SITE_URL}/app/bills/${bill.id}`, label: 'View Bill' },
					action: 'approved'
				}
			});

			return { form };
		}
	}
};
