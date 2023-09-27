<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<div class="text-center">
	<h1 class="px-1 py-1  title-medium">{$$props.label}</h1>
	<div
		class="flex flex-row justify-between p-2 mx-2 my-auto rounded-lg  md:mx-1">
		<button class="flex rounded-lg w-fit aspect-square bg-surface">
			<Icon
				class="p-2 mx-auto my-auto fill-primary"
				icon="minus"
				height="22"
				width="22"
				fillColor="applyTheColorGivenInTheAboveClass ^^ :)" />
		</button>
		<div class="mx-auto my-auto rounded-lg bg-surface outline-2 outline outline-primary">
			<h1 class="px-6 title-large text-primary">1</h1>
		</div>

		<button class="flex rounded-lg w-fit aspect-square bg-surface">
			<Icon
				class="p-2 mx-auto my-auto fill-primary"
				icon="plus"
				height="22"
				width="22"
				fillColor="applyTheColorGivenInTheAboveClass ^^ :)" />
		</button>
	</div>
</div>
