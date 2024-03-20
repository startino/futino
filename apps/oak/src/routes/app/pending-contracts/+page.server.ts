import { fail } from '@sveltejs/kit';
import type { NestedContract } from '$lib/types';

export const load = async ({ locals: { apiClient } }) => {
	const { data: profile } = await apiClient.getUserProfile();

	const { data, error } = await apiClient.supabase
		.from('contracts')
		.select('*, vendors(name), creator(full_name)')
		.eq('organization_id', profile.organization_id)
		.eq('status', 'Pending')
		.returns<NestedContract[]>();

	if (error) {
		console.error(error);
		throw fail(400, error);
	}

	return {
		contracts: data
	};
};
