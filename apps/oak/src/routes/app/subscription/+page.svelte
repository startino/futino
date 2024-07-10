<script lang="ts">
	import { formatAmount, getContext } from '$lib/utils';
	import { Switch } from '$lib/components/ui/switch';
	import * as Card from '$lib/components/ui/card';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

	const stripeData = getContext('stripeData');
	const currentProfile = getContext('currentProfile');

	let isYearly = false;

	$: pricing = isYearly ? 7000 : 750;
</script>

{#if $stripeData.subscription}
	<Card.Root class="overflow-hidden rounded-lg shadow-xl">
		<Card.Header class="p-6">
			<h2 class="text-2xl font-bold">Your Subscription</h2>
		</Card.Header>
		<Card.Content class="p-6">
			<div class="space-y-8">
				<div class="from-background-950 rounded-lg bg-background to-primary-800">
					<div class="rounded-lg p-6 pt-2">
						<p class="mb-4">
							{#if $stripeData.subscription.status === 'canceled'}
								<Badge variant="destructive">Canceled</Badge>
							{/if}
							{$stripeData.subscription.plan.interval}ly subscription
						</p>
						<div class="mb-4">
							<h5 class="mb-1 font-semibold">Payment Method</h5>
							<Card.Root class="border-none bg-transparent">
								<Card.Content class="px-0 ">
									<p class="font-medium">
										<span>{$stripeData.paymentMethod.card?.brand}</span>
										<span>...{$stripeData.paymentMethod.card?.last4}</span>
									</p>
								</Card.Content>
							</Card.Root>
						</div>
						<div>
							{#if $stripeData.subscription.status === 'canceled'}
								<h5 class="mb-1 font-semibold">End Date</h5>
							{:else}
								<h5 class="mb-1 font-semibold">Renewal Date</h5>
							{/if}
							<p>
								{new Date($stripeData.subscription.current_period_end * 1000).toLocaleDateString(
									undefined,
									{
										year: 'numeric',
										month: 'long',
										day: '2-digit'
									}
								)}
							</p>
						</div>
					</div>
				</div>
				<div class="text-right">
					{#if $stripeData.subscription.status === 'active' && $currentProfile.roles.includes('admin')}
						<AlertDialog.Root closeOnOutsideClick>
							<AlertDialog.Trigger asChild let:builder>
								<Button builders={[builder]} variant="destructive">Cancel Subscription</Button>
							</AlertDialog.Trigger>
							<AlertDialog.Content>
								<AlertDialog.Header>
									<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
									<AlertDialog.Description>
										This action cannot be undone. This will immediately cancel your subscription.
									</AlertDialog.Description>
								</AlertDialog.Header>
								<AlertDialog.Footer>
									<AlertDialog.Cancel>
										<Button
											variant="outline"
											class="border-none bg-transparent hover:bg-transparent">Close</Button
										>
									</AlertDialog.Cancel>
									<AlertDialog.Action>
										<a href="/app/subscription/cancel">
											<Button class="border-none bg-transparent hover:bg-transparent"
												>Cancel Subscription</Button
											>
										</a>
									</AlertDialog.Action>
								</AlertDialog.Footer>
							</AlertDialog.Content>
						</AlertDialog.Root>
					{/if}
				</div>
			</div>
		</Card.Content>
	</Card.Root>
{:else if $currentProfile.roles.includes('admin')}
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
{:else}
	<Card.Root class="mx-auto mt-8 w-fit">
		<Card.Header>
			<Card.Title>No Subscription</Card.Title>
			<Card.Description>Please contact your administrator to choose a subscription</Card.Description
			>
		</Card.Header>
	</Card.Root>
{/if}
