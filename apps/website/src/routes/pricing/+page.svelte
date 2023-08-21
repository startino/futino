<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import PromotionToggle from './PromotionToggle.svelte';
	import { promotions, norp_tiers, type NorpTier } from './plans';
	import PlanCard from './TierCard.svelte';

	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<Header />

<main
	class="py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40">
	<section class="">
		<div class="inner-section flex flex-col items-center">
			<h1 class="lg:display-large">Adopt an online presence the way you want to.</h1>
			<div class="flex flex-col gap-2 w-fit">
				<h2 class="title-large">How often do you want to pay?</h2>
				<PromotionToggle {promotions} />
			</div>

			<div class="grid space-y-10 place-items-center">
				<h1 class="title-large">Membership Tiers</h1>

				<ul class="flex flex-col justify-center xl:flex-row space-y-5 xl:space-x-5 xl:space-y-0">
					{#each norp_tiers as tier}
						<li class="justify-center">
							<button
								class="relative group overflow-hidden inline-block p-4 rounded-t-lg shadow-xl bg-surface-variant-light/20 dark:bg-surface-variant-dark/20 border-2 border-transparent {activeTabValue ===
								tier.index
									? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark transition-all duration-500 scale-110'
									: 'hover:border-outline-light rounded-xl'}"
								on:click={handleClick(tier.index)}
								type="button">
								<!--Shine Box-->
								<div
									class="absolute top-0 -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
								<PlanCard {tier} />
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>
</main>

<Footer />
