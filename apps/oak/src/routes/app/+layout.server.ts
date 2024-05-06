import { STRIPE_SECRET_KEY } from '$env/static/private';
import type { JoinedProfile } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load = async ({ locals: { apiClient, currentProfile, orgID } }) => {
	const { data: departments, error: departmentsError } = await apiClient.getOrgDeparments(orgID);
	const { data: projects, error: projectsError } = await apiClient.getOrgProjects(orgID);
	const { data: vendors, error: vendorsError } = await apiClient.getOrgVendors(orgID);
	const { data: organization, error: orgError } = await apiClient.getOrg(orgID);
	const { data: accounts, error: accError } = await apiClient.supabase.from('accounts').select();
	const { data: spendCategories, error: categoriesError } = await apiClient.supabase
		.from('spend_categories')
		.select()
		.eq('organization_id', orgID);
	const { data: profiles, error: profilesError } = await apiClient.supabase
		.from('profiles')
		.select('*, approver:approver_id (*)')
		.eq('organization_id', orgID)
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
		user: apiClient.user,
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
