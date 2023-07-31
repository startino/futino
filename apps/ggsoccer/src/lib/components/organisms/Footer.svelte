<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Icon from '../atoms/Icon.svelte';
</script>

<footer
	class="{$$props.class} pt-12 p-6 border-t border-secondary-light/10 dark:border-secondary-dark/10">
	<div
		class="sm:flex sm:justify-between sm:items-center md:px-10 lg:px-20 xl:px-40 px-auto md:px-auto">
		<Logo />
		<ul
			class="grid grid-cols-4 place-items-center mb-6 space-x-6 text-sm sm:mb-0 text-background-on-light dark:text-background-on-dark">
			<li>
				<a
					class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark mx-auto"
					href="https://www.instagram.com/ggsoccercamps/">
					<Icon icon="instagram" height="38" width="38" />
				</a>
			</li>
			<li>
				<a
					class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark mx-auto"
					href="https://www.facebook.com/goodgamesoccercamps">
					<Icon icon="facebook" height="42" width="42" fillColor="DarkSlateBlue" />
				</a>
			</li>
			<!--<li>
				<a
					class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark mx-auto"
					href=""
				>
					<Icon icon="phone" height="38" width="38" fillColor="DarkSlateBlue" />
				</a>
			</li>
			<li>
				<a
					class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark mx-auto"
					href=""
				>
					<Icon icon="email" height="42" width="42" fillColor="FireBrick" />
				</a>
			</li>-->
		</ul>
	</div>
	<hr class="my-6 sm:mx-auto lg:my-8 border-secondary-light/10 dark:border-secondary-dark/10" />
	<span class="block text-sm sm:text-center text-background-on-light dark:text-background-on-dark">
		©2023. All Rights Reserved.
		<a
			href="https://futi.no/"
			class="text-tertiary-light dark:text-tertiary-dark hover:underline hover:text-tertiary-light dark:hover:text-tertiary-light">
			Futino™
		</a>
	</span>
</footer>
