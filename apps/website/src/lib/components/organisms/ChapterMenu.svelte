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

<div class="fixed z-40 flex w-fit left-1/2 -translate-x-1/2 bottom-0 p-6">
	<button
		on:click={handleExpandClick}
		class="flex flex-row md:hidden gap-6 max-w-xs bg-surface-light dark:bg-surface-dark rounded-xl p-4 text-left items-center w-52">
		<Logo class="self-end" />

		<div class="flex flex-col transition-all duration-1000">
			<ul class="divide-y-1 divide-black/10 dark:divide-white/10 space-y-4">
				{#if isExpanded}
					{#each chapters as { chapterNumber, title, href }}
						<li class="">
							<a on:click={() => (chapterInView = chapterNumber)} href="#{href}">
								{#if chapterNumber === chapterInView}
									<!--The Selected Chapter-->
									<h1 class="body-small text-left text-primary-light dark:text-primary-dark">
										Chapter 0{chapterNumber}
									</h1>
									<h1 class="body-large text-left font-bold">{title}</h1>
								{:else}
									<!--Non-selected Chapters-->
									<h1 class="body-small text-left">Chapter 0{chapterNumber}</h1>
									<h1 class="body-large text-left font-bold">{title}</h1>
								{/if}
							</a>
						</li>
					{/each}
				{:else}
					<!--Selected chapter when not collapsed-->
					<div class="flex flex-col">
						<h1 class="title-small text-primary-light dark:text-primary-dark">
							Chapter 0{chapters[chapterInView].chapterNumber}
						</h1>
						<h1 class="title-medium font-bold">{chapters[chapterInView].title}</h1>
					</div>
				{/if}
			</ul>
		</div>
	</button>
	<!--Chapter Menu for md+-->
	<div class="hidden md:flex max-w-7xl mx-auto rounded-xl">
		<div class="flex flex-row gap-5">
			<NavMenu bind:currentHighlightedChapter={chapterInView} {chapters} />
		</div>
	</div>
</div>
