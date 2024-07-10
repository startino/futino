import { redirect } from '@sveltejs/kit';
import type Stripe from 'stripe';

export const load = async ({ url, locals: { stripe, supabase, currentProfile }, parent }) => {
	const id = url.searchParams.get('payment_intent');
	const subscriptionId = url.searchParams.get('subscription_id');

	if (!id || !subscriptionId) redirect(303, '/app/subscription');

	const paymentIntent = await stripe.paymentIntents.retrieve(id);

	let message: string = '';

	let newSub: Stripe.Subscription | null = null;

	switch (paymentIntent.status) {
		case 'succeeded':
			message = 'Your subscription is successfully completed!';

			newSub = await stripe.subscriptions.retrieve(subscriptionId);
			// TODO: provision account here

			break;

		case 'processing':
			message = "Payment processing. We'll update you when payment is received.";
			break;

		case 'requires_payment_method':
			// Redirect user back to payment page to re-attempt payment
			throw redirect(303, '/app/subscription');

		default:
			message = 'Something went wrong.';
			break;
	}

	return { message, newSub };
};
