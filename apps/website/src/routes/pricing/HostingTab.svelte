<script lang="ts">
	import PlanCard from './PlanCard.svelte';
	import PromotionToggle from './PromotionToggle.svelte';

	export let plans = [
		{
			label: 'Basic',
			prefix: '$',
			cost: 29,
			note: '/mo',
			subtext: '',
			features: ['Hosting', 'Customer Support'],
			index: 1
		},
		{
			label: 'Standard',
			prefix: '$',
			cost: 87,
			note: '/mo',
			subtext: '',
			features: ['Hosting', 'Priority Customer Suport', '2 Hours Maintenance Work'],
			index: 2
		},
		{
			label: 'Business',
			prefix: '$',
			cost: 261,
			note: '/mo',
			subtext: '',
			features: [
				'Hosting',
				'Priority Customer Suport',
				'4 Hours Maintenance Work',
				'2 Hours Developement Work'
			],
			index: 3
		},
		{
			label: 'Enterprise',
			prefix: '$',
			cost: 783,
			note: '/mo',
			subtext: '',
			features: [
				'Hosting',
				'Priority Customer Suport',
				'8 Hours Maintenance Work',
				'8 Hours Developement Work'
			],
			index: 4
		}
	];

	let promotions: { label: string; value: number; for: string; discount: string }[] = [
		{ label: 'Monthly', value: 1, for: 'monthly', discount: '' },
		{ label: 'Biannually', value: 2, for: 'biennially', discount: '1 Month Free' },
		{ label: 'Yearly', value: 3, for: 'annuallyy', discount: '3 Months Free' }
	];
	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="grid space-y-10 place-items-center">
	<h1 class="title-large">
		Experience Lightning-Fast Website Hosting with Our Reliable and Secure Services.
	</h1>
	<PromotionToggle {promotions} />
	<ul class="flex flex-col justify-center xl:flex-row space-y-5 xl:space-x-5 xl:space-y-0">
		{#each plans as plan}
			<li class="justify-center">
				<button
					class="relative group overflow-hidden inline-block p-4 rounded-t-lg shadow-xl bg-surface-variant-light/20 dark:bg-surface-variant-dark/20 border-2 border-transparent {activeTabValue ===
					plan.index
						? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark transition-all duration-500 scale-110'
						: 'hover:border-outline-light rounded-xl'}"
					on:click={handleClick(plan.index)}
					type="button"
					aria-controls="profile"
					aria-selected="false"
				>
					<!--Shine Box-->
					<div
						class="absolute top-0 -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"
					/>
					<PlanCard {plan} />
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
