import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { STRIPE_SECRET_KEY, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';

import { Stripe } from 'stripe';
import type { Database } from '$lib/server/supabase.types';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { error, redirect, type Handle } from '@sveltejs/kit';
import { ApiClient } from '$lib/api-client';
import { IAM } from '$lib/iam';

export const handle: Handle = async ({ event, resolve }) => {
	const supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: SUPABASE_SERVICE_ROLE_KEY,
		event
	});

	const stripe = new Stripe(STRIPE_SECRET_KEY);

	const {
		data: { user }
	} = await supabase.auth.getUser();
	const apiClient = new ApiClient({
		stripe,
		supabase,
		user
	});

	if (!apiClient.user) {
		if (event.url.pathname.startsWith('/app')) {
			redirect(303, '/login');
		}
	} else {
		const { data } = await apiClient.supabase.from('profiles').select().eq('id', user.id).single();
		const { data: policy } = await apiClient.supabase.from('resource_policy').select().single();

		event.locals.iam = new IAM(policy.content, data);
		event.locals.orgID = data.organization_id;
		event.locals.currentProfile = data;
		event.locals.supabase = supabase;
		apiClient.stripeCustomerId = data.stripe_customer_id;

		if (!event.locals.iam.canAccess(event)) return error(403, 'Forbidden action!');

		const { data: subscription } = await apiClient.getUserSubscription();

		let forbidSubscription = false;

		if (subscription) {
			try {
				const sub = await apiClient.stripe.subscriptions.retrieve(
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

	event.locals.apiClient = apiClient;

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
