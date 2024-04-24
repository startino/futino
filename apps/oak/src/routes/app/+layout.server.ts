import { STRIPE_SECRET_KEY } from '$env/static/private';
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

	if (
		departmentsError ||
		projectsError ||
		vendorsError ||
		orgError ||
		accError ||
		categoriesError
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
			spendCategories
		}
	};
};
