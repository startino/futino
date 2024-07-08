import { PUBLIC_STRIPE_MONTHLY_PRICE_ID, PUBLIC_STRIPE_YEARLY_PRICE_ID } from '$env/static/public';
import { error, redirect } from '@sveltejs/kit';
import type Stripe from 'stripe';

export const load = async ({ locals: { stripe, subscription, organization }, params }) => {
	if (subscription && subscription.status === 'active') {
		throw redirect(302, '/app/subscription');
	}

	let newSubscription: Stripe.Response<Stripe.Subscription>;

	const price = await stripe.prices.retrieve(
		params.plan === 'monthly' ? PUBLIC_STRIPE_MONTHLY_PRICE_ID : PUBLIC_STRIPE_YEARLY_PRICE_ID
	);

	const dollars = ((price.unit_amount as number) / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	try {
		newSubscription = await stripe.subscriptions.create({
			customer: organization.stripe_customer_id,
			items: [
				{
					price: price.id
				}
			],
			payment_behavior: 'default_incomplete',
			payment_settings: { save_default_payment_method: 'on_subscription' },
			expand: ['latest_invoice.payment_intent']
		});
	} catch (err) {
		console.log({ err });

		throw error(500, 'something went wrong');
	}

	return {
		clientSecret: newSubscription.latest_invoice?.payment_intent.client_secret,
		newSubscriptionId: newSubscription.id,
		price: dollars,
		interval: price.recurring?.interval
	};
};
