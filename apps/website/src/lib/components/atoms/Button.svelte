<script lang="ts">
	export let href: string = '';
</script>

<a
	{href}
	on:click={$$props.onClick}
	class="{$$props.class} flex relative border-2 border-primary-dark hover:translate-y-1 justify-center m-2 tracking-wide items-center py-3 px-6 font-bold rounded-md group hover:text-primary-container-on-dark hover:bg-primary-container-dark/60 transition-all duration-300 hover:scale-[97%] {$$props.secondary
		? ' text-primary-dark bg-surface-dark'
		: 'text-primary-on-dark bg-primary-dark'}">
	<span class="relative z-0">
		<slot />
	</span></a>
