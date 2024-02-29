import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

import { STRIPE_SECRET_KEY } from '$env/static/private';

import { Stripe } from 'stripe';
import type { Database } from '$lib/server/supabase.types.ts';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { getUserSubscription } from '$lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
	const supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	const stripe = new Stripe(STRIPE_SECRET_KEY);

	const {
		data: {
			session: { user, access_token }
		},
		error: sessionError
	} = await supabase.auth.getSession();

	if (sessionError) {
		if (event.url.pathname.startsWith('/app')) {
			redirect(303, '/login');
		}
	} else {
		event.locals.apiClient = new ApiClient({
			stripe,
			supabase,
			user,
			userAccessToken: access_token
		});

		const { data } = await event.locals.apiClient.supabase
			.from('profiles')
			.select()
			.eq('id', user.id)
			.single();

		event.locals.apiClient.stripeCustomerId = data.stripe_customer_id;

		const { data: subscription } = await event.locals.apiClient.getUserSubscription();

		let forbidSubscription = false;

		if (subscription) {
			try {
				const sub = await event.locals.apiClient.stripe.subscriptions.retrieve(
					subscription.stripe_subscription_id
				);
				if (
					sub.status === 'active' &&
					(event.url.pathname.includes('/yearly') || event.url.pathname.includes('/monthly'))
				) {
					forbidSubscription = true;
				}
			} catch (error) {
				return resolve(event, {
					filterSerializedResponseHeaders(name) {
						return name === 'content-range';
					}
				});
			}
		}

		if (forbidSubscription) {
			redirect(302, '/app/subscription');
		}
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
