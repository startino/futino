<script lang="ts">
	import { page } from '$app/stores';
	import { emojis } from '$lib/components/atoms/emojis';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
</script>

<!--Hero-->
<section
	class="w-full h-screen shadow-lg shadow-background card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary/40">
	<div class="flex flex-col max-w-2xl mx-auto mt-8 mb-64 text-center items-center space-y-2">
		<h1 class="display-large">
			{emojis[$page.status] ?? emojis[500]}
		</h1>
		<h1 class="display-large">{$page.status} {$page.error?.message}</h1>
		<OutlineButton href="/">
			<h1 class="display-small">Return to Home Page</h1>
		</OutlineButton>
	</div>
</section>
