<script lang="ts">
	import PromotionToggle from './PromotionToggle.svelte';
	import { Button } from '$lib/components/ui/button';

	const promotions: {
		label: string;
		index: number;
		for: string;
		discount: string;
	}[] = [
		{ label: 'Monthly', index: 0, for: 'monthly', discount: '' },
		{ label: 'Yearly', index: 1, for: 'yearly', discount: '' }
	];

	let cycle: string = 'yearly';
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto max-w-4xl text-center">
		<h1 class="text-3xl">Pricing</h1>
	</div>

	<PromotionToggle class="my-4" bind:cycle {promotions} />

	<div class="isolate mx-auto mt-12 max-w-md sm:mt-20 lg:mx-0 lg:max-w-none">
		<div
			class="mx-auto flex max-w-md flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-primary-500 lg:z-10 xl:p-10"
		>
			<div class="mb-4">
				<h3 id="tier-startup" class="mb-6 mt-0 text-lg font-semibold leading-8 text-primary-500">
					Standard <span class="text-base">/ {cycle}</span>
				</h3>

				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white">
						{cycle === 'yearly' ? '$583.33' : '$750'}
					</span>
					<span class="text-sm font-semibold leading-6">/month/company</span>
				</p>
				{#if cycle === 'yearly'}
					<p class="max-w-fit rounded-full text-sm font-bold text-primary-500">
						$7000 billed yearly (save 22.23% vs billed monthly)
					</p>
				{/if}
			</div>
			<Button href="/register">Register</Button>
		</div>
	</div>
</div>
