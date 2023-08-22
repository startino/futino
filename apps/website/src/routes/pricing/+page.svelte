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
		<div class="flex flex-col justify-items-center items-center gap-8 inner-section">
			<div class="flex flex-col gap-4 items-center">
				<h1 class="headline-large lg:display-large">Pay for exaclty what you get.</h1>
				<h2 class="title-large">
					No contracts, pause or cancel anytime, and upscale or downscale as you wish.
				</h2>
			</div>
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

	<section class="my-0 md:-my-24">
		<div class="inner-section w-full flex flex-row justify-around items-center">
			<div class="flex flex-col gap-4">
				<div class="flex flex-row">
					<InViewSlide
						once={true}
						duration={1000}
						axis={'y'}
						delay={300}
						bottom="-30%"
						class="relative hidden w-6 sm:h-[350px] md:h-full mx-auto sm:flex">
						<!--Glow Line-->
						<div
							class="absolute z-0 w-2 h-full -translate-x-1/2 bg-gradient-to-b from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark blur-sm left-1/2" />
						<!--Line-->
						<div
							class="absolute z-10 w-1 h-full -translate-x-1/2 rounded-lg bg-surface-light dark:bg-surface-dark left-1/2" />
					</InViewSlide>
					<div
						class=" flex flex-col md:-space-y-4 title-large pl-6 border-primary-dark md:display-large tracking-wider font-extrabold">
						<h1 class="uppercase">Not convinced?</h1>
						<h1 class="uppercase">Got questions?</h1>
					</div>
				</div>
			</div>

			<div
				class="flex flex-col rounded-md bg-surface place-items-center h-full gap-4 py-8 text-center px-8 max-w-sm">
				<h3 class="title-medium pt-4 px-4">
					Learn more about how Futino works and how it can help your business grow by booking a 15
					minute intro.
				</h3>
				<Button class=" flex w-fit mx-auto mt-6">
					<h1 class="uppercase title-medium md:headline-medium">BOOK A CALL</h1>
				</Button>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	.grid-item {
		@apply border-b border-outline-dark/50 w-full px-3 py-2 h-full;
	}
</style>
