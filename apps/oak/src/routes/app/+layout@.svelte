<script lang="ts">
	import { getLocalTimeZone, parseDate, today } from '@internationalized/date';

	import '$styling';
	import Shell from '$lib/components/organisms/Shell.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { navigating } from '$app/stores';
	import { setContext, timestampToISODate } from '$lib/utils';
	import {
		createAccounts,
		createCurrentProfile,
		createOrganization,
		createProjects,
		createDepartments,
		createVendors,
		createSpendCategories,
		createProfiles,
		createStripeData
	} from '$lib/stores';
	import { IAM } from '$lib/iam';

	export let data;
	const storesData = data.storesData;
	let stripeData = data.stripeData;

	const iam = new IAM(data.resourcePolicy, storesData.currentProfile);

	if (
		stripeData.subscription &&
		stripeData.subscription.status === 'canceled' &&
		parseDate(timestampToISODate(stripeData.subscription.current_period_end)).compare(
			today(getLocalTimeZone())
		) > 0
	) {
		stripeData.subscription = null;
	}

	setContext('iam', iam);
	setContext('currentProfile', createCurrentProfile(storesData.currentProfile));
	setContext('stripeData', createStripeData(stripeData));
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
