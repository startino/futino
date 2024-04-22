import { STRIPE_SECRET_KEY } from '$env/static/private';

export const load = async ({ locals: { apiClient, currentProfile } }) => {
	return {
		userAccessToken: (await apiClient.supabase.auth.getSession()).data.session.access_token,
		stripeKey: STRIPE_SECRET_KEY,
		user: apiClient.user,
		storesData: {
			currentProfile
		}
	};
};
