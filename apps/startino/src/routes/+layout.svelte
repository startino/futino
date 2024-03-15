<script lang="ts">
	import '$styling';
</script>

<main
	class="relative min-h-screen w-screen overflow-hidden bg-background text-center text-background-on"
>
	<!-- The background pattern -->
	<div
		class="pointer-events-none absolute h-[50000px] w-full bg-inherit bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:150px_150px]"
	></div>

	<!-- The content -->
	<arcitle class="relative flex min-h-screen w-screen flex-col items-center justify-center gap-24">
		<slot />
	</arcitle>
</main>
