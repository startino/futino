<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import Tooltip from '$lib/components/organisms/tooltip/Tooltip.svelte';
	import { formatter } from '$lib/utils';
	import { handleCheckout } from './handleCheckout';
	import { features, type NorpTier } from './plans';

	export let tier: NorpTier;
	export let cycle: string = 'monthly';
</script>

<section>
	<div class="flex flex-col place-items-start gap-2 text-left relative">
		<img
			src={tier.thumbnail}
			alt=""
			class="translate-x-1/2 z-0 translate-y-1/4 object-cover object-center w-2/3 h-fit drop-shadow-pricing-art" />
		<div class="z-10">
			<h2 class="display-large font-extrabold leading-none">
				{tier.name}
			</h2>
			<h3 class="title-medium text-outline-dark text-outline pb-6 pl-1">
				{tier.subtitle}
			</h3>
		</div>
		<div class="flex flex-row items-end gap-2">
			<div class="flex flex-row place-items-center">
				<h1 class="font-extrabold text-primary-dark tracking-tighter display-large leading-none">
					{cycle == 'yearly'
						? formatter.format((tier.cost * 0.833) / 2)
						: formatter.format(tier.cost / 2)}
				</h1>
			</div>
			<div
				class="relative flex flex-row text-outline-dark place-items-center w-fit overflow-hidden px-0.5 py-1">
				<span
					class="absolute right-0 w-full top-1/2 content-[''] border-t-2 border-outline-dark rotate-45" />
				<h1 class="font-extrabold tracking-tighter leading-none headline-medium">
					{cycle == 'yearly' ? formatter.format(tier.cost * 0.833) : formatter.format(tier.cost)}
				</h1>
			</div>
		</div>
		<h3 class="body-medium text-outline-dark">per month, billed {cycle}</h3>

		<div class="grid grid-cols-2 w-full gap-y-1 px">
			{#each Object.entries(features) as [catagoryName, catagoryFeatures]}
				<div class="flex pb-0 grid-item col-span-2 border-none mt-2 mb-1 place-self-start">
					<h1 class="mt-auto uppercase title-large text-outline-dark place-self-end">
						{catagoryName}
					</h1>
				</div>
				<!-- Features Rows-->
				{#each Object.entries(catagoryFeatures) as [featureName, featureAbout]}
					<div class="flex flex-row place-items-center gap-3 border-t-1 border-outline-dark">
						<h2 class="my-auto title-medium text-left py-1">
							{featureName}
						</h2>
					</div>
					<div
						class="border-t-1 py-1 border-outline-dark w-full flex justify-items-end items-center">
						{#if tier.features[catagoryName][featureName] == true}
							<Icon icon="checkmark" height="24" width="24" class="ml-auto text-secondary-dark" />
						{:else}
							<h2 class="my-auto title-medium ml-auto flex place-items-end justify-self-end">
								{tier.features[catagoryName][featureName]}
							</h2>
						{/if}
					</div>
				{/each}
			{/each}
		</div>

		<Button class="w-full" onClick={() => handleCheckout(tier.stripeIds[cycle])}>
			<h1 class="title-medium">GET STARTED</h1>
		</Button>
	</div>
</section>
