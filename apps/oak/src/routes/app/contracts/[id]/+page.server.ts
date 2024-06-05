import { error, fail } from '@sveltejs/kit';

import type { JoinedContract } from '$lib/types';
import { SMTP_USER } from '$env/static/private';
import { PUBLIC_SITE_URL } from '$env/static/public';
import type { Tables } from '$lib/server/supabase.types.js';
import { findApprover } from '$lib/server/db/profiles';

export const load = async ({ locals: { supabase }, params }) => {
	const { id } = params;
	const { data: contract, error: contractError } = await supabase
		.from('contracts')
		.select(
			`
      *,
      owner:owner_id (*), 
      vendor:vendor_id (*),
      department:department_id (*),
      project:project_id (*),
      approver:approver_id (*),
			signer:signer_id (*),
      parent_contract:parent_contract_id (*),
      spend_category:spend_category_id (*),
      account:account_id (*)
    `
		)
		.eq('id', id)
		.returns<JoinedContract[]>()
		.single();

	if (contractError) {
		contractError.code === 'PGRST116'
			? error(404, 'Contract Not Found!')
			: error(500, 'Something went wrong.');
	}

	const {
		data: { signedUrl }
	} = await supabase.storage
		.from('contract-attachments')
		.createSignedUrl(contract.attachment, 60 * 60 * 24);

	return { contract, attachmentUrl: signedUrl };
};

export const actions = {
	approve: async ({ request, locals: { currentProfile, supabase, iam, smtpTransporter } }) => {
		const form = await request.formData();
		const contractId = form.get('contract-id');
		const amount = form.get('amount');
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

		const { approver, error: approverError } = await findApprover(
			currentProfile,
			Number(amount),
			supabase
		);

		if (approverError) {
			return error(500);
		}

		const { error: updateError } = await supabase
			.from('contracts')
			.update({ approver_id: approver.id, status: 'pending signing' })
			.eq('id', contractId)
			.single();

		if (updateError) {
			console.log({ updateError });
			return fail(500, { error: 'Something went wrong' });
		}

		const {
			data: { user }
		} = await supabase.auth.admin.getUserById(approver.id);

		smtpTransporter.sendMail({
			template: 'new-contract',
			from: `"Oak" <${SMTP_USER}>`,
			to: user.email,
			subject: 'New contract',
			context: {
				link: `${PUBLIC_SITE_URL}/app/contracts/${contract.id}`,
				label: `#${contract.number} ${contract.vendor.name}`
			}
		});

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
			.select('*, vendor:vendor_id (*)')
			.returns<Array<Tables<'contracts'> & { vendor: Tables<'vendors'> }>>()
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
			from: `"Oak" <${SMTP_USER}>`,
			to: user.email,
			subject: 'Contract signed',
			context: {
				link: `${PUBLIC_SITE_URL}/app/contracts/${contract.id}`,
				label: `#${contract.number} ${contract.vendor.name}`
			}
		});

		return { success: 'Contract signed!' };
	}
};
