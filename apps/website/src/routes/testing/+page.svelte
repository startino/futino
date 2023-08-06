<script>
	import TransitionElement, { Animation } from '$lib/components/organisms/TransitionElement.svelte';

	import { fade, fly } from 'svelte/transition';

	const varias = {
		x: 100,
		y: 300,
	};
</script>

<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
<TransitionElement animation={Animation.SlideIn} {varias} class="w-fit  z-10 flex overflow-hidden">
	<div class="bg-pink-100 w-64 mx-auto h-64" />
</TransitionElement>
<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
