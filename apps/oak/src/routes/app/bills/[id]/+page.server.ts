import { error } from '@sveltejs/kit';

import { getBillById } from '$lib/server/db/bills';

export const load = async ({ locals: { supabase }, params }) => {
	const { data: bill, error: billError } = await getBillById({ client: supabase, id: params.id });

	if (billError) {
		billError.code === 'PGRST116'
			? error(404, 'Contract Not Found!')
			: error(500, 'Something went wrong.');
	}

	return { bill };
};
