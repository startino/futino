import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { stripe, subscription } }) => {
	if (!subscription) {
		throw redirect(303, '/app');
	}

	try {
		await stripe.subscriptions.cancel(subscription.id);
	} catch (err) {
		throw redirect(303, '/app');
	}

	return {
		title: 'Cancellation completed',
		message: 'Your subscription has been canceled'
	};
};
