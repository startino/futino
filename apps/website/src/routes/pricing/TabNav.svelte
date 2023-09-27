<script lang="ts">
	import Tooltip from '$lib/components/organisms/tooltip/Tooltip.svelte';
	import Tab from './Tab.svelte';

	export let tabs: any[] = [];
	export let activeTabIndex = 0;

	const handleClick = (tabIndex: number) => () => (activeTabIndex = tabIndex);
</script>

<div class="mb-4 border-b border-secondary/20">
	<ul
		class="flex flex-row w-full gap-4 md:gap-6 items-center font-medium text-center justify-items-center">
		{#each tabs as tab}
			<li
				class={activeTabIndex === tab.index
					? 'active border-b-2  border-primary'
					: 'hover:border-b-2 mx-2'}>
				<button
					class="inline-block py-4 rounded-t-lg"
					on:click={handleClick(tab.index)}
					type="button">
					<div class="flex flex-row items-center">
						<h1 class="title-small md:headline-medium">{tab.label}</h1>
						<!--
							<Tooltip
							direction="top"
							content="This explains the plan"
							class="w-4 h-6 m-3 rounded-full  bg-surface-variant"
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
