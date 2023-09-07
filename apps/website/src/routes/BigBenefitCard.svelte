<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<div
	class="lg:col-span-2 bg-surface-dark rounded-md items-center overflow-hidden lg:items-start flex flex-col gap-4 py-10 px-6 pb-0 lg:pb-10 lg:px-10 w-full drop-shadow-glow-sm-dark border-1 border-primary-dark">
	<div class="bg-background-dark rounded-md p-3">
		<img src={$$props.topIcon} alt="book" class="w-7 h-7 object-center object-cover" />
	</div>
	<div class="flex flex-col gap-2 lg:text-left z-10">
		<h1 class="headline-large">{$$props.title}</h1>
		<p class="body-large max-w-sm">
			{$$props.body}
		</p>
	</div>
	<div class="flex flex-col justify-self-end mt-auto gap-2 z-10 lg:pb-4">
		<slot />
	</div>
	<div
		class="flex h-full z-0 aspect-square lg:w-3/5 -mb-5 lg:h-fit lg:absolute mx-auto lg:-right-5 lg:translate-x-0 lg:mx-0 lg:translate-y-0 lg:-bottom-12 lg:my-auto">
		<img src={$$props.artwork} class="object-center object-contain" alt="artwork" />
	</div>
</div>
