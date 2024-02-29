import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { ApiClient } from '$lib/api-client.js';
import Stripe from 'stripe';

export const load = ({ data: { stripeKey, user, userAccessToken } }) => {
	const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		global: { headers: { Authorization: `Bearer ${userAccessToken}` } }
	});
	return {
		apiClient: new ApiClient({ user, supabase, stripe: new Stripe(stripeKey), userAccessToken })
	};
};
