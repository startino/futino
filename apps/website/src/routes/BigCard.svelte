<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<div
	class="lg:col-span-2 bg-surface-dark rounded-md items-center lg:items-start flex flex-col gap-4 py-10 px-6 lg:px-10 w-full drop-shadow-glow-sm-dark border-1 border-primary-dark">
	<img src={$$props.topIcon} alt="book" class="w-10 h-10 object-center object-cover" />
	<div class="flex flex-col gap-2 lg:text-left">
		<h1 class="headline-large">{$$props.title}</h1>
		<p class="body-large max-w-md">
			{$$props.body}
		</p>
	</div>
	<div class="flex flex-col justify-self-end mt-auto gap-2">
		<slot />
	</div>
</div>
