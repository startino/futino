<script>
	import TransitionElement from '$lib/components/organisms/TransitionElement.svelte';
	import { fade, fly } from 'svelte/transition';
	let unique = false;
</script>

<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
<TransitionElement top={100} bottom={100} class="w-fit  z-10 flex overflow-hidden">
	<div class="bg-pink-100 w-64 mx-auto h-64" />
</TransitionElement>
<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
