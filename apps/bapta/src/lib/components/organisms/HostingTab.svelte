<script lang="ts">
	import PlanCard from '../molecules/PlanCard.svelte';

	export let plans = [
		{
			label: 'Basic',
			prefix: '$',
			cost: 29,
			note: '/mo',
			subtext: '',
			features: ['Hosting', 'Customer Support'],
			value: 1,
		},
		{
			label: 'Standard',
			prefix: '$',
			cost: 87,
			note: '/mo',
			subtext: '',
			features: ['Hosting', 'Priority Customer Suport', '2 Hours Maintenance Work'],
			value: 2,
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
				'2 Hours Developement Work',
			],
			value: 3,
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
				'8 Hours Developement Work',
			],
			value: 4,
		},
	];

	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="grid space-y-10 place-items-center">
	<h1 class="title-large">
		Experience Lightning-Fast Website Hosting with Our Reliable and Secure Services.
	</h1>
	<ul class="flex flex-col justify-center space-y-5 xl:flex-row xl:space-x-5 xl:space-y-0">
		{#each plans as plan}
			<li class="justify-center flex-1">
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
