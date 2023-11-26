<script lang="ts">
	export let href: string = '#';
</script>

<a {href} class="{$$props.class} group w-fit h-fit">
	<div
		class="inline-flex px-4 py-2 duration-300 border-2 rounded-lg text-primary border-primary group-hover:bg-primary group-hover:text-primary-on">
		<slot />
	</div>
</a>
