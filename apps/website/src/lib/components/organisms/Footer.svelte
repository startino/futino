<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/components/atoms/Logo.svelte';
</script>

<footer
	class="{$$props.class} pt-20 p-6 border-t border-secondary-light/10 dark:border-secondary-dark/10"
>
	<div
		class="sm:flex sm:justify-between sm:items-center md:px-10 lg:px-20 xl:px-40 px-auto md:px-auto"
	>
		<Logo />
		<ul
			class="flex flex-wrap items-center mb-6 space-x-6 text-sm sm:mb-0 text-background-on-light dark:text-background-on-dark"
		>
			<li>
				<a
					class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark"
					href={base}
				>
					Privacy Policy
				</a>
			</li>
			<li>
				<a
					class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark"
					href={base}
				>
					Licensing
				</a>
			</li>
			<li>
				<a
					class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark"
					href={base}
				>
					Pricing
				</a>
			</li>
		</ul>
	</div>
	<hr class="my-6 sm:mx-auto lg:my-8 border-secondary-light/10 dark:border-secondary-dark/10" />
	<span class="block text-sm sm:text-center text-background-on-light dark:text-background-on-dark">
		Unpublished © 2023
		<a
			href="{base}/"
			class="text-tertiary-light dark:text-tertiary-dark hover:underline hover:text-tertiary-light dark:hover:text-tertiary-light"
		>
			Futino™
		</a>
	</span>
</footer>
