import { STRIPE_SECRET_KEY } from '$env/static/private';

export const load = async ({ locals: { apiClient } }) => {
	return {
		userAccessToken: apiClient.userAccesToken,
		stripeKey: STRIPE_SECRET_KEY,
		user: apiClient.user
	};
};
