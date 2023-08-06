<script lang="ts">
	import TransitionElement, {
		type TransitionOptions,
		Animation,
	} from '$lib/components/organisms/TransitionElement.svelte';

	import { fade, fly } from 'svelte/transition';

	const varias = {
		x: 1000,
		y: -1000,
	};

	const animationPreset: TransitionOptions = {
		once: false,

		delay: 100,
		duration: 1000,
		slide: {
			x: 200,
			y: 0,
		},
	};
</script>

<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
<TransitionElement preset={animationPreset} class="w-fit  z-10 flex overflow-hidden">
	<div class="bg-pink-100 w-64 h-64" />
</TransitionElement>
<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
