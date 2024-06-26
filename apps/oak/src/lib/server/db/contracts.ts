import type { Client } from '$lib/types';

export const getContractById = async ({ client, id }: { client: Client; id: string }) =>
	await client
		.from('contracts')
		.select(
			`
      *,
      owner:profiles!contracts_owner_id_fkey (*), 
      vendor:vendors (*),
      department:departments (*),
      project:projects (*),
      approver:profiles!contracts_approver_id_fkey (*),
      signer:profiles!contracts_signer_id_fkey (*),
      parent_contract:contracts (*),
      spend_category:spend_categories (*),
      account:accounts (*),
      rejections:contract_rejections (*, creator:profiles (*)),
      review_change:reviewed_contract_changes (*, requester:profiles (*))
      `
		)
		.eq('id', id)
		.single();
