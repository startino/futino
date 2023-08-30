import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@1.35.5';


const stripe = Stripe(Deno.env.get('STRIPE_KEY')!, {
	httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(
	Deno.env.get('SUPABASE_URL')!,
	Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

const domain: string = "http://localhost:3000";

serve(async (req) => {
	if (req.method === 'OPTIONS') {
		return new Response(null, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
			},
		});
	}

	const { tierId } = await req.json();

	const session = await stripe.checkout.sessions.create({
		line_items: [
            {
                price: 'price_1NibECD09EWpqQ4YRbal1at9',
                quantity: 1,
            }
        ],
        mode: 'subscription',
        success_url: `${domain}/success`, // Needs to be set to base url 
        cancel_url: `${domain}/cancel`,
	});

	return new Response(JSON.stringify({ id: session.id }), {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
		},
	});
});
