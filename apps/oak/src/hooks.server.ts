import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

import { STRIPE_SECRET_KEY } from '$env/static/private';

import { Stripe } from 'stripe';
import type { Database } from '$lib/server/supabase.types.ts';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { PostgrestError } from '@supabase/supabase-js';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	event.locals.stripe = new Stripe(STRIPE_SECRET_KEY);

	event.locals.getSession = async () => {
		const {
			data: { session },
			error
		} = await event.locals.supabase.auth.getSession();
		return error ? null : session;
	};

	const session = await event.locals.getSession();

	if (!session) {
		if (event.url.pathname.startsWith('/app')) {
			throw redirect(303, '/login');
		}
	} else {
		const { user } = session;

		const { data } = await event.locals.supabase
			.from('profiles')
			.select()
			.eq('id', user.id)
			.single();

		event.locals.stripeCustomerId = data.stripe_customer_id;
		event.locals.subscriptionId = data.subscription_id;
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
