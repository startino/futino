<script lang="ts">
	import Card from '../atoms/Card.svelte';
	export let name: string = 'no name provided';
	export let body: string = 'no body provided';
	export let href: string = 'no link';
	export let img: string = 'no img';
</script>

<Card class={$$props.class} {href} border="border" size="max-w-none h-full w-full" padding="px-4">
	<figure class="m-0 rounded-md sm:m-0">
		<blockquote class="not-prose p-6">
			<p class="prose-inverse m-0 sm:m-0">"{body}"</p>
		</blockquote>
		<figcaption
			class="mt-auto flex flex-wrap items-center gap-x-4 gap-y-4 justify-self-end px-6 py-4 sm:flex-nowrap"
		>
			<img class="not-prose h-10 w-10 flex-none rounded-full" src={img} alt="" />
			<div class="flex-auto">
				<div class="font-semibold">
					<h3 class="m-0 sm:m-0">{name}</h3>
				</div>
			</div>
		</figcaption>
	</figure>
</Card>
