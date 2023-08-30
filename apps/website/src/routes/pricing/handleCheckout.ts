import type { Database } from '$lib/supabase.types';
import { loadStripe } from '@stripe/stripe-js';
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client object
const supabase = createClient<Database>(
	'https://qnzxoapdhdycrblbeovn.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs',
);

export async function handleCheckout(tierId: string) {
	console.log('handling checkout');
	const { data, error } = await supabase.functions.invoke('stripe-checkout', {
		body: JSON.stringify({
			tierId,
		}),
	});

	if (error) {
		console.error(error);
		return;
	}
	console.log('data: ', data);
	const parsedData = JSON.parse(data);
	const stripe = await loadStripe(
		'pk_test_51MsleND09EWpqQ4YqUb6Qn0oYpjnZGuZkoJ917PsSerhH5TXBRuirEwuJZY1tQg2Jttw3zQF3BVzteMYpiWpxwyX00qLkW9gd2',
	);

	await stripe?.redirectToCheckout({ sessionId: parsedData?.sessionId });
}
