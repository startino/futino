import { error } from '@sveltejs/kit';
import TreeModel from 'tree-model';

import { STRIPE_SECRET_KEY } from '$env/static/private';
import type { JoinedProfile } from '$lib/types';

export const load = async ({ locals: { supabase, currentProfile, user, iam } }) => {
	const { data: departments, error: departmentsError } = await supabase
		.from('departments')
		.select('*')
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false });
	const { data: projects, error: projectsError } = await supabase
		.from('projects')
		.select('*')
		.eq('organization_id', currentProfile.organization_id);
	const { data: vendors, error: vendorsError } = await supabase
		.from('vendors')
		.select('*')
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false });
	const { data: organization, error: orgError } = await supabase
		.from('organizations')
		.select()
		.eq('id', currentProfile.organization_id)
		.single();
	const { data: accounts, error: accError } = await supabase
		.from('accounts')
		.select()
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false });
	const { data: spendCategories, error: categoriesError } = await supabase
		.from('spend_categories')
		.select()
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false });
	const { data: profiles, error: profilesError } = await supabase
		.from('profiles')
		.select('*, approver:approver_id (*), department:department_id (*)')
		.eq('organization_id', currentProfile.organization_id)
		.order('created_at', { ascending: false })
		.returns<JoinedProfile[]>();

	if (
		departmentsError ||
		projectsError ||
		vendorsError ||
		orgError ||
		accError ||
		categoriesError ||
		profilesError
	) {
		error(500, { message: 'Something went wrong' });
	}

	return {
		stripeKey: STRIPE_SECRET_KEY,
		user: user,
		resourcePolicy: iam.policy,
		storesData: {
			currentProfile,
			departments,
			projects,
			vendors,
			organization,
			accounts,
			spendCategories,
			profiles
		}
	};
};
