<script>
	import TransitionElement from '$lib/components/organisms/TransitionElement.svelte';
	import { fade, fly } from 'svelte/transition';
	let unique = false;

	function restart() {
		unique = !unique;
	}
</script>

{#key unique}
	<h1 class:visible={unique} class:invisible={!unique} in:fly={{ x: 100 }} out:fade>
		Hello world!
	</h1>
{/key}

<button on:click={restart}>Restart</button>

<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
<TransitionElement top={100} bottom={100} class=" z-10 ">
	<div class="bg-pink-100 w-full h-64" />
	<div class="bg-pink-200 w-full h-64" />
	<div class="bg-pink-300 w-full h-64" />
</TransitionElement>
<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
