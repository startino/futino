<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';

	export const elements = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Pricing',
			href: '/pricing',
		},
		{
			name: 'Terms of Service',
			href: '/legal/terms',
		},
		{
			name: 'Privacy Policy',
			href: '/legal/privacy',
		},
	];
</script>

<footer
	id="header"
	class="{$$props.class} py-16 mb-32 border-b text-primary border-secondary/10 top-0 z-40 w-full transition-all duration-400">
	<div
		class="flex flex-col sm:flex-row gap-y-3 relative items-center px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto">
		<a class="flex w-fit mr-auto gap-3" href="/">
			<Logo />
		</a>
		<div class="flex items-center mr-auto sm:mr-0 sm:ml-auto gap-8 title-medium ">
			<nav class="flex gap-6 lg:gap-8 pb-0.5">
				{#each elements as element, i}
					<a class="hhover:text-tertiary" href={element.href}>
						{element.name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
</footer>
