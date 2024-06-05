<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { formatAmount, toDateString } from '$lib/utils';
	export let data;

	const { bill } = data;
	const title = `Bill for #${bill.contract.number} ${bill.contract.vendor.name}`;
</script>

<Breadcrumb.Root class="mb-6">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/app/bills">Bill datatable</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>{title}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<Card.Root class="mx-auto max-w-screen-md">
	<Card.Header>
		<Card.Title>
			<h1 class="text-xl font-bold">{title}</h1>
		</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<div class="flex gap-2">
			<h2 class="font-bold">Status:</h2>
			<p><Badge>{bill.status}</Badge></p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Bill Creator</h2>
			<p>{bill.creator.full_name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Bill amount</h2>
			<p>{formatAmount(bill.amount)}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Description</h2>
			{#if bill.description}
				<p>{bill.description}</p>
			{:else}
				<p class="text-muted-foreground">No description</p>
			{/if}
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Contract</h2>
			<p>{`#${bill.contract.number} ${bill.contract.vendor.name}`}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Contract Owner</h2>
			<p>{bill.contract.owner.full_name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Invoice Date</h2>
			<p>{toDateString(new Date(bill.invoice_date))}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Due Date</h2>
			<p>{toDateString(new Date(bill.due_date))}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Accrual Period</h2>
			<p>{toDateString(new Date(bill.accrual_period))}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Approver</h2>
			{#if bill.approver}
				<p>{bill.approver.full_name}</p>
			{:else}
				<p class="text-muted-foreground">Bill not approved yet</p>
			{/if}
		</div>
	</Card.Content>
</Card.Root>
