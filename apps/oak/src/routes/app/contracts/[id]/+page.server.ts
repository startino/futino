import { error } from '@sveltejs/kit';

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

	return { contract };
};
