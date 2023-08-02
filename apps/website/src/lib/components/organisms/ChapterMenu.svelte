<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import { circOut, circInOut } from 'svelte/easing';

	let handleExpandClick = () => (isExpanded = !isExpanded);

	const animateIn = {
		delay: 100,
		duration: 700,
		easing: circOut
	};

	const animateOut = {
		delay: 100,
		duration: 500,
		easing: circOut
	};

	let isExpanded: boolean = false;
	let selectedChapter = 1;

	export let chapters: any; // Was erroring if I didn't give type. is it somethingwrong with my vscode?
</script>

<div class="fixed z-40 flex-none w-full bottom-0 p-6">
	<button
		on:click={handleExpandClick}
		class="flex flex-row gap-6 max-w-xs bg-surface-variant-light dark:bg-black/70 rounded-xl p-4 text-left items-center w-52"
	>
		<div class="h-10 w-8 bg-white/50 self-end divide-black/30 dark:divide-white" />

		<div class="flex flex-col transition-all duration-1000">
			<ul class="divide-y-1 divide-black/10 dark:divide-white/10 space-y-4">
				{#if isExpanded}
					{#each chapters as { chapterNumber, title, id }}
						<li
							class=""
							in:slide={{
								delay: chapterNumber * 70 + animateIn.delay,
								duration: 500,
								easing: circOut
							}}
							out:slide={{
								delay: chapterNumber * 70 + animateOut.delay,
								duration: 300,
								easing: circOut
							}}
						>
							<a on:click={() => (selectedChapter = chapterNumber)} href="#{id}">
								{#if chapterNumber === selectedChapter}
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
							Chapter 0{chapters[selectedChapter - 1].chapterNumber}
						</h1>
						<h1 class="title-medium font-bold">{chapters[selectedChapter - 1].title}</h1>
					</div>
				{/if}
			</ul>
		</div>
	</button>
</div>
