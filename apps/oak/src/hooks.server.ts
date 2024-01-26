import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

import { SECRETE_STRIPE_KEY } from '$env/static/private';

import { Stripe } from 'stripe';
import type { Database } from '$lib/server/supabase.types.ts';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { PostgrestError, User } from '@supabase/supabase-js';
import type { Handle, RequestEvent } from '@sveltejs/kit';

async function createStripeCustomer(event: RequestEvent, email: string, fullName: string) {
	const customer = await event.locals.stripe.customers.create({
		email: email,
		name: fullName
	});
	event.cookies.set('stripeCustomerId', customer.id, { path: '/' });

	return customer;
}

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	event.locals.stripe = new Stripe(SECRETE_STRIPE_KEY);

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	const { user } = await event.locals.getSession();
	const { data } = await event.locals.supabase.from('profiles').select().eq('id', user.id).single();

	let customer: Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer> | null = null;

	try {
		customer = await event.locals.stripe.customers.retrieve(event.cookies.get('stripeCustomerId'));
		if (customer.deleted) {
			customer = await createStripeCustomer(event, user.email, data.fullName);
		}
	} catch (error) {
		if (error.statusCode === 404) {
			customer = await createStripeCustomer(event, user.email, data.fullName);
		}
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};

export function handleError({ event, error }: { event: any; error: PostgrestError }) {
	console.error('Handle Error caught an error: ' + error.message);
}
