import { PUBLIC_STRIPE_PRICE_ID, PUBLIC_BASE_URL } from '$env/static/public';

export const load = async ({ locals: { stripe, stripeCustomerId } }) => {
	const priceId = PUBLIC_STRIPE_PRICE_ID;
	const subscription = await stripe.subscriptions.create({
		customer: stripeCustomerId,
		items: [
			{
				price: priceId
			}
		],
		payment_behavior: 'default_incomplete',
		payment_settings: { save_default_payment_method: 'on_subscription' },
		expand: ['latest_invoice.payment_intent']
	});

	return {
		clientSecret: subscription.latest_invoice.payment_intent.client_secret,
		returnUrl: new URL('/app/subscription/complete', PUBLIC_BASE_URL).toString()
	};
};
