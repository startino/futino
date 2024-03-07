<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import Tooltip from '$lib/components/organisms/tooltip/Tooltip.svelte';
	import { formatter } from '$lib/utils';
	import { handleCheckout } from './handleCheckout';
	import { features, type NorpTier } from './plans';

	export let tier: NorpTier;
	export let cycle: string = 'yearly';
</script>

<section>
	<div
		class="relative flex flex-col place-items-start gap-2 text-left"
		id={tier.name.toLowerCase().replace(' ', '')}
	>
		<img
			src={tier.thumbnail}
			alt=""
			class="drop-shadow-pricing-art z-0 h-fit w-2/3 translate-x-1/2 translate-y-1/4 object-cover object-center"
		/>
		<div class="z-10">
			<h2 class="display-large font-extrabold leading-none">
				{tier.name}
			</h2>
			<h3 class="title-medium text-outline pb-6 pl-1">
				{tier.subtitle}
			</h3>
		</div>
		<div class="flex flex-row items-end gap-2">
			<div class="flex flex-row place-items-center">
				<h1 class="text-primary display-large font-extrabold leading-none tracking-tighter">
					{cycle == 'yearly'
						? formatter.format(tier.cost * (10 / 12))
						: formatter.format(tier.cost)}
				</h1>
			</div>
		</div>
		<h3 class="body-medium text-outline">per month, billed {cycle}</h3>

		<div class="px grid w-full grid-cols-2 gap-y-1">
			{#each Object.entries(features) as [catagoryName, catagoryFeatures]}
				<div class="grid-item col-span-2 mb-1 mt-2 flex place-self-start border-none pb-0">
					<h1 class="title-large text-outline mt-auto place-self-end uppercase">
						{catagoryName}
					</h1>
				</div>
				<!-- Features Rows-->
				{#each Object.entries(catagoryFeatures) as [featureName, featureAbout]}
					<div class="border-t-1 border-outline flex flex-row place-items-center gap-3">
						<h2 class="title-medium my-auto py-1 text-left">
							{featureName}
						</h2>
					</div>
					<div class="border-t-1 border-outline flex w-full items-center justify-items-end py-1">
						{#if tier.features[catagoryName][featureName] == true}
							<Icon icon="checkmark" height="24" width="24" class="text-secondary ml-auto" />
						{:else}
							<h2 class="title-medium my-auto ml-auto flex place-items-end justify-self-end">
								{tier.features[catagoryName][featureName]}
							</h2>
						{/if}
					</div>
				{/each}
			{/each}
		</div>
		<!--<Button
      class="w-full"
      onClick={() => handleCheckout(tier.stripeIds[cycle])}
    >
      <h1 class="title-medium">GET STARTED</h1>
    </Button>-->
	</div>
</section>
