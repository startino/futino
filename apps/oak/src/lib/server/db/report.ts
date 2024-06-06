import type { SupabaseClient } from '@supabase/supabase-js';

import type { Database } from '../supabase.types';

export const getReportContracts = async ({ supabase, orgId }: Option) =>
	await supabase
		.from('contracts')
		.select(
			`
    *,
    parent:contracts (number),
    bills (*),
    vendor:vendors (name),
    department:departments (number, name),
    account:accounts (number),
    project:projects (name),
    category:spend_categories (name)
  `
		)
		.eq('organization_id', orgId)
		.eq('status', 'active');

export interface ReportDataTableRow extends ReportContractsItem {
	billedAmount: number;
	accrualBalance: number;
	openAmount: number;
}

type Option = {
	supabase: SupabaseClient<Database>;
	orgId: string;
};
type QueryResult = ReturnType<typeof getReportContracts> extends Promise<infer R> ? R : never;
export type ReportContracts = QueryResult extends { data: infer D } ? D : never;
type ReportContractsItem = ReportContracts extends (infer U)[] ? U : never;
