<script lang="ts">
	import Tooltip from '$lib/components/organisms/tooltip/Tooltip.svelte';
	import Tab from './Tab.svelte';

	export let tabs: any[] = [];
	export let activeTabIndex = 0;

	const handleClick = (tabIndex: number) => () => (activeTabIndex = tabIndex);
</script>

<div class="mb-4 border-b border-secondary-light/20 dark:border-secondary-dark/20">
	<ul
		class="flex flex-wrap -mb-px text-sm font-medium text-center"
		id="myTab"
		data-tabs-toggle="#myTabContent"
		role="tablist">
		{#each tabs as tab}
			<li
				class={activeTabIndex === tab.index
					? 'active border-b-2 border-primary-light dark:border-primary-dark'
					: 'hover:border-b-2 mx-2'}>
				<button
					class="inline-block p-4 rounded-t-lg"
					on:click={handleClick(tab.index)}
					type="button"
					role="tab"
					aria-controls="profile"
					aria-selected="false">
					<div class="flex flex-row items-center">
						<h1 class="headline-medium">{tab.label}</h1>
						<!--
							<Tooltip
							direction="top"
							content="This explains the plan"
							class="m-3 w-4 h-6 bg-surface-variant-light dark:bg-surface-variant-dark rounded-full"
						/>
						-->
					</div></button>
			</li>
		{/each}
	</ul>
</div>

{#key activeTabIndex}
	<Tab tab={tabs[activeTabIndex]} />
{/key}
