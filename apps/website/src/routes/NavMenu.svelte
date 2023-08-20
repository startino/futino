<script lang="ts">
	export let chapters: { title: string; index: number; href: string; chapterNumber: string }[];
	export let activeTabValue = 0;

	let positionClass: string = 'left: 0px';
	let rowHeight: number = 0;

	let button_widths: number[] = [68, 419, 70421, 0, 0];

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
		activeTabValue = tabValue;
		console.log(positionClass);
	};
</script>

<div
	class="flex bg-surface-light dark:bg-surface-dark border rounded-2xl border-secondary-light/20 dark:border-secondary-dark/20">
	<div class="relative flex flex-row items-center text-sm text-center mx-2 my-1">
		<div
			class="h-12 absolute border-2 rounded-2xl border-primary-light bg-primary-container-dark dark:border-primary-dark transition-all duration-700"
			style="width: {button_widths[activeTabValue] -
				4}px; {positionClass}; height: {rowHeight}px" />

		{#each chapters as chapter, i}
			<!--{activeTabValue == promotion.index
					? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark'
					: -->
			<div
				class="py-1 my-2 md:py-2 rounded-2xl px-8 {activeTabValue == i
					? ''
					: 'outline outline-0 hover:outline-1 outline-white'}"
				bind:clientWidth={button_widths[i]}
				bind:clientHeight={rowHeight}>
				<a on:click={handleClick(chapter.index)} href={chapter.href}>
					<div class="flex flex-col">
						<h1 class="body-small text-left">0{chapter.chapterNumber}</h1>
						<h1 class="body-large text-left font-bold">{chapter.title}</h1>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
