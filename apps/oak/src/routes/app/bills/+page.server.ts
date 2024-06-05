import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { message, setError, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { billSchema } from '$lib/schemas';
import { getBillDataTableRow } from '$lib/server/db/bills';
import { findApprover, sendEmailNotif } from '$lib/utils';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const load = async ({ locals: { organization, supabase } }) => {
	const form = await superValidate(zod(billSchema));

	const { data: bills, error: billsError } = await getBillDataTableRow({
		client: supabase,
		orgId: organization.id
	});

	if (billsError) {
		console.log({ billsError });
		return error(500, 'Something went wrong!');
	}

	return { bills, form };
};

export const actions = {
	default: async ({
		locals: { supabase, organization, currentProfile, smtpTransporter },
		request
	}) => {
		const form = await superValidate(request, zod(billSchema));

		if (!form.valid) {
			return fail(400, { form: withFiles(form) });
		}

		const formData = form.data as RecursiveRequired<typeof form.data>;

		const path = `/${crypto.randomUUID()}-${formData.attachment.name}`;

		const { error: uploadError } = await supabase.storage
			.from('invoices')
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

		const { approver } = await findApprover(currentProfile, formData.amount, supabase);

		const { data, error } = await supabase
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

		if (error) {
			return setError(form, 'Unable to add the bill. Please try again', { status: 500 });
		}

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

		return message(form, 'Bill successfully added!');
	}
};
