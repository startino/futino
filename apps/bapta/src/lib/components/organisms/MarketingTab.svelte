<script lang="ts">
	import PlanCard from '../molecules/PlanCard.svelte';

	export let plans = [
		{
			label: 'Basic',
			prefix: '$',
			cost: 14,
			note: '/mo',
			subtext: '+ $0.0074/impression',
			features: ['Campaign Setup', 'Social Media Marketing'],
			value: 1,
		},
		{
			label: 'Standard',
			prefix: '$',
			cost: 28,
			note: '/mo',
			subtext: '+ $0.005/impression',
			features: [
				'Campaign Setup',
				'Social Media Marketing',
				'Search Engine Optimization',
				'Regular Meetings: Yearly',
			],
			value: 2,
		},
		{
			label: 'Business',
			prefix: '$',
			cost: 85,
			note: '/mo',
			subtext: '+ $0.0035/impression',
			features: [
				'Campaign Setup',
				'Social Media Marketing',
				'Search Engine Optimization',
				'Regular Meetings: Biannually',
				'Consulting & Strategy Development',
			],
			value: 3,
		},
		{
			label: 'Enterprise',
			prefix: '$',
			cost: 257,
			note: '/mo',
			subtext: '+ $0.0026/impression',
			features: [
				'Campaign Setup',
				'Social Media Marketing',
				'Search Engine Optimization',
				'Regular Meetings: Quarterly',
				'Consulting & Strategy Development',
				'Social Media Management',
			],
			value: 4,
		},
	];

	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="grid space-y-10 place-items-center">
	<h1 class="title-large">Maximize Your Reach with Tailored Digital Marketing.</h1>
	<ul class="flex flex-col space-y-5 xl:flex-row xl:space-x-5 xl:space-y-0">
		{#each plans as plan}
			<li>
				<button
					class="inline-block p-4 rounded-t-lg shadow-xl bg-surface-variant-light/20 dark:bg-surface-variant-dark/20 {activeTabValue ===
					plan.value
						? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark transition-all duration-500 scale-110'
						: 'hover:border-2 rounded-xl'}"
					on:click={handleClick(plan.value)}
					type="button"
					aria-controls="profile"
					aria-selected="false">
					<PlanCard {plan} />
				</button>
			</li>
		{/each}
	</ul>
</div>
