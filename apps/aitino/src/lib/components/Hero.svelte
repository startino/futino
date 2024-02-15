<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import FormItem from './FormItem.svelte';

</script>

<div class="relative mx-auto flex w-full flex-col gap-y-12 text-white lg:gap-y-4">
	
	<h1 class="text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
		Join the Future of AI<br /> with Exclusive Early Access to
		<span class="border-none text-primary">Aitino</span>
	</h1>

	<p class="mx-auto max-w-3xl text-center text-lg mt-2">
		<span class="text-primary">Aitino </span> is a SaaS platform powered by multi-agent LLMs designed
		to help entrepreneurs and businesses automate tasks and solve complex problems.
	</p>

	<FormItem class="mt-10"/>

	
</div>
