import { getUserSubscription } from '$lib/api-client.js';

export const load = async ({ locals: { stripe, getSession, supabase } }) => {
	const { user } = await getSession();
	const { data } = await getUserSubscription({ supabase, user });

	if (data) {
		try {
			const sub = await stripe.subscriptions.retrieve(data.stripe_subscription_id);

			if (sub.status === 'active') {
				return { subscription: { ...data, ...sub } };
			}
		} catch (err) {
			return {
				subscription: null
			};
		}
	}
	return {
		subscription: null
	};
};
