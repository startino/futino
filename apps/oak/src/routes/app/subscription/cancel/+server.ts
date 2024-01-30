import { error, redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { stripe, getSession, supabase } }) => {
	const { user } = await getSession();
	const { data: subscription } = await supabase
		.from('subscriptions')
		.select()
		.eq('profile_id', user.id)
		.single();

	try {
		await stripe.subscriptions.cancel(subscription.stripe_subscription_id);
	} catch (err) {
		throw error(503, 'There was an error cancelling the subscription');
	}

	throw redirect(303, '/app/subscription/cancel/complete');
};
