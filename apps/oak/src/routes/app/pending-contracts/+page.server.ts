import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import type { NestedContract } from '$lib/types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase
		.from('contracts')
		.select('*, vendor(full_name), creator(full_name)')
		.eq('organization_id', 'f47ac10b-58cc-4372-a567-0e02b2c3d479')
		.eq('status', 'Pending')
		.returns<NestedContract[]>();

	if (error) {
		console.error(error);
		throw fail(400, error);
	}

	return {
		session: null,
		contracts: data
	};
};
