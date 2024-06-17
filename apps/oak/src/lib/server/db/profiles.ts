import type { PostgrestError } from '@supabase/supabase-js';

import type { Tables } from '$lib/server/supabase.types';
import type { Client } from '$lib/types';

export const findApprover = async ({
	profile,
	amount,
	client
}: {
	profile: Tables<'profiles'>;
	amount: number;
	client: Client;
}): Promise<{ approver: Tables<'profiles'> | null; error: PostgrestError | null }> => {
	if (profile.roles.includes('signer')) return { approver: profile, error: null };

	if (!profile.approver_id) {
		const { data: signer, error } = await findSigner({ client, orgID: profile.organization_id });
		if (error) return { approver: null, error };

		if (signer) {
			return { approver: signer, error: null };
		}
		return { approver: null, error: null };
	}

	const { data: approver, error } = await client
		.from('profiles')
		.select()
		.eq('id', profile.approver_id)
		.single();

	if (error) return { approver: null, error };

	if (amount <= approver.approval_threshold) {
		return { approver, error: null };
	}
	return await findApprover({ profile: approver, amount, client });
};

export const findSigner = async ({ client, orgID }: { client: Client; orgID: string }) => {
	const { data, error } = await client
		.from('profiles')
		.select()
		.eq('organization_id', orgID)
		.contains('roles', ['signer']);

	if (error || data?.length === 0) {
		return { data: null, error };
	}

	const randomIndex = Math.floor(Math.random() * data.length);

	return { data: data[randomIndex], error };
};
