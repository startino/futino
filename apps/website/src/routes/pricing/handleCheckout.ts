import { base } from '$app/paths';
import type { Database } from '$lib/supabase.types';
import { loadStripe } from '@stripe/stripe-js';
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client object
const supabase = createClient<Database>(
	'https://qnzxoapdhdycrblbeovn.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs',
);

export async function handleCheckout(tierId: string) {
	const dev: boolean = window.location.hostname.includes('localhost');
	const domain = dev ? 'http://localhost:3000' : 'https://futi.no';
	const { data, error } = await supabase.functions.invoke('stripe-checkout', {
		body: JSON.stringify({
			domain,
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
		'pk_live_51MsleND09EWpqQ4Y3sNQoIa1ehx2AT27OLissakJ3duaI6zg5qZxbB9tiaqclpb02H90hFnkKwV7Tof8EPKN4xOT00dGnLw8NC',
	);

	await stripe?.redirectToCheckout({ sessionId: parsedData?.sessionId });
}
