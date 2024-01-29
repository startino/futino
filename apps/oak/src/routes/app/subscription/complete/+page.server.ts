import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ url, locals: { stripe } }) => {
	const id = url.searchParams.get('payment_intent');

	if (!id) redirect(303, '/app/subscription');

	const paymentIntent = await stripe.paymentIntents.retrieve(id);

	let message: string = '';

	switch (paymentIntent.status) {
		case 'succeeded':
			message = 'Success! Payment received.';

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

	return { message };
};
