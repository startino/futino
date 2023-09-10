import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@1.35.5';

const stripe = Stripe(Deno.env.get('STRIPE_LIVE_KEY')!, {
	httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(
	Deno.env.get('SUPABASE_URL')!,
	Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

serve(async (req) => {
	if (req.method === 'OPTIONS') {
		return new Response(null, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
			},
		});
	}

	const { domain, tierId } = await req.json();

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: tierId,
				quantity: 1,
			},
		],
		discounts: [
			{
				coupon: 'KAdmHiIp',
			},
		],
		mode: 'subscription',
		success_url: `${domain}/success`, // Needs to be set to base url
		cancel_url: `${domain}/cancel`,
	});

	return new Response(JSON.stringify({ sessionId: session.id }), {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
		},
	});
});
