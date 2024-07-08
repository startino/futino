<script lang="ts">
	import { formatAmount, getContext } from '$lib/utils';
	import { Switch } from '$lib/components/ui/switch';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';

	const stripeData = getContext('stripeData');

	let isYearly = false;

	$: pricing = isYearly ? 7000 : 750;
</script>

{#if $stripeData.subscription}
	<p>Your subscription here</p>
{:else}
	<Card.Root class="mx-auto mt-8 w-fit">
		<Card.Header>
			<Card.Title>Subscription</Card.Title>
			<Card.Description>Please choose your subscription</Card.Description>
		</Card.Header>

		<Card.Content class="grid gap-2">
			<div class="flex items-center gap-2 text-muted-foreground">
				Monthly
				<Switch bind:checked={isYearly} />
				Yearly
			</div>
			<span class="text-3xl">{formatAmount(pricing)}</span>
			<Button href="/app/subscription/{isYearly ? 'yearly' : 'monthly'}">Choose</Button>
		</Card.Content>
	</Card.Root>
{/if}
