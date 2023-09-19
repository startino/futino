<script lang="ts">
	import InViewSlide from '$lib/components/organisms/InViewSlide.svelte';
	import InviewTransition from '$lib/components/organisms/InViewSlide.svelte';
	import TransitionElement, {
		type TransitionOptions,
		Animation,
	} from '$lib/components/organisms/Inview.svelte';

	import { fade, fly, slide } from 'svelte/transition';

	let innView = false;

	const varias = {
		x: 1000,
		y: -1000,
	};

	const animationPreset: TransitionOptions = {
		once: false,

		delay: 100,
		duration: 1000,
		fly: {
			x: 200,
			y: 0,
		},
	};
</script>

<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
<TransitionElement bottom={-100} class="">
	<div class="bg-pink-100 w-64 h-64 text-black">This is some text to explain.</div>
</TransitionElement>
<div class="h-screen w-full bg-green-900" />

<div class="h-screen w-full bg-green-900" />
<div class="h-64">
	<InViewSlide>
		<div class="bg-orange-500 w-full h-64 py-12 transition-all overflow-hidden" />
	</InViewSlide>
</div>
<div class="h-screen w-full bg-gradient-to-tr from-white to-black" />
<div class="h-screen w-full bg-green-900" />
<div class="h-screen w-full bg-green-900" />
