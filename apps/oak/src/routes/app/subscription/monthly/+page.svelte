<script lang="ts">
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { Elements, PaymentElement } from 'svelte-stripe';
	import { onMount } from 'svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

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

<Card.Root class="p-10">
	<Card.Header>
		<Card.Title>Monthly Subscription</Card.Title>
		<Card.Description>$450/month</Card.Description>
	</Card.Header>

	<Card.Content>
		<form class="rounded-2xl p-6" on:submit|preventDefault={submit}>
			<Elements theme="night" {stripe} {clientSecret} bind:elements>
				<PaymentElement />
			</Elements>

			<Button type="submit" class="mt-4 w-full">Pay</Button>
		</form></Card.Content
	>
	<Card.Footer>
		<Button href="/app/subscription">Go Back</Button>
	</Card.Footer>
</Card.Root>
