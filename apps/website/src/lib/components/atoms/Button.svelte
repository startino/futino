<script lang="ts">
	export let href: string = '';
</script>

<a
	{href}
	on:click={$$props.onClick}
	class="{$$props.class} flex relative border-2 border-primary hover:translate-y-1 justify-center m-2 tracking-wide items-center py-3 px-6 font-bold rounded-md group hover:text-primary-container-on hover:bg-primary-container/60 transition-all duration-300 hover:scale-[97%] {$$props.secondary
		? ' text-primary bg-surface'
		: 'text-primary-on bg-primary'}">
	<span class="relative z-0 uppercase">
		<slot />
	</span></a>
