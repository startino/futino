<script lang="ts">
	import AccommodationOption from './AccommodationOption.svelte';

	export let promotions: { label: string; index: number; for: string }[];
	export let activeTabValue = 0;

	let positionClass: string = 'left: 0px';

	let button_widths: number[] = [68, 70421];

	const handleClick = (tabValue: number) => () => {
		console.log(tabValue);
		let left = 0;
		button_widths.forEach((value, index) => {
			console.log('Loop');
			if (index < tabValue) {
				left += value;
				console.log('Adding to left: ', left);
			}
		});
		let newString = 'left: ' + left.toString() + 'px';
		positionClass = 'left: ' + left.toString() + 'px';
		console.log(positionClass);
	};
</script>

<div
	class="flex flex-col max-w-xl m-2 w-fit border rounded-2xl border-secondary-light/20 dark:border-secondary-dark/20">
	<div class="relative flex flex-row px-2 py-4 items-center text-center">
		<div
			class="h-16 md:h-24 absolute border-2 mx-2 rounded-xl border-primary-light dark:border-primary-dark transition-all duration-500 ease-in-out"
			style="width: {button_widths[activeTabValue] - 4}px; {positionClass};" />

		{#each promotions as promotion, i}
			<!--{activeTabValue == promotion.index
					? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark'
					: -->
			<div
				class="py-2 rounded-xl transition-all duration-75 px-5 {activeTabValue == i
					? ''
					: 'outline outline-0 hover:outline-2 outline-white'}"
				bind:clientWidth={button_widths[i]}>
				<button on:click={handleClick(promotion.index)}>
					<AccommodationOption
						name="billing"
						for={promotion.for}
						text={promotion.label}
						value={promotion.index}
						bind:activeTabValue />
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
