import type { Client } from '$lib/types';

export const getBillById = async ({ client, id }: { client: Client; id: string }) =>
	await client
		.from('bills')
		.select(
			`
        *,
        account:accounts (*),
        project:projects (*),
        spend_category:spend_categories (*),
        department:departments (*),
        rejections:bill_rejections (*, creator:profiles (*)),
        approver:profiles!bills_approver_id_fkey (*),
        creator:profiles!bills_creator_id_fkey (*),
        contract:contracts (
          *,
          vendor:vendors (*),
          owner:profiles!contracts_owner_id_fkey (*)
        )
    `
		)
		.eq('id', id)
		.order('created_at', { ascending: false })
		.single();

export const getBillDataTableRow = async ({ client, orgId }: { client: Client; orgId: string }) =>
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

type QueryResult = ReturnType<typeof getBillDataTableRow> extends Promise<infer R> ? R : never;
type QueryData = QueryResult extends { data: infer D } ? D : never;
export type BillDataTableRow = QueryData extends (infer U)[] ? U : never;
