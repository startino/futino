<script lang="ts">
	import '../app.postcss';
	import { Header, Shell, Footer, Logo, ThemeButton } from 'lorc';

	const headerElements: { name: string; href: string }[] = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: '/',
		},
	];

	function toggleMenu(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		throw new Error('Function not implemented.');
	}
</script>

<Shell
	class="card h-full p-1"
	slotSidebarLeft="grid grid-cols-1"
	slotSidebarRight="grid grid-cols-1"
	slotPageContent="grid grid-cols-1">
	<svelte:fragment slot="header">
		<Header>
			<svelte:fragment slot="lead">
				<a class="flex gap-3" href="/">
					<Logo />
					<p class="hidden sm:flex text-xl my-auto pb-1">Futino Web-Template</p>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="pages">
				{#each headerElements as { name, href }, i}
					<a class="hover:text-tertiary-light dark:hover:text-tertiary-dark" {href}>
						{name}
					</a>
				{/each}
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div
					class="gap-6 pl-6 flex md:border-l md:border-secondary-light/50 md:dark:border-primary-dark/50">
					<ThemeButton />
					<button
						class="flex md:hidden stroke-primary-light hover:stroke-tertiary-light dark:stroke-primary-dark dark:hover:stroke-tertiary-dark"
						on:click={toggleMenu}>
						<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7" />
						</svg>
					</button>
				</div>
			</svelte:fragment>
		</Header>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</Shell>
