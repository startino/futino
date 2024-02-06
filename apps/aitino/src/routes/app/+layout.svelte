<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Menu, X } from 'lucide-svelte';

	let menuOpen = true;
</script>

<Card.Root class="fixed left-6 top-6">
	<Card.Content class="h-full">
		<Button
			on:click={() => (menuOpen = !menuOpen)}
			variant="outline"
			class="{menuOpen ? 'mb-4 mt-6' : 'mt-6'} ml-auto block"
		>
			{#if menuOpen}
				<X />
			{:else}
				<Menu />
			{/if}
		</Button>

		{#if menuOpen}
			<nav class="grid h-full w-[200px] justify-center gap-6 text-center">
				<div>
					<h2 class="text-sm font-bold uppercase leading-relaxed text-accent-400">Editor</h2>
					<ul class="grid gap-1">
						<li><a href="/app/editors/maeve">Maeve</a></li>
						<li><a href="/app/editors/agent">Agent</a></li>
						<li><a href="/app/editors/workflow">Workflow</a></li>
					</ul>
				</div>

				<div>
					<h2 class="text-sm font-bold uppercase leading-relaxed text-accent-400">Libraries</h2>
					<ul class="grid gap-1">
						<li><a href="/app/libraries/maeves">Maeves</a></li>
						<li><a href="/app/libraries/agents">Agents</a></li>
						<li><a href="/app/libraries/workflows">Workflows</a></li>
						<li><a href="/app/libraries/premade-inputs">Premade Inputs</a></li>
					</ul>
				</div>

				<ul class="mt-auto grid gap-1">
					<li><a href="/app/account">Account</a></li>
					<li><a href="/app/settings">Settings</a></li>
					<li><a href="/app/help">Help</a></li>
				</ul>
			</nav>
		{/if}
	</Card.Content>
</Card.Root>

<main>
	<slot />
</main>
