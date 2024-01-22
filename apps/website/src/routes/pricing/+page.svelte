<script lang="ts">
	import PromotionToggle from './PromotionToggle.svelte';
	import { promotions, norpTiers, features } from './plans';
	import TierListing from './TierListing.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import { loadStripe } from '@stripe/stripe-js';

	import { handleCheckout } from './handleCheckout';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import InView from '$lib/components/organisms/Inview.svelte';
	import Tooltip from '$lib/components/organisms/tooltip/Tooltip.svelte';
	import { formatter } from '$lib/utils';
	import Particles from 'svelte-particles';
	import { loadSlim } from 'tsparticles-slim';
	import type { Engine } from 'tsparticles-engine';
	import { particlesConfig } from '../pricingParticlesConfig';

	export let activeTabValue = 0;

	let cycle: string = 'yearly';

	const handlePromotionToggle = (tabValue: number) => () => (activeTabValue = tabValue);

	let onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine: Engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	};
</script>

<main
	class="relative grid place-items-center bg-gradient-to-b from-black/50 from-85% to-transparent text-left"
>
	<Particles
		id="tsparticles"
		class="absolute z-0 h-full w-full"
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
	<section class="z-20">
		<div
			class="inner-section flex flex-col items-center justify-items-center gap-8 pt-48 text-center"
		>
			<div class="flex flex-col items-center gap-2">
				<h1 class="display-small lg:display-large">Scalable Tiers Made Just For You</h1>
				<h2 class="title-large">
					No contracts, pause or cancel anytime, and upscale or downscale as you wish.
				</h2>
			</div>

			<PromotionToggle class="my-4" bind:cycle {promotions} />

			<!-- Mobile view -->
			<div class="flex w-full flex-col place-items-start gap-12 lg:hidden">
				{#each norpTiers as tier}
					<TierListing {tier} {cycle} />
				{/each}
			</div>
			<!-- md+ view -->
			<div class="mt-20 hidden grid-cols-4 place-items-center lg:grid">
				<!--Top Row-->
				<div class="grid-item border-none" />
				{#each norpTiers as { name, subtitle, cost, thumbnail }}
					<div
						class=" grid-item flex max-w-md flex-col place-items-start gap-2 border-none text-left"
						id={name.toLowerCase().replace(' ', '')}
					>
						<img
							src={thumbnail}
							alt=""
							class="object-fit drop-shadow-pricing-art h-1/2 w-1/2 object-center pb-1"
						/>
						<div class="">
							<h2 class=" headline-large font-extrabold uppercase">
								{name}
							</h2>
							<h3 class="title-medium text-outline pb-6">
								{subtitle}
							</h3>
						</div>
						<div class="mt-auto pb-10">
							<div class="flex flex-row items-end gap-2">
								<div class="flex flex-row place-items-center">
									<h1
										class="text-primary display-large font-extrabold leading-none tracking-tighter"
									>
										{cycle == 'yearly'
											? formatter.format(((cost * 10) / 12) * 0.7)
											: formatter.format(cost * 0.7)}
									</h1>
								</div>
								<div
									class="text-outline relative flex w-fit flex-row place-items-center overflow-hidden px-0.5 py-1"
								>
									<span
										class="border-outline absolute right-0 top-1/2 w-full rotate-45 border-t-2 content-['']"
									/>
									<h1 class="headline-medium font-extrabold leading-none tracking-tighter">
										{cycle == 'yearly'
											? formatter.format((cost * 10) / 12)
											: formatter.format(cost)}
									</h1>
								</div>
							</div>
							<div class="my-2 flex flex-row place-items-center gap-2 text-center">
								<h2 class="title-medium my-auto text-left">for first year</h2>
								<Tooltip
									content={`To celebrate our recent launch and to build lasting relationships, we're offering this special first-year discount. 🎉`}
									direction="left"
								>
									<Icon icon="info" width="16" height="16" class="text-outline my-auto" />
								</Tooltip>
							</div>
							<h3 class="body-medium text-outline">
								per month, billed {cycle}
							</h3>
						</div>
					</div>
				{/each}
				{#each Object.entries(features) as [catagoryName, catagoryFeatures]}
					<div class="grid-item col-span-4 mb-1 mt-2 flex border-none pb-0">
						<h1 class="title-large text-outline mt-auto place-self-end uppercase">
							{catagoryName}
						</h1>
					</div>
					<!-- Features Rows-->
					{#each Object.entries(catagoryFeatures) as [featureName, featureAbout]}
						<div class="grid-item flex flex-row place-items-center gap-3">
							<h2 class="title-medium my-auto py-2 text-left">
								{featureName}
							</h2>
							<Tooltip content={featureAbout} direction="right">
								<Icon icon="info" width="14" height="14" class="text-outline" />
							</Tooltip>
						</div>
						{#each norpTiers as tier}
							<div class="grid-item flex items-center self-center">
								{#if tier.features[catagoryName][featureName] == true}
									<Icon icon="checkmark" height="24" width="24" class="text-secondary -ml-0.5" />
								{:else}
									<h2 class=" title-medium text-left">
										{tier.features[catagoryName][featureName]}
									</h2>
								{/if}
							</div>
						{/each}
					{/each}
				{/each}
				<div class="grid-item border-none" />
				{#each norpTiers as { stripeIds }}
					<!--<div class="w-full mt-10 -ml-2 self-start md:pr-4 lg:pr-10">
            <Button
              class="w-full"
              onClick={() => handleCheckout(stripeIds[cycle])}
            >
              <h1 class="uppercase title-medium lg:title-large">Get Started</h1>
            </Button>
          </div>-->
				{/each}
			</div>
		</div>
	</section>

	<section class="section z-20 sm:-m-12 md:m-12">
		<div class="inner-section flex w-full flex-col items-center gap-y-6 md:flex-row">
			<div class="flex flex-col gap-4">
				<div class="flex flex-row">
					<!-- Mobile text -->
					<div
						class="headline-large sm:display-small border-primary md:display-medium lg:display-large flex flex-col gap-2 border-b-4 pb-4 text-center font-extrabold tracking-wider md:hidden md:-space-y-4 md:border-b-0 md:border-l-4 md:pb-0 md:pl-4 md:text-left"
					>
						<h1 class="uppercase">Got questions?</h1>
						<h1 class="uppercase">Not convinced?</h1>
					</div>
					<!-- md+ text-->
					<div
						class="headline-large sm:display-small border-primary md:display-medium lg:display-large hidden flex-col gap-2 border-b-4 pb-4 text-center font-extrabold tracking-wider md:flex md:-space-y-4 md:border-b-0 md:border-l-4 md:pb-0 md:pl-4 md:text-left"
					>
						<InView fly={{ x: -200, y: 0 }} duration={250} class="">
							<h1 class="uppercase">Got questions?</h1>
						</InView>
						<InView fly={{ x: -200, y: 0 }} top={120} delay={200} duration={250} class="">
							<h1 class="uppercase">Not convinced?</h1>
						</InView>
					</div>
				</div>
			</div>

			<div
				class="bg-surface flex h-full max-w-sm flex-col place-items-center gap-4 rounded-md px-8 py-8 text-center md:ml-auto"
			>
				<h3 class="title-medium sm:title-large pt-4">
					Learn more about how Futino works and how it can help your business grow.
				</h3>
				<Button class="mx-auto mt-6 flex w-fit" href="/booking">
					<h1 class="title-medium md:headline-medium uppercase">BOOK A CALL</h1>
				</Button>
			</div>
		</div>
	</section>
</main>

<style>
	.grid-item {
		@apply border-outline/50 h-full w-full border-t px-3 py-2;
	}
</style>
