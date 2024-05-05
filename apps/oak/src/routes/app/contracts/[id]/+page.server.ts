import { error, fail } from '@sveltejs/kit';

import type { JoinedContract } from '$lib/types';

export const load = async ({ locals: { apiClient }, params }) => {
	const { id } = params;
	const { data: contract, error: contractError } = await apiClient.supabase
		.from('contracts')
		.select(
			`
      *,
      owner:owner_id (*), 
      vendor:vendor_id (*),
      department:department_id (*),
      project:project_id (*),
      current_approver: current_approver_id (*),
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
	} = await apiClient.supabase.storage
		.from('contract-attachments')
		.createSignedUrl(contract.attachment, 60 * 60 * 24);

	return { contract, attachmentUrl: signedUrl };
};

export const actions = {
	approve: async ({ request, locals: { currentProfile, apiClient } }) => {
		const contractId = (await request.formData()).get('contract-id');

		if (!contractId) return fail(400, { error: 'A contract ID is required' });

		const { data: contract, error: contractError } = await apiClient.supabase
			.from('contracts')
			.select()
			.eq('id', contractId)
			.single();

		if (contractError) {
			console.log({ contractError });
			return fail(500, { error: 'Something went wrong' });
		}

		if (currentProfile.role !== 'employee') fail(400);

		if (currentProfile.id !== contract.current_approver_id)
			return fail(400, { error: 'Your are not the current approver' });

		const { error: updateError } = await apiClient.supabase
			.from('contracts')
			.update({ current_approver_id: currentProfile.approver_id })
			.eq('id', contractId);

		if (updateError) {
			console.log({ updateError });
			return fail(500, { error: 'Something went wrong' });
		}

		return { success: 'Contract approved!' };
	},

	sign: async ({ request, locals: { currentProfile, apiClient } }) => {
		const contractId = (await request.formData()).get('contract-id');

		if (!contractId) return fail(400, { error: 'A contract ID is required' });

		const { data: contract, error: contractError } = await apiClient.supabase
			.from('contracts')
			.select()
			.eq('id', contractId)
			.single();

		if (contractError) {
			console.log({ contractError });
			return fail(500, { error: 'Something went wrong' });
		}

		if (currentProfile.role !== 'signer') fail(400);

		const { error: updateError } = await apiClient.supabase
			.from('contracts')
			.update({ current_approver_id: currentProfile.id, signed: true, status: 'active' })
			.eq('id', contractId);

		if (updateError) {
			console.log({ updateError });
			return fail(500, { error: 'Something went wrong' });
		}

		return { success: 'Contract signed!' };
	}
};
