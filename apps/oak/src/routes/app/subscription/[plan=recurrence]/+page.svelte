<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { PaymentForm } from '$lib/components/payment-form';
	import { browser } from '$app/environment';

	export let data;

	$: ({ clientSecret, newSubscriptionId, price, interval } = data);
</script>

<Card.Root class="mx-auto w-full">
	<Card.Header>
		<div class="flex items-center gap-4">
			<div>
				<Card.Title class="font-bold">{price}/{interval}</Card.Title>
			</div>
		</div>
	</Card.Header>

	{#if browser}
		<Card.Content>
			<PaymentForm
				bind:clientSecret
				returnUrl={`${window.location.origin}/app/subscription/complete?subscription_id=${newSubscriptionId}`}
			/>
		</Card.Content>
	{/if}
</Card.Root>
