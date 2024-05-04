<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ArrowDown } from 'lucide-svelte';

	export let question = '';
	export let answer = '';

	export let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button
	on:click={toggle}
	class="border-1 flex max-w-xs flex-col text-wrap rounded-md border-primary/50 bg-surface px-3 py-5 text-left shadow-lg transition-all duration-300 sm:max-w-md md:max-w-md lg:max-w-xl xl:max-w-3xl"
>
	<div class="flex w-full flex-row items-center justify-between gap-x-6">
		<h3 class="text-lg font-bold">
			{question}
		</h3>

		<span
			class="self-center justify-self-end transition-all duration-200 ease-in"
			style={isOpen ? 'transform: rotate(180deg)' : ''}
		>
			<ArrowDown size="24" class="text-primary" />
		</span>
	</div>
	{#if isOpen}
		<div transition:slide={{ duration: 300 }} class="mt-3 w-full max-w-xl">
			<h1 class=" body-medium inline">
				{answer}
			</h1>
		</div>
	{/if}
</button>
