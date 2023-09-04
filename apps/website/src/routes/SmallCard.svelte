<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<div
	class="lg:col-span-1 bg-surface-dark rounded-md items-center flex flex-col gap-4 py-10 px-8 w-full drop-shadow-glow-sm-dark border-1 border-primary-dark">
	<img src={$$props.topIcon} alt="book" class="w-10 h-10 object-center object-cover" />
	<div class="flex flex-col gap-2 text-center">
		<h1 class="headline-large">{$$props.title}</h1>
		<p class="body-large max-w-md">
			{$$props.body}
		</p>
	</div>
	<slot />
</div>
