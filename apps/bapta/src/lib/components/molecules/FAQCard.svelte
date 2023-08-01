<script lang="ts">
	import { slide } from 'svelte/transition';

	export let question = '';
	export let answer = '';

	export let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button
	on:click={toggle}
	aria-expanded={isOpen}
	class="w-full min-h-full p-6 px-4 mb-8 rounded-md shadow-lg bg-surface-dark h-fit">
	<div class="flex place-items-center">
		<h3 class="p-6 font-bold text-left title-large">
			{question}
		</h3>

		<span class="p-10 ml-auto">
			<svg
				class=""
				width="20"
				height="20"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
		</span>
	</div>
	{#if isOpen}
		<div transition:slide={{ duration: 300 }}>
			<h1 class="p-6 text-left body-large text-surface-on-dark pr-24">
				{answer}
			</h1>
		</div>
	{/if}
</button>

<style>
	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(180deg);
	}
</style>
