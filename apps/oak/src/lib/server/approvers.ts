import { error } from '@sveltejs/kit';
import { supabaseAdmin } from './supabase-admin';
import type { Tables } from './supabase.types';

// Get all the approvers for a given user
export async function getApprovers(approvee_id: string): Promise<Tables<'approvers'>[]> {
	const { data, error: approverError } = await supabaseAdmin
		.from('approvers')
		.select('*')
		.eq('approvee_id', approvee_id);

	if (approverError) {
		throw error(500, 'Error fetching approvers, please try again later.');
	}

	return data;
}
