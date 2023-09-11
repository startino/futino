<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import { circOut, circInOut } from 'svelte/easing';
	import NavMenu from './NavMenu.svelte';
	import Logo from '../atoms/Logo.svelte';

	let handleExpandClick = () => (isExpanded = !isExpanded);

	const animateIn = {
		delay: 100,
		duration: 700,
		easing: circOut,
	};

	const animateOut = {
		delay: 100,
		duration: 500,
		easing: circOut,
	};

	let isExpanded: boolean = false;
	export let chapterInView: number = 0;

	export let chapters: {
		chapterNumber: number;
		title: string;
		href: string;
	}[] = [];
</script>

<div class="fixed z-40 flex w-full bottom-0 p-6">
	<button
		on:click={handleExpandClick}
		class="flex flex-row justify-items-start md:hidden gap-6 bg-surface-dark border-1 border-primary-dark rounded-md items-center max-w-xs w-full mr-32 px-4 py-3">
		<Logo class={isExpanded ? 'self-end -translate-y-1' : 'self-center'} />

		<div class="flex flex-col gap-2 transition-all duration-1000 text-left w-full">
			{#if isExpanded}
				{#each chapters as { chapterNumber, title, href }, i}
					<div
						class="pl-1 {i + 1 != chapters.length ? 'border-b border-outline-dark/50 pb-2 ' : ''}">
						<a on:click={() => (chapterInView = chapterNumber)} {href}>
							{#if chapterNumber === chapterInView}
								<!--The Selected Chapter-->
								<h1 class="body-small font-extrabold text-tertiary-dark">0{chapterNumber}</h1>
								<h1 class="body-large font-bold text-primary-dark">{title}</h1>
							{:else}
								<!--Non-selected Chapters-->
								<h1 class="body-small font-extrabold text-tertiary-dark">0{chapterNumber}</h1>
								<h1 class="body-large">{title}</h1>
							{/if}
						</a>
					</div>
				{/each}
			{:else}
				<!--Selected chapter when not collapsed-->
				<div class="flex flex-col pl-1">
					<h1 class="title-small text-tertiary-dark">
						0{chapters[chapterInView].chapterNumber}
					</h1>
					<h1 class="title-medium font-bold">{chapters[chapterInView].title}</h1>
				</div>
			{/if}
		</div>
	</button>
	<!--Chapter Menu for md+-->
	<div class="hidden md:flex max-w-7xl mx-auto rounded-xl">
		<div class="flex flex-row gap-5">
			<NavMenu bind:currentHighlightedChapter={chapterInView} {chapters} />
		</div>
	</div>
</div>
