export const load = async ({ locals: { stripe, getSession, supabase } }) => {
	const { user } = await getSession();
	const { data } = await supabase.from('subscriptions').select().eq('profile_id', user.id).single();

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
