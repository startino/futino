import { STRIPE_SECRET_KEY } from '$env/static/private';

export const load = async ({ locals: { getSession, user } }) => {
	const session = await getSession();
	return { userAccessToken: session.access_token, stripeKey: STRIPE_SECRET_KEY, user };
};
