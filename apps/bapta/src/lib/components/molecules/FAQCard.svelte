<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '../atoms/Icon.svelte';

	export let question = '';
	export let answer = '';

	export let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button on:click={toggle} class="card h-fit gap-y-5 rounded-md shadow-lg text-left">
	<div class="flex flex-row items-center w-full">
		<h3 class="font-bold title-large">
			{question}
		</h3>

		<span class="p-10 ml-auto">
			<svg
				class="transition-transform duration-200 ease-in"
				style={isOpen ? 'transform: rotate(180deg)' : ''}
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
		<div transition:slide={{ duration: 300 }} class="">
			<h1 class=" body-large">
				{answer}
			</h1>
		</div>
	{/if}
</button>
