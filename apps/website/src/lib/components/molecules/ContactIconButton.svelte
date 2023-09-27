<script lang="ts">
	export let img: string;
	export let href: string;
	export let label: string;
</script>

<a
	class="{$$props.class} flex w-fit h-fit flex-col md:flex-row gap-4 group items-center overflow-visible text-surface-on"
	{href}>
	<!--Phone number-->
	<div
		class="{$$props.imgClass} aspect-square col-span-1 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-visible group-hover:scale-105 self-center transition-all">
		<img src={img} alt="" class="h-full w-full object-center object-cover" />
	</div>

	<div class=" items-center justify-self-start hidden">
		<h1 class="pl-2 headline-medium">{label}</h1>
	</div>
</a>
