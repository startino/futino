<script lang="ts">
	import ThemeButton from '../atoms/ThemeButton.svelte';
	import Logo from '../atoms/Logo.svelte';
	import { onMount } from 'svelte';

	export let elements: { name: string; href: string }[] = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: '/',
		},
	];
</script>

<footer class="rounded-lg shadow m-4 dark:bg-gray-800">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>2023<a href="https://futi.no/" class="">Futino</a>. All Rights Reserved.
		</span>
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
			{#each elements as { name, href }}
				<li>
					<a {href} class="mr-4 hover:underline md:mr-6">{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
