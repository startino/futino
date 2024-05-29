import { error } from '@sveltejs/kit';

import type { BillDatableRow } from '$lib/types';

export const load = async ({ locals: { organization, supabase } }) => {
	const { data: bills, error: billsError } = await supabase
		.from('bills')
		.select(
			`
        *,
        contract:contract_id (
          *,
          vendor:vendor_id (*),
          owner:owner_id (*)
        )
      `
		)
		.eq('organization_id', organization.id)
		.returns<BillDatableRow[]>();

	if (billsError) {
		console.log({ billsError });
		return error(500, 'Something went wrong!');
	}

	return { bills };
};
