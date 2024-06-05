<script lang="ts">
	import { View, Loader2 } from 'lucide-svelte';

	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { formatAmount, toDateString, pdfjsLib, renderPDF } from '$lib/utils';
	import type { PDFDocumentProxy } from 'pdfjs-dist';
	import { onMount } from 'svelte';
	export let data;

	const { bill } = data;
	const title = `Bill for #${bill.contract.number} ${bill.contract.vendor.name}`;

	let pdf: PDFDocumentProxy;
	let pdfSpot: HTMLElement;
	let pdfContainer: HTMLElement;
	let isLoadingPDF = true;

	onMount(async () => {
		pdf = await pdfjsLib.getDocument(data.attachmentUrl).promise;
		await renderPDF(pdf, pdfContainer);
		isLoadingPDF = false;
	});

	const appendContainer = (node: HTMLDivElement) => {
		node.appendChild(pdfContainer);

		return {
			destroy() {
				pdfSpot.appendChild(pdfContainer);
			}
		};
	};
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
				<p class="text-muted-foreground">No approver</p>
			{/if}
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Attachment</h2>

			<Dialog.Root>
				<Dialog.Trigger disabled={isLoadingPDF}>
					<Button class="flex gap-2" variant="outline">
						{#if isLoadingPDF}
							<Loader2 class="animate-spin" />
						{:else}
							<View /> View invoice
						{/if}
					</Button>
				</Dialog.Trigger>
				<Dialog.Content
					id="dialog-content"
					class="max-h-dvh w-full max-w-screen-md overflow-y-scroll px-0"
				>
					<Dialog.Title class="px-6">Invoice</Dialog.Title>
					<div use:appendContainer></div>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</Card.Content>
</Card.Root>

<div class="invisible h-0 w-0 overflow-hidden" id="pdf-spot" bind:this={pdfSpot}>
	<div
		id="pdf-container"
		class="grid w-screen max-w-screen-md gap-4"
		bind:this={pdfContainer}
	></div>
</div>
