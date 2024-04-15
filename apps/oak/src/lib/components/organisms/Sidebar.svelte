<script lang="ts">
	import LucideIcon from '$lib/components/atoms/LucideIcon.svelte';
	import { ReceiptText, Receipt, PieChart, Users, User, Building2 } from 'lucide-svelte';
	import { page } from '$app/stores';
	import Logo from '../atoms/Logo.svelte';

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
		}
	];

	let navigations: {
		name: string;
		items: {
			name: string;
			href: string;
			icon: string;
			current: boolean;
			pendingCount?: number;
		}[];
	}[] = [
		{
			name: 'Pending Approvals',
			items: [
				{
					name: 'Contract Entries',
					href: 'pending-contracts',
					icon: 'Paperclip',
					current: false,
					pendingCount: 2
				},
				{
					name: 'Bill Entries',
					href: 'pending-bills',
					icon: 'Receipt',
					current: false,
					pendingCount: 3
				},
				{
					name: 'Contract Modifications',
					href: 'pending-modifications',
					icon: 'PencilRuler',
					current: false,
					pendingCount: 0
				}
			]
		},
		{
			name: 'Contract Management',
			items: [
				{ name: 'Contract Repository', href: 'contract-repository', icon: 'Table', current: false },
				{
					name: 'Contract Entry Form',
					href: 'contract-entry-form',
					icon: 'PlusCircle',
					current: false
				},
				{ name: 'Contract Report', href: 'contract-report', icon: 'PieChart', current: false }
			]
		},
		{
			name: 'Bill Management',
			items: [
				{ name: 'Bill Repository', href: 'bill-repository', icon: 'Table', current: false },
				{ name: 'Bill Entry Form', href: 'bill-entry-form', icon: 'PlusCircle', current: false }
			]
		},
		{
			name: 'Settings',
			items: [
				{
					name: 'Personal Account',
					href: 'personal-account',
					icon: 'CircleUserRound',
					current: false
				},
				{ name: 'Company Account', href: 'company-account', icon: 'Building', current: false },
				{ name: 'Subscription', href: 'subscription', icon: 'ReceiptText', current: false }
			]
		}
	];
	export let bottomNavigation = [
		{ name: 'Logout', href: 'logout', icon: 'LogOut', current: false }
	];
</script>

<!-- Static sidebar for desktop -->
<div class="hidden h-full overflow-y-clip lg:z-50 lg:flex lg:w-72 lg:flex-col {$$props.class}">
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div
		class="flex grow flex-col gap-y-5 overflow-hidden rounded-2xl border bg-primary-900/20 px-6 pb-6 text-white"
	>
		<div class="flex h-16 shrink-0 items-center px-2 pt-6">
			<a href="https://flowbite.com" class="mr-4 flex place-items-center space-x-2">
				<Logo color="accent" />
				<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Oak</span
				>
			</a>
		</div>
		<nav>
			<ul role="list" class=" mb-10">
				{#each navItems as { label, href, icon }}
					<li>
						<a
							href={baseHref + href}
							class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold transition hover:translate-x-2 hover:scale-[1.04] {$page.url.pathname.includes(
								href
							)
								? 'bg-accent/90 text-accent-foreground hover:bg-accent '
								: 'text-primary-foreground opacity-100 hover:text-accent'}"
						>
							<svelte:component this={icon} />
							{label}
						</a>
					</li>
				{/each}
			</ul>
			<ul role="list" class=" m-0 list-none pl-0 sm:m-0 sm:pl-0">
				{#each bottomNavigation as { name, href, icon, current }}
					<li class="pb-0 pl-0 sm:pl-0">
						<a
							href={'/app/' + href}
							class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold transition transition-colors transition-transform hover:translate-x-2 hover:scale-[1.04] {$page.url.pathname.includes(
								href
							)
								? 'bg-accent/90 text-accent-foreground hover:bg-accent '
								: 'text-primary-foreground opacity-100 hover:text-accent'}"
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
