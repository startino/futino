import { error, fail, type RecursiveRequired } from '@sveltejs/kit';
import { superValidate, setError } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { getContractById } from '$lib/server/db';
import { PUBLIC_SMTP_USER } from '$env/static/public';
import { PUBLIC_SITE_URL } from '$env/static/public';
import type { Tables } from '$lib/server/supabase.types';
import { findSigner } from '$lib/server/db/profiles';
import { rejectionSchema, optionalContractSchema } from '$lib/schemas';
import { sendEmailNotif } from '$lib/utils';

export const load = async ({ locals: { supabase }, params }) => {
	const rejectionForm = await superValidate(zod(rejectionSchema));

	const { id } = params;
	const { data: contract, error: contractError } = await getContractById({ client: supabase, id });

	if (contractError) {
		console.warn({ contractError });
		contractError.code === 'PGRST116'
			? error(404, 'Contract Not Found!')
			: error(500, 'Something went wrong.');
	}

	const {
		data: { signedUrl }
	} = await supabase.storage
		.from('contract-attachments')
		.createSignedUrl(contract.attachment, 60 * 60 * 24);

	const optionalContractForm = await superValidate(
		{
			...contract,
			attachment: undefined
		},
		zod(optionalContractSchema)
	);

	return { contract, attachmentUrl: signedUrl, rejectionForm, optionalContractForm };
};

export const actions = {
	approve: async ({
		request,
		locals: { currentProfile, supabase, iam, smtpTransporter, organization }
	}) => {
		const form = await request.formData();
		const contractId = form.get('contract-id');
		if (!contractId) return fail(400, { error: 'A contract ID is required' });

		const { data: contract, error: contractError } = await supabase
			.from('contracts')
			.select('*, vendor:vendor_id (*)')
			.eq('id', contractId)
			.returns<Array<Tables<'contracts'> & { vendor: Tables<'vendors'> }>>()
			.single();

		if (contractError) {
			console.log({ contractError });
			return fail(500, { error: 'Something went wrong' });
		}

		if (!iam.isAllowedTo('contracts.update')) return fail(400);

		if (currentProfile.id !== contract.approver_id || currentProfile.id === contract.owner_id)
			return error(403);

		const { data: signer, error: signerError } = await findSigner({
			client: supabase,
			orgID: organization.id
		});

		if (signerError) {
			return error(500);
		}

		const { error: updateError } = await supabase
			.from('contracts')
			.update({ status: 'approved' })
			.eq('id', contractId)
			.single();

		if (updateError) {
			console.log({ updateError });
			return fail(500, { error: 'Something went wrong' });
		}

		if (signer) {
			const {
				data: { user }
			} = await supabase.auth.admin.getUserById(signer.id);

			smtpTransporter.sendMail({
				template: 'new-contract',
				from: `"Oak" <${PUBLIC_SMTP_USER}>`,
				to: user.email,
				subject: 'New contract',
				context: {
					link: `${PUBLIC_SITE_URL}/app/contracts/${contract.id}`,
					label: `#${contract.number} ${contract.vendor.name}`
				}
			});
		}

		return { success: 'Contract approved!' };
	},
	sign: async ({ request, locals: { supabase, iam, smtpTransporter, currentProfile } }) => {
		const contractId = (await request.formData()).get('contract-id');

		if (!contractId) return fail(400, { error: 'A contract ID is required' });

		if (!iam.isAllowedTo('contracts.sign')) fail(400);

		const { data: contract, error: updateError } = await supabase
			.from('contracts')
			.update({ signed: true, status: 'active', signer_id: currentProfile.id })
			.eq('id', contractId)
			.select('*, vendor:vendors (*)')
			.single();

		if (updateError) {
			console.log({ updateError });
			return fail(500, { error: 'Something went wrong' });
		}

		const {
			data: { user }
		} = await supabase.auth.admin.getUserById(contract.owner_id);

		smtpTransporter.sendMail({
			template: 'contract-signed',
			from: `"Oak" <${PUBLIC_SMTP_USER}>`,
			to: user.email,
			subject: 'Contract signed',
			context: {
				link: `${PUBLIC_SITE_URL}/app/contracts/${contract.id}`,
				label: `#${contract.number} ${contract.vendor.name}`
			}
		});

		return { success: 'Contract signed!' };
	},
	reject: async ({ request, locals: { currentProfile, supabase, smtpTransporter } }) => {
		const rejectionForm = await superValidate(request, zod(rejectionSchema));

		if (!rejectionForm.valid) {
			return fail(400, { rejectionForm });
		}

		const formData = rejectionForm.data as RecursiveRequired<typeof rejectionForm.data>;

		const { data: contract, error } = await supabase
			.from('contracts')
			.select()
			.eq('id', formData.id)
			.single();

		if (error) {
			console.log({ error });
			return setError(rejectionForm, 'Unable to reject this contract. Please try again', {
				status: 500
			});
		}

		if (contract.approver_id === currentProfile.id || currentProfile.roles.includes('signer')) {
			const { error: updateError } = await supabase
				.from('contracts')
				.update({
					status: 'rejected'
				})
				.eq('id', contract.id);

			if (updateError) {
				console.log({ updateError });

				return setError(rejectionForm, 'Unable to reject this contract. Please try again', {
					status: 500
				});
			}

			const { error: rejectionError } = await supabase
				.from('contract_rejections')
				.insert({ creator_id: currentProfile.id, note: formData.note, contract_id: formData.id });

			if (rejectionError) {
				console.log({ rejectionError });
				return setError(rejectionForm, 'Unable to reject this contract. Please try again', {
					status: 500
				});
			}

			sendEmailNotif('entry-validation', {
				client: supabase,
				smtp: smtpTransporter,
				subject: 'Contract rejected',
				receiverProfileId: contract.owner_id,
				context: {
					entryName: 'contract',
					link: { url: `${PUBLIC_SITE_URL}/app/contract/${contract.id}`, label: 'View Contract' },
					action: 'rejected'
				}
			});

			return { rejectionForm };
		}
	},
	update: async ({ request, locals: { supabase, smtpTransporter }, url }) => {
		const optionalContractForm = await superValidate(request, zod(optionalContractSchema));
		const contractId = url.searchParams.get('id');
		const approverId = url.searchParams.get('approverId');

		if (!optionalContractForm.valid || !contractId || !approverId) {
			return fail(400, { optionalContractForm });
		}

		const formData = optionalContractForm.data;

		const { error: updateError } = await supabase
			.from('contracts')
			.update({ ...formData, attachment: undefined, status: 'pending approval' })
			.eq('id', contractId);

		if (updateError) {
			console.log({ updateError });
			return setError(optionalContractForm, 'Unable to update the contract. Please try again');
		}

		sendEmailNotif('new-entry', {
			subject: 'Updated Contract',
			receiverProfileId: approverId,
			client: supabase,
			smtp: smtpTransporter,
			context: {
				link: { url: `${PUBLIC_SITE_URL}/app/contracts/${contractId}`, label: 'View Contract' },
				entryName: 'contract'
			}
		});

		return { optionalContractForm };
	}
};
