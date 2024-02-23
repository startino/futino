import { error, redirect } from '@sveltejs/kit';
import { getUserSubscription } from '$lib/api-client.js';

export const GET = async ({ locals: { stripe, getSession, supabase } }) => {
	const { user } = await getSession();
	const { data: subscription } = await getUserSubscription(supabase, user);

	try {
		await stripe.subscriptions.cancel(subscription.stripe_subscription_id);
	} catch (err) {
		throw error(503, 'There was an error cancelling the subscription');
	}

	throw redirect(303, '/app/subscription/cancel/complete');
};
