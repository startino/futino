import { supabaseAdmin } from '$lib/server/supabase-admin';
import type { Database, Tables } from '$lib/server/supabase.types'; // replace with the actual path to your types
import type { QueryResult, QueryData, QueryError, PostgrestError } from '@supabase/supabase-js';

export async function getVendorsInOrg(orgID: string): Promise<Tables<'vendors'>[]> {
	const { data, error }: { data: Tables<'vendors'>[]; error: PostgrestError } = await supabaseAdmin
		.from('vendors')
		.select('*')
		.eq('organization_id', orgID);

	if (error) {
		console.error('Error fetching vendor name:', error);
		return null;
	}

	return data;
}
