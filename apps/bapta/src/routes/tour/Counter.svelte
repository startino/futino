<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<div class="text-center">
	<h1 class="px-1 py-1 font-light title-medium">{$$props.label}</h1>
	<div
		class="flex flex-row justify-between p-2 mx-2 my-auto rounded-lg bg-primary-light/100 md:mx-1">
		<button class="flex rounded-lg w-fit aspect-square bg-surface-dark">
			<Icon
				class="p-2 mx-auto my-auto fill-primary-dark"
				icon="minus"
				height="22"
				width="22"
				fillColor="applyTheColorGivenInTheAboveClass ^^ :)" />
		</button>
		<div class="mx-auto my-auto rounded-lg bg-surface-dark outline-2 outline outline-primary-dark">
			<h1 class="px-6 title-large text-primary-dark">1</h1>
		</div>

		<button class="flex rounded-lg w-fit aspect-square bg-surface-dark">
			<Icon
				class="p-2 mx-auto my-auto fill-primary-dark"
				icon="plus"
				height="22"
				width="22"
				fillColor="applyTheColorGivenInTheAboveClass ^^ :)" />
		</button>
	</div>
</div>
