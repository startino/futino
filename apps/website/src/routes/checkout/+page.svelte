<script lang="ts">
	import Stripe from 'stripe';
	import { onMount } from 'svelte';
	import { norpTiers } from '../pricing/plans';
	import { products } from '../api/stripeCheckout/products';

	async function checkout() {
		await fetch('api/stripeCheckout', {
			// http://localhost:5173/api/stripeCheckout
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ items: products[0] }),
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				window.location.replace(data.url);
			});
	}
</script>

<!-- Display a payment form -->
<form id="payment-form">
	<div id="link-authentication-element">
		<!--Stripe.js injects the Link Authentication Element-->
	</div>
	<div id="payment-element">
		<!--Stripe.js injects the Payment Element-->
	</div>
	<button id="submit" on:click={() => checkout()}>
		<div class="spinner hidden" id="spinner" />
		<span id="button-text">Pay now</span>
	</button>
	<div id="payment-message" class="hidden" />
</form>
