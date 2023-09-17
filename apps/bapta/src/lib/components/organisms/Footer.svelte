<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/components/atoms/Logo.svelte';

	const elements = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Help',
			href: '/contact',
		},
		{
			name: 'FAQs',
			href: '/contact#faqs',
		},
		{
			name: 'About',
			href: '/about',
		},
		{
			name: 'Privacy Policy',
			href: '/legal/privacy',
		},
	];
</script>

<div
	class="{$$props.class} pt-20 p-6 border-t border-secondary-light/10 dark:border-secondary-dark/10">
	<div class="flex flex-row justify-between items-center md:px-10 lg:px-20 xl:px-40 md:px-auto">
		<Logo />
		<ul
			class="flex flex-wrap items-start space-x-6 body-medium sm:mb-0 text-background-on-light dark:text-background-on-dark">
			{#each elements as { name, href }}
				<li>
					<a
						class="inline mx-auto text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark"
						{href}>
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<hr class="my-6 sm:mx-auto lg:my-8 border-secondary-light/10 dark:border-secondary-dark/10" />
	<span class="block text-sm sm:text-center text-background-on-light dark:text-background-on-dark">
		Unpublished © 2023
		<a
			href="https://futi.no/"
			class="text-tertiary-light dark:text-tertiary-dark hover:underline hover:text-tertiary-light dark:hover:text-tertiary-light">
			Futino™
		</a>
	</span>
</div>
