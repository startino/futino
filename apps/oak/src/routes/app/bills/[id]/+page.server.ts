import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { setError, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { today } from '@internationalized/date';

import { getBillById } from '$lib/server/db';
import { billApprovalSchema, rejectionSchema, optionalBillSchema } from '$lib/schemas';
import { sendEmailNotif } from '$lib/utils';
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

	const approvalForm = await superValidate(zod(billApprovalSchema));
	const rejectionForm = await superValidate(zod(rejectionSchema));
	const optionalBillForm = await superValidate(
		{ ...bill, attachment: undefined },
		zod(optionalBillSchema)
	);

	return { bill, attachmentUrl: signedUrl, approvalForm, rejectionForm, optionalBillForm };
};

export const actions = {
	approve: async ({ request, locals: { currentProfile, supabase, smtpTransporter } }) => {
		const approvalForm = await superValidate(request, zod(billApprovalSchema));

		if (!approvalForm.valid) {
			return fail(400, { approvalForm });
		}

		const formData = approvalForm.data;

		const { data: bill, error } = await supabase
			.from('bills')
			.select()
			.eq('id', formData.bill_id)
			.single();

		if (error) {
			console.log({ error });

			return setError(approvalForm, 'Unable to approve this bill. Please try again', {
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

				return setError(approvalForm, 'Unable to approve this bill. Please try again', {
					status: 500
				});
			}

			sendEmailNotif('entry-validation', {
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

			return { approvalForm };
		}
	},
	reject: async ({ request, locals: { currentProfile, supabase, smtpTransporter } }) => {
		const rejectionForm = await superValidate(request, zod(rejectionSchema));

		if (!rejectionForm.valid) {
			return fail(400, { rejectionForm });
		}

		const formData = rejectionForm.data as RecursiveRequired<typeof rejectionForm.data>;

		const { data: bill, error } = await supabase
			.from('bills')
			.select()
			.eq('id', formData.id)
			.single();

		if (error) {
			console.log({ error });
			return setError(rejectionForm, 'Unable to reject this bill. Please try again', {
				status: 500
			});
		}

		if (bill.approver_id === currentProfile.id || currentProfile.roles.includes('signer')) {
			const { error: updateError } = await supabase
				.from('bills')
				.update({
					status: 'rejected',
					approver_id: currentProfile.id
				})
				.eq('id', bill.id);

			if (updateError) {
				console.log({ updateError });

				return setError(rejectionForm, 'Unable to reject this bill. Please try again', {
					status: 500
				});
			}

			const { error: rejectionError } = await supabase
				.from('bill_rejections')
				.insert({ creator_id: currentProfile.id, ...formData, bill_id: formData.id });

			if (rejectionError) {
				console.log({ rejectionError });
				return setError(rejectionForm, 'Unable to reject this bill. Please try again', {
					status: 500
				});
			}

			sendEmailNotif('entry-validation', {
				client: supabase,
				smtp: smtpTransporter,
				subject: 'Bill rejected',
				receiverProfileId: bill.creator_id,
				context: {
					entryName: 'bill',
					link: { url: `${PUBLIC_SITE_URL}/app/bills/${bill.id}`, label: 'View Bill' },
					action: 'rejected'
				}
			});

			return { rejectionForm };
		}
	},
	update: async ({ request, locals: { currentProfile, supabase, smtpTransporter }, url }) => {
		const billForm = await superValidate(request, zod(optionalBillSchema));
		const billId = url.searchParams.get('id');

		if (!billForm.valid || !billId) {
			return fail(400, { billForm: withFiles(billForm) });
		}

		const { data: bill, error: billError } = await supabase
			.from('bills')
			.select('*')
			.eq('id', billId)
			.single();

		if (billError) {
			console.log({ billError });
			return setError(billForm, 'Unable to update this bill. Please try again', {
				status: 500
			});
		}

		if (
			bill.creator_id !== currentProfile.id ||
			['pending approval', 'approved'].includes(bill.status)
		) {
			return fail(400, { billForm: withFiles(billForm) });
		}

		const formData = billForm.data;

		let newPath = '';

		if (formData.attachment) {
			newPath = `/${crypto.randomUUID()}-${formData.attachment.name}`;

			const { error: uploadError } = await supabase.storage
				.from('invoices')
				.upload(newPath, formData.attachment, {
					cacheControl: '3600',
					upsert: false
				});

			if (uploadError) {
				console.error(uploadError);
				return setError(
					withFiles(billForm),
					'attachment',
					'Unable to upload the file. Please try again.',
					{
						status: 500
					}
				);
			}
		}

		const { error: updateError } = await supabase
			.from('bills')
			.update({
				...formData,
				attachment: formData.attachment ? newPath : undefined,
				status: 'pending approval'
			})
			.eq('id', billId);

		if (updateError) {
			console.log({ updateError });
			return setError(billForm, 'Unable to update this bill. Please try again', {
				status: 500
			});
		}

		sendEmailNotif('new-entry', {
			subject: 'New Bill',
			receiverProfileId: bill.approver_id,
			client: supabase,
			smtp: smtpTransporter,
			context: {
				link: { url: `${PUBLIC_SITE_URL}/app/bills/${bill.id}`, label: 'View bill' },
				entryName: 'bill'
			}
		});

		return { billForm: withFiles(billForm) };
	}
};
