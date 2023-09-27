<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte';

	export let chapters: { title: string; href: string; chapterNumber: number }[];
	export let currentHighlightedChapter = 0;

	let positionClass: string = 'left: 0px';
	let rowHeight: number = 64;

	// Offset from gap. Needs to be same as gap-x of flex-row. Unit is px.
	let rowGap: number = 4;

	// Widths of individual toggle elements (includes padding of element)
	let button_widths: number[] = [0, 0, 0, 0, 0];

	function handleClick(tabValue: number) {
		let left = 0;
		button_widths.forEach((value, index) => {
			if (index < tabValue) {
				left += value + rowGap;
			}
		});

		let newString = 'left: ' + left.toString() + 'px';
		positionClass = 'left: ' + left.toString() + 'px';
		currentHighlightedChapter = tabValue;
	}

	$: {
		handleClick(currentHighlightedChapter);
	}
</script>

<div class="flex bg-surface border rounded-2xl border-secondary/40">
	<div class="relative flex flex-row gap-1 items-center text-center mx-1 my-1">
		<div
			class="h-12 absolute border-2 rounded-2xl bg-primary-container/30 border-primary transition-all delay-75 ease-in-out duration-500"
			style="width: {button_widths[
				currentHighlightedChapter
			]}px; {positionClass}; height: {rowHeight}px" />

		{#each chapters as { chapterNumber, title, href }, i}
			<!--{activeTabValue == promotion.index
					? 'active border-2 rounded-xl border-primary'
					: -->
			<div
				class="py-1 my-2 md:py-2 rounded-2xl px-8 {currentHighlightedChapter == i
					? ''
					: 'outline outline-0 hover:outline-1 outline-white'}"
				bind:clientWidth={button_widths[i]}
				bind:clientHeight={rowHeight}>
				<a on:click={() => handleClick(chapterNumber)} {href} class="">
					<div class="flex flex-col">
						{#if chapterNumber == 0}
							<div class="h-full w-fit">
								<Icon icon="home" class="text-primary h-full" height="24" width="24" />
							</div>
						{:else}
							<h1 class="body-small font-extrabold text-tertiary">0{chapterNumber}</h1>
							<h1 class="body-large font-bold">{title}</h1>
						{/if}
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
