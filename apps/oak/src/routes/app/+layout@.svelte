<script lang="ts">
	import '$styling';
	import Shell from '$lib/components/organisms/Shell.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { navigating } from '$app/stores';
	import { setContext } from '$lib/utils';
	import {
		createAccounts,
		createCurrentProfile,
		createOrganization,
		createProjects,
		createDepartments,
		createVendors,
		createSpendCategories,
		createProfiles
	} from '$lib/stores';
	import { IAM } from '$lib/iam';

	export let data;
	const storesData = data.storesData;

	const iam = new IAM(data.resourcePolicy, storesData.currentProfile);

	setContext('iam', iam);
	setContext('currentProfile', createCurrentProfile(storesData.currentProfile));
	setContext('organization', createOrganization(storesData.organization));
	setContext('projects', createProjects(storesData.projects));
	setContext('accounts', createAccounts(storesData.accounts));
	setContext('departments', createDepartments(storesData.departments));
	setContext('spendCategories', createSpendCategories(storesData.spendCategories));
	setContext('vendors', createVendors(storesData.vendors));
	setContext('profiles', createProfiles(storesData.profiles));
</script>

{#if $navigating}
	<Skeleton class="fixed inset-0 top-0 z-50 h-2 bg-primary-500" />
{/if}

<Shell
	class="h-screen w-full max-w-none"
	slotSidebarLeft="p-4"
	slotPageHeader="my-4"
	slotPageContent=""
>
	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
	<!-- Router Slot -->
	<main class="p-4">
		<slot />
	</main>
</Shell>
