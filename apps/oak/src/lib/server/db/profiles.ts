import type { PostgrestError } from '@supabase/supabase-js';

import type { Tables } from '$lib/server/supabase.types';
import type { Client } from '$lib/types';

export const getApprover = async ({
	profile,
	client
}: {
	profile: Tables<'profiles'>;
	client: Client;
}): Promise<{ approver: Tables<'profiles'> | null; error: PostgrestError | null }> => {
	if (!profile.approver_id) {
		return { approver: null, error: null };
	}

	const { data: approver, error } = await client
		.from('profiles')
		.select()
		.eq('id', profile.approver_id)
		.single();

	if (error) return { approver: null, error };

	return { approver, error: null };
};

export const findApproverByThreshold = async ({
	profile,
	amount,
	client
}: {
	profile: Tables<'profiles'>;
	amount: number;
	client: Client;
}): Promise<{ approver: Tables<'profiles'> | null; error: PostgrestError | null }> => {
	const { approver, error } = await getApprover({ profile, client });

	if (!approver) return { approver: null, error: null };

	if (error) return { approver: null, error };

	if (amount <= approver.approval_threshold) {
		return { approver, error: null };
	}
	return await findApproverByThreshold({ profile: approver, amount, client });
};

export const getInitialApprover = async ({
	profile,
	amount,
	client
}: {
	profile: Tables<'profiles'>;
	amount: number;
	client: Client;
}): Promise<{ approver: Tables<'profiles'> | null; error: PostgrestError | null }> => {
	let { approver: approverWithThreshold } = await findApproverByThreshold({
		profile,
		amount,
		client
	});

	if (approverWithThreshold) {
		return { approver: approverWithThreshold, error: null };
	}

	return await getApprover({ profile, client });
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
