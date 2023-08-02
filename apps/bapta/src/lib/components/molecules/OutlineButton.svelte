<script lang="ts">
	export let color: string = 'primary-dark';
	export let colorOn: string = 'primary-on-dark';
	export let href: string = '#';
</script>

<a {href} class="{$$props.class} w-fit h-fit">
	<div
		class="inline-flex px-4 py-2 duration-300 border-2 rounded-lg text-primary-dark border-{color} hover:bg-{color} hover:text-{colorOn}">
		<slot />
	</div>
</a>
