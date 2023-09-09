<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import PromotionToggle from './PromotionToggle.svelte';
	import { promotions, norpTiers, features } from './plans';
	import TierListing from './TierListing.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import InViewSlide from '$lib/components/organisms/InViewSlide.svelte';
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase.types';
	import { loadStripe } from '@stripe/stripe-js';

	import { handleCheckout } from './handleCheckout';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import InView from '$lib/components/organisms/Inview.svelte';

	export let activeTabValue = 0;

	let cycle: string = 'monthly';

	const handlePromotionToggle = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<main class="text-left border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40">
	<section class="shadow-2xl">
		<div
			class="flex flex-col items-center gap-8 justify-items-center pt-48 text-center inner-section">
			<div class="flex flex-col items-center gap-4">
				<h1 class="display-small lg:display-large">Pay exaclty for what you get.</h1>
				<h2 class="title-large">
					No contracts, pause or cancel anytime, and upscale or downscale as you wish.
				</h2>
			</div>
			<PromotionToggle bind:cycle {promotions} />

			<!-- Mobile view -->
			<div class="flex flex-col gap-12 place-items-start md:hidden">
				{#each norpTiers as tier}
					<TierListing {tier} {cycle} />
				{/each}
			</div>
			<!-- md+ view -->
			<div class="hidden grid-cols-4 mt-20 md:grid place-items-center">
				<!--Top Row-->
				<div class="flex pb-0 grid-item">
					<h1 class="mt-auto uppercase title-medium text-outline-dark place-self-end">Features</h1>
				</div>
				{#each norpTiers as { name, subtitle, cost, thumbnail }}
					<div class=" flex flex-col max-w-md gap-2 text-left grid-item place-items-start">
						<img
							src={thumbnail}
							alt=""
							class="object-fit object-center drop-shadow-pricing-art h-1/2 w-1/2" />
						<div class="">
							<h2 class=" headline-large uppercase text-primary-dark font-extrabold">
								{name}
							</h2>
							<h3 class="pb-6 title-medium text-outline-dark text-outline">
								{subtitle}
							</h3>
						</div>
						<div class="pb-10 mt-auto">
							<h1 class="font-extrabold tracking-tighter display-large">
								${cost}
							</h1>
							<h3 class="body-medium text-outline-dark">/ per month, billed {cycle}</h3>
						</div>
					</div>
				{/each}
				<!-- Features Rows-->
				{#each features as feature}
					<h2 class="my-auto title-medium grid-item text-left">
						{feature}
					</h2>
					{#each norpTiers as { features }}
						<h2 class="my-auto title-medium grid-item text-left">
							{#if features[feature] == 'checkmark'}
								<Icon icon="checkmark" height="24" width="24" class="-ml-0.5 text-secondary-dark" />
							{:else}
								{features[feature]}
							{/if}
						</h2>
					{/each}
				{/each}
				<div class="border-none grid-item" />
				{#each norpTiers as { stripeIds }}
					<div class="w-full mt-10 self-start md:pr-4 lg:pr-10">
						<Button class="w-full" onClick={() => handleCheckout(stripeIds[cycle])}>
							<h1 class="uppercase title-medium lg:title-large">Get Started</h1>
						</Button>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="sm:-my-12 md:-my-20">
		<div class="flex flex-col items-center w-full inner-section md:flex-row gap-y-6">
			<div class="flex flex-col gap-4">
				<div class="flex flex-row">
					<!-- Mobile text -->
					<div
						class="flex md:hidden flex-col gap-2 pb-4 font-extrabold tracking-wider text-center border-b-4 md:-space-y-4 headline-large sm:display-small md:text-left md:pl-4 md:border-b-0 md:border-l-4 md:pb-0 border-primary-dark md:display-medium lg:display-large">
						<h1 class="uppercase">Got questions?</h1>
						<h1 class="uppercase">Not convinced?</h1>
					</div>
					<!-- md+ text-->
					<div
						class="hidden md:flex flex-col gap-2 pb-4 font-extrabold tracking-wider text-center border-b-4 md:-space-y-4 headline-large sm:display-small md:text-left md:pl-4 md:border-b-0 md:border-l-4 md:pb-0 border-primary-dark md:display-medium lg:display-large">
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
				class="flex ml-auto flex-col h-full max-w-sm gap-4 px-8 py-8 text-center rounded-md bg-surface place-items-center">
				<h3 class="pt-4 title-medium sm:title-large">
					Learn more about how Futino works and how it can help your business grow.
				</h3>
				<Button class="flex mx-auto mt-6 w-fit" href="/booking">
					<h1 class="uppercase title-medium md:headline-medium">BOOK A CALL</h1>
				</Button>
			</div>
		</div>
	</section>
</main>

<style>
	.grid-item {
		@apply border-b border-outline-dark/50 w-full px-3 py-2 h-full;
	}
</style>
