import type { SupabaseClient, PostgrestError } from '@supabase/supabase-js';

import type { Tables, Database } from '$lib/server/supabase.types';

export const findApprover = async (
	profile: Tables<'profiles'>,
	amount: number,
	supabase: SupabaseClient<Database>
): Promise<{ approver: Tables<'profiles'> | null; error: PostgrestError | null }> => {
	if (profile.roles.includes('signer')) return { approver: profile, error: null };

	if (!profile.approver_id) {
		const { data: signer, error } = await supabase
			.from('profiles')
			.select()
			.contains('roles', ['signer']);
		if (error) return { approver: null, error };

		if (signer && signer[0]) {
			return { approver: signer[0], error: null };
		}
		return { approver: null, error: null };
	}

	const { data: approver, error } = await supabase
		.from('profiles')
		.select()
		.eq('id', profile.approver_id)
		.single();

	if (error) return { approver: null, error };

	if (amount <= approver.approval_threshold) {
		return { approver, error: null };
	}
	return await findApprover(approver, amount, supabase);
};
