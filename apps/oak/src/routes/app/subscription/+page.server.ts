import { error } from '@sveltejs/kit';
import { PUBLIC_STRIPE_PRICE_ID, PUBLIC_BASE_URL } from '$env/static/public';
import Stripe from 'stripe';

export const load = async ({ locals: { stripe, subscriptionId } }) => {
	let subscription: Stripe.Response<Stripe.Subscription> | null = null;

	try {
		subscription = await stripe.subscriptions.retrieve(subscriptionId, {
			expand: ['latest_invoice.payment_intent']
		});
	} catch (error) {
		throw error(500, 'something went wrong');
	}

	return {
		active: subscription.status === 'active',
		clientSecret: subscription.latest_invoice.payment_intent.client_secret,
		returnUrl: new URL('/app/subscription/complete', PUBLIC_BASE_URL).toString()
	};
};
