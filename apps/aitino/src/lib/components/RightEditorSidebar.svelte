<script lang="ts">
	import LucideIcon from '$lib/components/LucideIcon.svelte';
	import { page } from '$app/stores';
	import { Button } from './ui/button';

	export let navigations: {
		name: string;
		items: {
			name: string;
			href: string;
			icon: string;
			current: boolean;
			pendingCount?: number;
		}[];
	}[] = [];
	export let bottomNavigation = [
		{ name: 'Help', href: 'help', icon: 'HelpCircle', current: false },
		{ name: 'Logout', href: 'logout', icon: 'LogOut', current: false }
	];

	
</script>

<!-- Static sidebar for desktop -->
<div class="hidden h-full overflow-y-clip lg:z-50 lg:flex lg:w-72 lg:flex-col">
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div
		class="bg-primary-900/20 m-4 flex grow flex-col gap-y-5 overflow-hidden rounded-2xl border px-6 pb-6 text-white"
	>
		<nav class="flex flex-col pt-0 sm:mt-0 sm:pt-0">
			<ul role="list" class="flex list-none flex-col gap-y-0 pl-0 sm:mt-0 sm:pl-0">
				<li class="my-0 pl-0 sm:my-0 sm:pl-0">
					<ul role="list" class=" mb-6 list-none gap-4 pl-0 sm:mb-8 sm:pl-0">
						<li class="m-0 pl-0 sm:m-0 sm:pl-0">
							<Button >Add Agent</Button>
						</li>
					</ul>
				</li>
				<li class="mt-auto pl-0 sm:mt-auto sm:pl-0">
					<ul role="list" class=" m-0 list-none pl-0 sm:m-0 sm:pl-0">
						{#each bottomNavigation as { name, href, icon, current }}
							<li class="pb-0 pl-0 sm:pl-0">
								<a
									href={'/home/' + href}
									class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold transition transition-colors transition-transform hover:translate-x-2 hover:scale-[1.04] {$page.url.pathname.includes(
										href
									)
										? 'bg-accent/90 text-accent-foreground hover:bg-accent '
										: 'text-primary-foreground hover:text-accent opacity-100'}"
								>
									<LucideIcon name={icon} />
									{name}
								</a>
							</li>
						{/each}
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</div>
