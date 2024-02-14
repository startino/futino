<script>
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
</script>

<div
	class="absolute inset-0 h-full w-full bg-inherit bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:150px_150px]"
></div>

<Toaster />

<div class="container bg-transparent flex flex-col font-roboto w-full justify-center">
	<slot />
</div>
