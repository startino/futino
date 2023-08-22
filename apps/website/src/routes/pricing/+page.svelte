<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import PromotionToggle from './PromotionToggle.svelte';
	import { promotions, norpTiers, type NorpTier, features } from './plans';
	import PlanCard from './TierCard.svelte';
	import TierListing from './TierListing.svelte';
	import TierFeatures from './TierFeatures.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import InViewSlide from '$lib/components/organisms/InViewSlide.svelte';

	export let activeTabValue = 0;

	let cycle: string = 'monthly';

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<Header />

<main class="border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40 text-left">
	<section class="border-b border-primary-light/40 dark:border-primary-dark/40">
		<div class="flex flex-col items-center gap-8 inner-section">
			<h1 class="headline-large lg:display-large">Adopt an online presence the way you want to.</h1>

			<PromotionToggle bind:cycle {promotions} />

			<div class="flex flex-col gap-12 place-items-start md:hidden">
				{#each norpTiers as tier}
					<TierListing {tier} />
				{/each}
			</div>
			<div class="hidden md:grid grid-cols-4 place-items-center mt-20">
				<!--Top Row-->
				<div class="flex grid-item pb-0">
					<h1 class="mt-auto uppercase title-medium text-outline-dark place-self-end">Features</h1>
				</div>
				{#each norpTiers as { name, subtitle, cost }}
					<div class="flex grid-item flex-col max-w-md gap-2 text-left place-items-start">
						<img
							src="/artwork/design_illustration.png"
							alt=""
							class="object-cover object-center w-1/2 -mb-5 h-fit" />
						<div class="">
							<h2 class="font-extrabold display-small">
								{name}
							</h2>
							<h3 class="pb-6 title-medium text-outline-dark text-outline">
								{subtitle}
							</h3>
						</div>
						<div class="pb-10">
							<h1 class="font-extrabold display-large tracking-tighter">
								${cost}
							</h1>
							<h3 class="body-medium text-outline-dark">/ per month, billed {cycle}</h3>
						</div>
					</div>
				{/each}
				<!-- Features Rows-->
				{#each features as feature}
					<h2 class="my-auto title-medium grid-item">
						{feature}
					</h2>
					{#each norpTiers as { features }}
						<h2 class=" my-auto title-medium grid-item">
							{features[feature]}
						</h2>
					{/each}
				{/each}
				<div class="grid-item border-none" />
				{#each norpTiers as _}
					<div class="grid-item border-none mt-14">
						<Button class="w-full">
							<h1 class="uppercase headline-medium">Get Started</h1>
						</Button>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="-my-24">
		<div class="inner-section flex flex-row w-full items-center justify-between max-w-4xl">
			<div
				class=" flex flex-col -space-y-4 headline-small border-l-4 pl-6 my-4 border-primary-dark md:display-large tracking-widest font-extrabold">
				<h1 class="uppercase">Not convinced?</h1>
				<h1 class="uppercase">Not custom enough?</h1>
				<h1 class="uppercase">Got questions?</h1>
			</div>
			<Button class="h-fit w-fit">
				<h1 class="uppercase title-small md:headline-medium">BOOK A CALL</h1>
			</Button>
		</div>
	</section>
</main>

<Footer />

<style>
	.grid-item {
		@apply border-b border-outline-dark/50 w-full px-3 py-2 h-full;
	}
</style>
