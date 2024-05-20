export const load = async ({ locals: { apiClient } }) => {
	return { email: apiClient.user.email };
};
