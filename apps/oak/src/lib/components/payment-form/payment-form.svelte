<script lang="ts">
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { invalidate } from '$app/navigation';
	import { Elements, CardNumber, CardCvc, CardExpiry } from 'svelte-stripe';
	import { onMount } from 'svelte';
	import {
		loadStripe,
		type PaymentMethod,
		type Stripe,
		type StripeElements
	} from '@stripe/stripe-js';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { getContext } from '$lib/utils';

	export let clientSecret: string;
	export let returnUrl: string;

	const stripeData = getContext('stripeData');

	let stripe: Stripe;

	let processing = false;

	let elements: StripeElements;

	const cardStyle = { base: { color: '#fff' } };

	onMount(async () => {
		stripe = (await loadStripe(PUBLIC_STRIPE_KEY)) as Stripe;
	});

	async function payFromSavedCard() {
		if (processing || !$stripeData.paymentMethod) return;

		processing = true;

		const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: $stripeData.paymentMethod.id
		});

		if (error) {
			console.error({ error });
			processing = false;
			return;
		}

		await invalidate('/app');

		if (paymentIntent) {
			goto(`${returnUrl}&payment_intent=${paymentIntent.id}`);
		}
	}

	async function submit() {
		if (processing) return;

		processing = true;

		const cardNumber = elements.getElement('cardNumber');
		if (!cardNumber) {
			console.log('No card number');
			return;
		}

		const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardNumber
			}
		});

		if (error) {
			console.error({ error });
			processing = false;
			return;
		}

		await invalidate('/app');
		if (paymentIntent) {
			goto(`${returnUrl}&payment_intent=${paymentIntent.id}`);
		}
	}
</script>

{#if stripe}
	{#if $stripeData.paymentMethod}
		<p class="text-lg">
			Use your saved payment method: <span class="font-bold text-accent">
				{$stripeData.paymentMethod.card?.brand} ...{$stripeData.paymentMethod.card?.last4}
			</span>
		</p>

		<Button class="mt-4" disabled={processing} on:click={payFromSavedCard}>
			{processing ? 'Processing...' : 'Pay'}
		</Button>
	{:else}
		<Elements {stripe} bind:elements>
			<form class="grid gap-3 rounded-2xl" on:submit|preventDefault={submit}>
				<CardNumber style={cardStyle} classes={{ base: 'input' }} />

				<div class="flex gap-2 [&>*]:w-1/5">
					<CardExpiry style={cardStyle} classes={{ base: 'input' }} />
					<CardCvc style={cardStyle} classes={{ base: 'input' }} />
				</div>

				<Button type="submit" class="mt-4 w-full" disabled={processing}>
					{processing ? 'Processing...' : 'Pay'}
				</Button>
			</form>
		</Elements>
	{/if}
{/if}

<style lang="postcss">
	:global(.input) {
		border: solid 1px theme(colors.ring);
		padding: 1rem;
		border-radius: 5px;
		color: white !important;
		background: theme(colors.black);
	}
</style>
