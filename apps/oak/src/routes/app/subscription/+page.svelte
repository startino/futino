<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import Pricing from './pricing.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Card.Root class="p-10">
	<Card.Header><Card.Title class="m-0 sm:m-0">Your Subscription</Card.Title></Card.Header>
	<Card.Content class="grid gap-4">
		{#if data.subscription && data.subscription.status === 'active'}
			<p class="text-primary-500">
				Your {data.subscription.is_monthly ? 'monthly' : 'yearly'} subscription is active
				{#if data.paymentMethod}
					with card: {data.paymentMethod.card.brand} ...{data.paymentMethod.card.last4}
				{/if}
			</p>

			<p>
				Renewal Date: {new Date(data.subscription.current_period_end * 1000).toLocaleDateString(
					undefined,
					{
						year: 'numeric',
						month: 'long',
						day: '2-digit'
					}
				)}
			</p>

			<AlertDialog.Root>
				<AlertDialog.Trigger asChild let:builder>
					<Button builders={[builder]} variant="destructive" class="justify-self-start"
						>Cancel Subscription</Button
					>
				</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Header>
						<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
						<AlertDialog.Description>
							This action cannot be undone. This will immediatly cancel your subscription
						</AlertDialog.Description>
					</AlertDialog.Header>
					<AlertDialog.Footer>
						<AlertDialog.Cancel>Close</AlertDialog.Cancel>
						<AlertDialog.Action
							><a href="/app/subscription/cancel">Cancel subscription</a></AlertDialog.Action
						>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog.Root>
		{:else}
			<Pricing />
		{/if}
	</Card.Content>
</Card.Root>
