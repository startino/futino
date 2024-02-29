import { error, redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { stripe, apiClient } }) => {
	const { data: subscription } = await apiClient.getUserSubscription();

	try {
		await stripe.subscriptions.cancel(subscription.stripe_subscription_id);
	} catch (err) {
		throw error(503, 'There was an error cancelling the subscription');
	}

	throw redirect(303, '/app/subscription/cancel/complete');
};
