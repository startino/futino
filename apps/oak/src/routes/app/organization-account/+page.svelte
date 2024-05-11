<script lang="ts">
	import { getContext } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import Item from './item.svelte';
	import OrgForm from './org-form.svelte';
	import VendorForm from './vendor-form.svelte';
	import DepartmentForm from './department-form.svelte';
	import AccountForm from './account-form.svelte';

	export let data;

	const accounts = getContext('accounts');
	const departments = getContext('departments');
	const vendors = getContext('vendors');
	const projects = getContext('projects');
	const spendCategories = getContext('spendCategories');
</script>

<Card.Root class="mx-auto max-w-screen-md">
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">Organization Account</Card.Title>
	</Card.Header>

	<Card.Content class="grid gap-6">
		<div class="grid gap-2">
			<h2 class="text-lg font-bold">Organization's name</h2>

			<OrgForm validatedForm={data.orgForm} />
		</div>

		<div class="grid gap-3">
			<h2 class="text-lg font-bold">Vendors</h2>
			<VendorForm validatedForm={data.vendorForm} />
			<ul class="grid gap-2">
				{#each $vendors as vendor}
					<Item>
						{vendor.name}
					</Item>
				{/each}
			</ul>
		</div>

		<div class="grid gap-3">
			<h2 class="text-lg font-bold">Departments</h2>
			<DepartmentForm validatedForm={data.departmentForm} />
			<ul class="grid gap-2">
				{#each $departments as department}
					<Item>
						#{department.number}
						{department.name}
					</Item>
				{/each}
			</ul>
		</div>

		<div class="grid gap-3">
			<h2 class="text-lg font-bold">Accounts</h2>
			<AccountForm validatedForm={data.accountForm} />
			<ul class="grid gap-2">
				{#each $accounts as account}
					<Item>
						<span class="text-sm font-bold">{account.number}</span>
						<p class="text-muted-foreground">{account.description}</p>
					</Item>
				{/each}
			</ul>
		</div>

		<div class="grid gap-3">
			<h2 class="text-lg font-bold">Projects</h2>

			<ul class="grid gap-2">
				{#each $projects as project}
					<Item>
						{project.name}
					</Item>
				{/each}
			</ul>
		</div>

		<div class="grid gap-3">
			<h2 class="text-lg font-bold">Spend Categories</h2>

			<ul class="grid gap-2">
				{#each $spendCategories as category}
					<Item>
						{category.name}
					</Item>
				{/each}
			</ul>
		</div>
	</Card.Content>
</Card.Root>
