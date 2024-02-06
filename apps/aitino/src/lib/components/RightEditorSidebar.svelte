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
<div
	class="hidden h-full overflow-y-clip rounded-2xl border bg-primary-900/50 p-6 lg:z-50 lg:grid lg:w-72"
>
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<ul role="list" class="grid w-full gap-4">
		<li>
			<Button class="w-full">Run</Button>
		</li>
		<li>
			<Button class="w-full" variant="outline">Add Prompt</Button>
		</li>
		<li>
			<Button class="w-full" variant="outline">Add Agent</Button>
		</li>
		<li>
			<Button class="w-full" variant="outline">Add Meave</Button>
		</li>
		<li>
			<Button class="w-full" variant="outline">Compile</Button>
		</li>
		<li>
			<Button class="w-full" variant="outline">Sessions</Button>
		</li>
	</ul>
</div>
