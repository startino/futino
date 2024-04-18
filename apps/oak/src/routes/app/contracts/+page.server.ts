import { error } from '@sveltejs/kit';

export const load = async ({ locals: { apiClient, orgID } }) => {
	const { data, error: e } = await apiClient.getContractRows(orgID);

	if (e) {
		console.error(e);

		error(500, 'Something went wrong!');
	}

	return { contracts: data };
};
