<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean;
	let scrollDirection;
	const options: Options = {
		rootMargin: '-20%',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		console.log('handling change.');

		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div in:fade>
			<slot />
		</div>
	{/if}
</div>
