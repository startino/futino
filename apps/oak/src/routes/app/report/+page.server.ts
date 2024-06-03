import { error } from '@sveltejs/kit';

import { getReportContracts } from '$lib/server/db/report';

export const load = async ({ locals: { supabase, organization } }) => {
	const { data, error: err } = await getReportContracts({ supabase, orgId: organization.id });

	if (err) {
		console.log({ err });
		return error(500, 'Something went wrong!');
	}
	return { contracts: data };
};
