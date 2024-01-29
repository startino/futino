<script>
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { Elements, PaymentElement } from 'svelte-stripe';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';

	export let data;

	$: ({ clientSecret, returnUrl } = data);

	let stripe;

	let elements;

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});

	async function submit() {
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: returnUrl
			}
		});

		if (error) {
			console.error(error);
		}
	}
</script>

<Card.Root>
	<Card.Header
		><Card.Title class="m-0 sm:m-0">Subscription</Card.Title>
		<Card.Description class="m-0 sm:m-0">
			<span class="text-2xl font-bold">$500</span>/month
		</Card.Description></Card.Header
	>

	<Card.Content>
		{#if stripe}
			<form class="rounded-2xl p-6" on:submit|preventDefault={submit}>
				<Elements theme="night" {stripe} {clientSecret} bind:elements>
					<PaymentElement />
				</Elements>

				<Button type="submit" class="mt-4 w-full">Pay</Button>
			</form>
		{:else}
			Loading Stripe...
		{/if}
	</Card.Content>
</Card.Root>
