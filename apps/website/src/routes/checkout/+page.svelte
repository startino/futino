<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import { onMount } from 'svelte';
	import { norpTiers } from '../pricing/plans';
	import { products } from '../api/stripeCheckout/products';
	// https://supabase.com/docs/reference/javascript/installing
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase.types';
	import { selectedTier } from '../pricing/tierStore';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://qnzxoapdhdycrblbeovn.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs',
	);

	async function checkout(planId: string) {
		const { data, error } = await supabase.functions.invoke('stripe-checkout', {
			body: JSON.stringify({
				planId,
			}),
		});

		if (error) {
			console.error(error);
			return;
		}
		const stripe = await loadStripe(
			'pk_test_51MsleND09EWpqQ4YqUb6Qn0oYpjnZGuZkoJ917PsSerhH5TXBRuirEwuJZY1tQg2Jttw3zQF3BVzteMYpiWpxwyX00qLkW9gd2',
		);

		await stripe?.redirectToCheckout({
			lineItems: [
				{
					price: 'price_1NibECD09EWpqQ4YRbal1at9',
					quantity: 1,
				},
			],
			mode: 'subscription',
			successUrl: `http://localhost:3000/success`,
			cancelUrl: `http://localhost:3000/cancel`,
			customerEmail: 'customer@email.com',
		});
	}
</script>

<main>
	<section>
		<div class="inner-section py-64 items-center flex flex-col h-screen">
			<!-- Display a payment form -->
			<form id="payment-form">
				<div id="link-authentication-element">
					<!--Stripe.js injects the Link Authentication Element-->
				</div>
				<div id="payment-element">
					<!--Stripe.js injects the Payment Element-->
				</div>
				<button id="submit" on:click={() => checkout($selectedTier.toString())}>
					<div class="spinner hidden" id="spinner" />
					<span id="button-text">Pay now</span>
				</button>
				<div id="payment-message" class="hidden" />
			</form>
		</div>
	</section>
</main>
