<script lang="ts">
	import { getContext } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import OrgForm from './org-form.svelte';

	export let data;

	const org = getContext('organization');
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
			<h2 class="text-lg font-bold">Name</h2>

			<OrgForm validatedForm={data.orgForm} />
		</div>

		<div class="grid gap-2">
			<h2 class="text-lg font-bold">Departments</h2>

			<ul class="grid gap-1">
				{#each $departments as department}
					<li>#{department.number} {department.name}</li>
				{/each}
			</ul>
		</div>

		<div class="grid gap-2">
			<h2 class="text-lg font-bold">Vendors</h2>

			<ul class="grid gap-1">
				{#each $vendors as vendor}
					<li>{vendor.name}</li>
				{/each}
			</ul>
		</div>

		<div class="grid gap-2">
			<h2 class="text-lg font-bold">Accounts</h2>

			<ul class="grid gap-1">
				{#each $accounts as account}
					<li>{account.number}: {account.description}</li>
				{/each}
			</ul>
		</div>

		<div class="grid gap-2">
			<h2 class="text-lg font-bold">Projects</h2>

			<ul class="grid gap-1">
				{#each $projects as project}
					<li>{project.name}</li>
				{/each}
			</ul>
		</div>

		<div class="grid gap-2">
			<h2 class="text-lg font-bold">Spend Categories</h2>

			<ul class="grid gap-1">
				{#each $spendCategories as category}
					<li>{category.name}</li>
				{/each}
			</ul>
		</div>
	</Card.Content>
</Card.Root>
