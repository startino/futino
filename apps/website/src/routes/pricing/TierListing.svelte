<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import TierFeatures from './TierFeatures.svelte';
	import { handleCheckout } from './handleCheckout';
	import type { NorpTier } from './plans';

	export let tier: NorpTier;
	export let cycle: string = 'monthly';
</script>

<div class="flex flex-col place-items-start gap-2 text-left">
	<img
		src="/artwork/design_illustration.png"
		alt=""
		class="object-cover object-center w-1/2 h-fit -mb-5" />
	<div class="">
		<h2 class="display-small font-extrabold">
			{tier.name}
		</h2>
		<h3 class="title-medium max-w-xs text-outline-dark text-outline pb-6">
			{tier.subtitle}
		</h3>
	</div>
	<div class="">
		<h1 class="display-small font-extrabold">
			${tier.cost}
		</h1>
		<h3 class="body-medium text-outline-dark">/ per month, billed {cycle}</h3>
	</div>

	<div class="py-4 w-full">
		<TierFeatures features={tier.features} />
	</div>

	<Button class="w-full" onClick={() => handleCheckout(tier.stripeId)}>
		<h1 class="title-medium">GET STARTED</h1>
	</Button>
</div>
