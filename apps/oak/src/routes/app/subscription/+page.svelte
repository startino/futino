<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Pricing from './pricing.svelte';

	export let data;
</script>

<Card.Root class="p-10">
	<Card.Header><Card.Title class="m-0 sm:m-0">Your Subscription</Card.Title></Card.Header>
	<Card.Content>
		{#if data.subscription.status === 'active'}
			<p class="mb-10 text-primary-500">
				Your {data.subscription.is_monthly ? 'monthly' : 'yearly'} subscription is active
			</p>
		{:else}
			<Pricing />

			<Button variant="destructive">Cancel Subscription</Button>
		{/if}
	</Card.Content>
</Card.Root>
