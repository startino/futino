export const load = async ({ locals: { stripe, apiClient } }) => {
	const { data } = await apiClient.getUserSubscription();

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
