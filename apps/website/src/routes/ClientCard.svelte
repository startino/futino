<script>
	import Button from '$lib/components/atoms/Button.svelte';
</script>

<div
	class="{$$props.class} group grid w-full max-w-lg grid-cols-1 items-center gap-4 rounded-md border-1 border-primary bg-surface px-4 py-4 drop-shadow-glow-sm md:max-w-7xl md:grid-cols-2 md:px-8 md:py-10 lg:items-start lg:px-10"
>
	<div class="z-10 flex h-full flex-col gap-2 text-left lg:text-left">
		<h1 class="display-medium">{$$props.name}</h1>
		<h3 class=" max-w-sm">
			{$$props.body}
		</h3>
		<ul class="headline-medium flex flex-row flex-wrap place-items-center items-center gap-1 py-4">
			<li class="title-medium">Services:</li>
			<br class="w-96 sm:hidden" />
			{#each $$props.services as service, i}
				<li class="title-medium my-auto font-bold">
					{service}
					{#if i !== $$props.services.length - 1},{/if}
				</li>
			{/each}
		</ul>
		<Button secondary class="mt-auto justify-self-end" href={$$props.href} target="_blank"
			>Check it out!</Button
		>
	</div>
	<a
		href={$$props.href}
		class="flex flex-row flex-nowrap {$$props.bgColor} not-prose z-0 mx-auto h-full w-full items-center justify-center gap-2 rounded-xl p-2 py-6 sm:p-6 md:gap-3 md:p-6"
	>
		<img
			class="not-prose w-[230px] shrink basis-2 object-contain sm:w-[350px] md:w-[250px] lg:w-[300px] xl:w-[400px] 2xl:w-[425px]"
			src={$$props.desktop_src}
			alt="{$$props.company} desktop mockup"
		/>

		<img
			class="not-prose w-[53px] object-contain sm:w-[100px] md:w-[60px] lg:w-[75px] xl:w-[100px]"
			src={$$props.phone_src}
			alt="{$$props.company} phone mockup"
		/>
	</a>
</div>
