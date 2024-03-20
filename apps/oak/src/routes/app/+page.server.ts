export const load = async ({ locals: { apiClient } }) => {
	return {
		session: apiClient.session
	};
};
