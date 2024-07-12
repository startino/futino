<script lang="ts">
	import LucideIcon from '$lib/components/atoms/LucideIcon.svelte';
	import {
		ReceiptText,
		Receipt,
		PieChart,
		Users,
		User,
		Building2,
		CalendarPlus2
	} from 'lucide-svelte';
	import { page } from '$app/stores';
	import Logo from '../atoms/Logo.svelte';
	import { getContext } from '$lib/utils';

	const baseHref = '/app';

	let navItems = [
		{
			label: 'Contracts',
			href: '/contracts',
			icon: ReceiptText
		},
		{
			label: 'Bills',
			href: '/bills',
			icon: Receipt
		},
		{
			label: 'Report',
			href: '/report',
			icon: PieChart
		},
		{
			label: 'Users',
			href: '/users',
			icon: Users
		},
		{
			label: 'Personal Account',
			href: '/personal-account',
			icon: User
		},
		{
			label: 'Organization Account',
			href: '/organization-account',
			icon: Building2
		},
		{
			label: 'Subscription',
			href: '/subscription',
			icon: CalendarPlus2
		}
	];

	export let bottomNavigation = [
		{ name: 'Logout', href: 'logout', icon: 'LogOut', current: false }
	];

	const currentProfile = getContext('currentProfile');
</script>

<!-- Static sidebar for desktop -->
<div class="hidden h-full lg:z-50 lg:flex lg:w-72 lg:flex-col {$$props.class}">
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div
		class="flex grow flex-col gap-y-5 overflow-hidden rounded-lg bg-background px-6 pb-6 text-muted-foreground shadow-lg"
	>
		<div class="mb-4 grid h-16 shrink-0 items-center gap-4 px-2 pt-6">
			<a href="/app" class="mr-4 flex place-items-center space-x-2">
				<Logo color="accent" />
				<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Oak</span
				>
			</a>

			<span class="text-accent">( {$currentProfile.full_name} )</span>
		</div>
		<nav>
			<ul role="list" class=" mb-10">
				{#each navItems as { label, href, icon }}
					<li>
						<a
							href={baseHref + href}
							class="flex gap-x-3 rounded-md p-2 text-sm font-semibold transition hover:translate-x-2 hover:scale-[1.04] {$page.url.pathname.includes(
								href
							)
								? 'bg-accent text-accent-foreground hover:bg-accent'
								: ' opacity-100 hover:text-foreground'}"
						>
							<svelte:component this={icon} />
							{label}
						</a>
					</li>
				{/each}
			</ul>
			<ul>
				{#each bottomNavigation as { name, href, icon }}
					<li class="pb-0 pl-0 sm:pl-0">
						<a
							href={'/app/' + href}
							class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold transition transition-colors transition-transform hover:translate-x-2 hover:scale-[1.04] {$page.url.pathname.includes(
								href
							)
								? 'bg-accent/90 text-accent-foreground hover:bg-accent '
								: 'opacity-100 hover:text-accent'}"
						>
							<LucideIcon name={icon} />
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>
