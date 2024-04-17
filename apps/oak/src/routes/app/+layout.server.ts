import { STRIPE_SECRET_KEY } from '$env/static/private';

export const load = async ({ locals: { apiClient, currentProfile } }) => {
	return {
		userAccessToken: apiClient.session.access_token,
		stripeKey: STRIPE_SECRET_KEY,
		user: apiClient.session.user,
		storesData: {
			currentProfile
		}
	};
};
