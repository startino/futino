import { STRIPE_SECRET_KEY } from '$env/static/private';
import type { JoinedProfile } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load = async ({
	locals: { supabase, currentProfile, user, iam, organization, subscription, paymentMethod }
}) => {
	const { data, error: orgError } = await supabase
		.from('organizations')
		.select(
			`
			*,
			departments:departments (*),
			projects:projects (*),
			vendors:vendors (*),
			accounts:accounts (*),
			spend_categories:spend_categories (*)
		`
		)
		.eq('id', currentProfile.organization_id)
		.order('created_at', { ascending: false })
		.single();

	const { data: profiles, error: profileError } = await supabase
		.from('profiles')
		.select('*, approver:approver_id (*), department:department_id (*)')
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false })
		.returns<JoinedProfile[]>();

	if (orgError || profileError) {
		error(500, { message: 'Something went wrong' });
	}

	return {
		stripeKey: STRIPE_SECRET_KEY,
		user: user,
		resourcePolicy: iam.policy,
		stripeData: {
			subscription,
			paymentMethod
		},
		storesData: {
			currentProfile,
			departments: data.departments,
			projects: data.projects,
			vendors: data.vendors,
			organization,
			accounts: data.accounts,
			spendCategories: data.spend_categories,
			profiles
		}
	};
};
