<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu, X } from 'lucide-svelte';

	let menuOpen = false;
	let navGroups = [
		{
			name: 'Editors',
			baseSrc: '/app/editors',
			items: [
				{
					label: 'Maeve',
					src: '/maeve'
				},
				{
					label: 'Agent',
					src: '/agent'
				},
				{
					label: 'Workflow',
					src: '/workflow'
				}
			]
		},
		{
			name: 'Libraries',
			baseSrc: '/app/libraries',
			items: [
				{
					label: 'Maeve',
					src: '/maeve'
				},
				{
					label: 'Agent',
					src: '/agent'
				},
				{
					label: 'Workflow',
					src: '/workflow'
				}
			]
		},
		{
			name: null,
			baseSrc: '/app/',
			items: [
				{
					label: 'Account',
					src: '/account'
				},
				{
					label: 'Settings',
					src: '/settings'
				},
				{
					label: 'Help',
					src: '/help'
				}
			]
		}
	];
</script>

<Sheet.Root open={menuOpen}>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			class="{menuOpen ? 'mb-4 mt-6' : 'mt-6'} fixed left-6 top-6 z-10 ml-auto block"
		>
			{#if menuOpen}
				<X />
			{:else}
				<Menu />
			{/if}
		</Button>
	</Sheet.Trigger>

	<Sheet.Content side="left">
		<nav class="grid justify-center gap-6 text-center">
			{#each navGroups as group}
				<div>
					{#if group.name}
						<h2 class="text-sm font-bold uppercase leading-relaxed text-accent-400">
							{group.name}
						</h2>
					{/if}
					<ul class="grid gap-1">
						{#each group.items as item}
							<li><a href="{group.baseSrc}{item.src}">{item.label}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
	</Sheet.Content>
</Sheet.Root>

<main>
	<slot />
</main>
