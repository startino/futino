<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	// Targeting video element
	let clip: HTMLVideoElement; // Was getting errors without stating its type
	let card: HTMLDivElement;

	onMount(() => {
		/* Applying mouseover event on video clip 
        and then we call play() function to play 
        the video when the mouse is over the video */
		card.addEventListener('mouseover', function (e) {
			console.log('mouseover');
			clip.play();
		});

		card.addEventListener('mouseout', function (e) {
			//clip.playbackRate = -1;
		});
	});
</script>

<div
	bind:this={card}
	class="bg-surface-variant-light/20 shadow-lg dark:bg-surface-variant-dark/20 rounded-lg h-fit w-72 md:w-80 xl:w-110 group overflow-hidden flex flex-col flex-grow hover:flex-grow-[10] transition-all duration-1000"
>
	<div
		class="
	flex flex-col items-center p-6"
	>
		<img src="favicon.png" alt="Face" class="h-24 w-24 rounded-full" />
		<h1 class="headline-medium pt-2">{$$props.name}</h1>
		<h2 class="headline-small pb-2">{$$props.company}</h2>
		<h2 class="body-medium">
			{$$props.body}
		</h2>
	</div>
	<!--Webite video-->
	<!--Cant seem to align it to the bottom...-->
	<video
		bind:this={clip}
		muted
		id="clip"
		preload="auto"
		class="w-fit transition-transform aspect-[16/9] self-end"
	>
		<source
			title={$$props.company}
			type="video/webm"
			src="./client_websites/ggsoccer_whole_dark.webm"
		/>
		Your Browser does not support our video types
		<track kind="captions" />
	</video>
</div>
