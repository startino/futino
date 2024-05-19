<script lang="ts">
	import { getContext } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import Item from './item.svelte';
	import OrgForm from './org-form.svelte';
	import VendorForm from './vendor-form.svelte';
	import DepartmentForm from './department-form.svelte';
	import AccountForm from './account-form.svelte';
	import ProjectForm from './project-form.svelte';
	import CategoryForm from './category-form.svelte';

	export let data;

	const org = getContext('organization');
	const accounts = getContext('accounts');
	const departments = getContext('departments');
	const vendors = getContext('vendors');
	const projects = getContext('projects');
	const spendCategories = getContext('spendCategories');
	const iam = getContext('iam');
</script>

<Card.Root class="mx-auto max-w-screen-md">
	<Card.Header>
		{#if iam.isAllowedTo('organizations.create')}
			<Card.Title tag="h1" class="text-3xl">Organization Account</Card.Title>
		{:else}
			<Card.Title tag="h1" class="text-3xl">{$org.name}</Card.Title>
		{/if}
	</Card.Header>

	<Card.Content class="grid gap-6">
		{#if iam.isAllowedTo('organizations.create')}
			<div class="grid gap-2">
				<h2 class="text-lg font-bold">Organization's name</h2>
				{#if iam.isAllowedTo('organizations.create')}
					<OrgForm validatedForm={data.orgForm} />
				{/if}
			</div>
		{/if}

		<div class="grid gap-3">
			<h2 class="text-lg font-bold">Vendors</h2>
			{#if iam.isAllowedTo('organizations.create')}
				<VendorForm validatedForm={data.vendorForm} />
			{/if}
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
			{#if iam.isAllowedTo('organizations.create')}
				<DepartmentForm validatedForm={data.departmentForm} />
			{/if}
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
			{#if iam.isAllowedTo('organizations.create')}
				<AccountForm validatedForm={data.accountForm} />
			{/if}
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
			{#if iam.isAllowedTo('organizations.create')}
				<ProjectForm validatedForm={data.projectForm} />
			{/if}
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
			{#if iam.isAllowedTo('organizations.create')}
				<CategoryForm validatedForm={data.spendCategory} />
			{/if}
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
