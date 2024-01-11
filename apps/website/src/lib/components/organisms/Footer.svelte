<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';

	export const elements = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Pricing',
			href: '/pricing'
		},
		{
			name: 'Terms of Service',
			href: '/' // TODO: Add link
		},
		{
			name: 'Privacy Policy',
			href: '/legal/privacy'
		}
	];
</script>

<footer
	id="header"
	class="{$$props.class} duration-400 top-0 z-40 mb-32 w-full border-b border-secondary/10 py-16 text-primary transition-all"
>
	<div
		class="md:px-18 relative mx-auto flex flex-col items-center gap-y-3 px-6 sm:flex-row lg:max-w-5xl xl:max-w-6xl"
	>
		<a class="mr-auto flex w-fit gap-3" href="/">
			<Logo />
		</a>
		<div class="title-medium mr-auto flex items-center gap-8 sm:ml-auto sm:mr-0">
			<nav class="flex gap-6 pb-0.5 lg:gap-8">
				{#each elements as element}
					<a class="hhover:text-tertiary" href={element.href}>
						{element.name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
</footer>
