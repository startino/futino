<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from './Icon.svelte';

	export let question = '';
	export let answer = '';

	export let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button
	on:click={toggle}
	class="bg-surface border-1 flex w-full max-w-3xl flex-col rounded-md border-primary/50 px-3 py-4 text-left shadow-lg transition-all duration-300"
>
	<div class="flex w-full flex-row items-center justify-between">
		<h3 class="title-medium font-bold">
			{question}
		</h3>

		<span
			class="self-center justify-self-end transition-all duration-200 ease-in"
			style={isOpen ? 'transform: rotate(180deg)' : ''}
		>
			<Icon icon="down-arrow" height="22" width="22" class="text-primary" />
		</span>
	</div>
	{#if isOpen}
		<div transition:slide={{ duration: 300 }} class="w-full max-w-xl">
			<h1 class=" body-medium inline">
				{answer}
			</h1>
		</div>
	{/if}
</button>
