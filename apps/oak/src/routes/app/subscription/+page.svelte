<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Pricing from './pricing.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const renewalDate = new Date(data.subscription.current_period_end * 1000).toLocaleDateString(
		undefined,
		{
			year: 'numeric',
			month: 'long',
			day: '2-digit'
		}
	);
</script>

<Card.Root class="p-10">
	<Card.Header><Card.Title class="m-0 sm:m-0">Your Subscription</Card.Title></Card.Header>
	<Card.Content>
		{#if data.subscription.status === 'active'}
			<p class="mb-4 text-primary-500">
				Your {data.subscription.is_monthly ? 'monthly' : 'yearly'} subscription is active
			</p>
			<p>
				Renewal Date: {renewalDate}
			</p>
		{:else}
			<Pricing />

			<Button variant="destructive">Cancel Subscription</Button>
		{/if}
	</Card.Content>
</Card.Root>
