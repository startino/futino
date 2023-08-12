<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '../atoms/Icon.svelte';

	export let question = '';
	export let answer = '';

	export let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button
	on:click={toggle}
	class="bg-surface-dark py-4 flex flex-col px-3 gap-y-5 rounded-md shadow-lg text-left transition-all duration-300 w-full max-w-3xl">
	<div class="flex flex-row items-center w-full">
		<h3 class="font-bold title-medium">
			{question}
		</h3>

		<span
			class=" ml-auto transition-all ease-in duration-200"
			style={isOpen ? 'transform: rotate(180deg)' : ''}>
			<Icon icon="down-caret" />
		</span>
	</div>
	{#if isOpen}
		<div transition:slide={{ duration: 300 }} class="max-w-xl">
			<h1 class=" body-medium">
				{answer}
			</h1>
		</div>
	{/if}
</button>
