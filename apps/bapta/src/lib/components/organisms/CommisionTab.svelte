<script lang="ts">
	import PlanCard from '../molecules/PlanCard.svelte';

	export let plans = [
		{
			label: 'Commision',
			prefix: '$',
			cost: 45,
			note: '/hour',
			subtext: '',
			features: [],
			value: 1,
		},
	];

	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="grid space-y-10 place-items-center">
	<h1 class="title-large">Need some work done? We'll do it.</h1>
	<ul class="flex flex-col space-y-5 xl:flex-row xl:space-x-5 xl:space-y-0">
		{#each plans as plan}
			<li>
				<button
					class="inline-block p-4 rounded-t-lg shadow-xl bg-surface-variant-light/20 dark:bg-surface-variant-dark/20 {activeTabValue ===
					plan.value
						? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark transition-all duration-500 scale-110'
						: 'hover:border-2 rounded-xl'}"
					on:click={handleClick(plan.value)}
					type="button">
					<PlanCard {plan} />
				</button>
			</li>
		{/each}
	</ul>
</div>
