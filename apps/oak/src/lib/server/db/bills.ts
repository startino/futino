import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../supabase.types';

export const getBillDataTableRow = async ({ client, orgId }: Option) =>
	await client
		.from('bills')
		.select(
			`
        *,
        creator:profiles!bills_creator_id_fkey (*),
        contract:contracts (
          *,
          vendor:vendors (*),
          owner:profiles!contracts_owner_id_fkey (*)
        )
      `
		)
		.eq('organization_id', orgId)
		.order('created_at', { ascending: false });

type Option = {
	client: SupabaseClient<Database>;
	orgId: string;
};
type QueryResult = ReturnType<typeof getBillDataTableRow> extends Promise<infer R> ? R : never;
type QueryData = QueryResult extends { data: infer D } ? D : never;
export type BillDataTableRow = QueryData extends (infer U)[] ? U : never;
