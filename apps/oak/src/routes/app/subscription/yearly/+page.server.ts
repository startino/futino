import { error } from '@sveltejs/kit';
import { PUBLIC_STRIPE_YEARLY_PRICE_ID } from '$env/static/public';
import Stripe from 'stripe';

export const load = async ({ locals: { stripe, stripeCustomerId, supabase, getSession } }) => {
	let subscription: Stripe.Response<Stripe.Subscription> | null = null;
	const { user } = await getSession();

	try {
		subscription = await stripe.subscriptions.create({
			customer: stripeCustomerId,
			items: [
				{
					price: PUBLIC_STRIPE_YEARLY_PRICE_ID
				}
			],
			payment_behavior: 'default_incomplete',
			payment_settings: { save_default_payment_method: 'on_subscription' },
			expand: ['latest_invoice.payment_intent']
		});

		const { error } = await supabase
			.from('subscriptions')
			.upsert({ profile_id: user.id, is_monthly: false, stripe_subscription_id: subscription.id });

		console.log({ error });
	} catch (err) {
		throw error(500, 'something went wrong');
	}

	return {
		clientSecret: subscription.latest_invoice.payment_intent.client_secret
	};
};
