<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<div
	class="lg:col-span-2 bg-surface-dark rounded-md items-center overflow-hidden lg:items-start flex flex-col gap-4 py-10 px-6 lg:px-10 w-full drop-shadow-glow-sm-dark border-1 border-primary-dark">
	<div class="bg-background-dark rounded-md p-3">
		<img src={$$props.topIcon} alt="book" class="w-7 h-7 object-center object-cover" />
	</div>
	<div class="flex flex-col gap-2 lg:text-left z-10">
		<h1 class="headline-large">{$$props.title}</h1>
		<p class="body-large max-w-md">
			{$$props.body}
		</p>
	</div>
	<div class="flex flex-col justify-self-end mt-auto gap-2">
		<slot />
	</div>
	<div class="hidden lg:flex z-0 w-3/5 absolute right-0 my-auto">
		<img
			src={$$props.artwork}
			class="object-center object-cover drop-shadow-glow-sm-dark"
			alt="artwork" />
	</div>
</div>
