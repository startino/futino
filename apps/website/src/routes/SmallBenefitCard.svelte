<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<div
	class="lg:col-span-1 bg-surface-dark rounded-md overflow-hidden items-center flex flex-col gap-4 py-10 px-8 w-full drop-shadow-glow-sm-dark border-1 border-primary-dark">
	<div class="bg-background-dark rounded-md p-3">
		<img src={$$props.topIcon} alt="book" class="w-7 h-7 object-center object-cover" />
	</div>
	<div class="flex flex-col gap-2 text-center h-full z-10">
		<h1 class="headline-large">{$$props.title}</h1>
		<p class="body-large max-w-md">
			<slot />
		</p>
	</div>
	<div class="hidden lg:flex z-0 w-full absolute left-1/2 -translate-x-1/2 my-auto">
		<img
			src={$$props.artwork}
			class="object-center object-cover drop-shadow-glow-sm-dark"
			alt="artwork" />
	</div>
</div>
