import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { STRIPE_SECRET_KEY, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';

import { Stripe } from 'stripe';
import type { Database } from '$lib/server/supabase.types';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { error, redirect, type Handle } from '@sveltejs/kit';
import { IAM } from '$lib/iam';
import type { JoinedProfile } from '$lib/types';

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

	if (!user) {
		if (event.url.pathname.startsWith('/app')) {
			redirect(303, '/login');
		}
	} else {
		const { data: currentProfile } = await supabase
			.from('profiles')
			.select('*, approver:approver_id (*), department:department_id (*)')
			.eq('id', user.id)
			.returns<JoinedProfile[]>()
			.single();
		const { data: policy } = await supabase.from('resource_policy').select().single();

		event.locals.iam = new IAM(policy.content, currentProfile);
		event.locals.currentProfile = currentProfile;
		event.locals.supabase = supabase;
		event.locals.user = user;

		if (!event.locals.iam.canAccess(event)) return error(403, 'Forbidden action!');
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
