<script lang="ts">
	import { View, Loader2, StickyNote, Edit } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PDFDocumentProxy } from 'pdfjs-dist';

	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Form from '$lib/components/ui/form';
	import { Textarea } from '$lib/components/ui/textarea';

	import { formatAmount, toDateString, pdfjsLib, renderPDF, getContext } from '$lib/utils';
	import { rejectionSchema } from '$lib/schemas';
	import BillForm from '../bill-form.svelte';

	export let data;

	const currentProfile = getContext('currentProfile');
	let { bill } = data;
	const title = `Bill for #${bill.contract.number} ${bill.contract.vendor.name}`;

	const rejectionForm = superForm(data.rejectionForm, {
		validators: zodClient(rejectionSchema),
		onUpdate: ({ form }) => {
			if (form.valid) {
				toast.success('Bill rejected!');
			}
		}
	});
	const approvalForm = superForm(data.approvalForm, {
		onUpdate: ({ form }) => {
			if (form.valid) {
				toast.success('Bill approved!');
			}
		}
	});
	const {
		form: rejectionData,
		delayed: rejectionDelayed,
		enhance: rejectionEnhance,
		errors: rejectionErrors
	} = rejectionForm;
	const {
		form: approvalData,
		delayed: approvalDelayed,
		enhance: approvalEnhance,
		errors: approvalErrors
	} = approvalForm;

	let pdf: PDFDocumentProxy;
	let pdfSpot: HTMLElement;
	let pdfContainer: HTMLElement;
	let isLoadingPDF = true;
	let showRejectionForm = false;
	let billFormOpen = false;

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

	$: bill = data.bill;
	$: rejection = bill.status === 'rejected' ? bill.rejections[bill.rejections.length - 1] : null;
	$rejectionData.id = bill.id;
	$approvalData.bill_id = bill.id;
	$approvalData.time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
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
			<p>
				<Badge variant={bill.status === 'rejected' ? 'destructive' : 'default'}>{bill.status}</Badge
				>
			</p>
		</div>

		{#if rejection && $currentProfile.id === bill.creator_id}
			<div>
				<Alert.Root class="mb-2">
					<StickyNote class="h-4 w-4" />
					<Alert.Title>Note from {rejection.creator.full_name}:</Alert.Title>
					<Alert.Description class="text-base">{rejection.note}</Alert.Description>
				</Alert.Root>
				<FormDialog bind:open={billFormOpen}>
					<svelte:fragment slot="trigger">
						<Dialog.Trigger>
							<Button size="sm" class="gap-1"><Edit class="h-4 w-4" />Edit bill</Button>
						</Dialog.Trigger>
					</svelte:fragment>

					<BillForm
						action={`?/update&id=${bill.id}`}
						type="update"
						data={data.optionalBillForm}
						onSuccess={() => {
							billFormOpen = false;
							toast.success('Bill updated!');
						}}
					/>
				</FormDialog>
			</div>
		{/if}

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

		{#if bill.posting_period}
			<div class="grid gap-2">
				<h2 class="font-bold">Posting Period</h2>
				<p>{toDateString(new Date(bill.posting_period))}</p>
			</div>
		{/if}

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

		{#if ($currentProfile.id === bill.approver_id || $currentProfile.roles.includes('signer')) && !['rejected', 'approved'].includes(bill.status)}
			{#if showRejectionForm}
				<form method="post" action="?/reject" use:rejectionEnhance>
					<input hidden name="id" value={$rejectionData.id} />
					<Form.Field form={rejectionForm} name="note">
						<Form.Control let:attrs>
							<Form.Label>Add a note</Form.Label>
							<Textarea bind:value={$rejectionData.note} {...attrs} />
							<Form.FieldErrors />
						</Form.Control>
					</Form.Field>
					<div class="mt-2 flex gap-4">
						<Button type="submit" variant="destructive">
							{#if $rejectionDelayed}
								<Loader2 class="animate-spin" />
							{:else}
								Reject
							{/if}
						</Button>

						<Button type="button" variant="outline" on:click={() => (showRejectionForm = false)}
							>Cancel</Button
						>
					</div>

					{#if $rejectionErrors?._errors}
						<div class=" text-sm text-destructive">{$rejectionErrors._errors[0]}</div>
					{/if}
				</form>
			{:else}
				<form method="post" action="?/approve" use:approvalEnhance>
					<input hidden name="bill_id" value={$approvalData.bill_id} />
					<input hidden name="time_zone" value={$approvalData.time_zone} />
					<div class="mt-4 flex gap-4">
						<Button type="submit">
							{#if $approvalDelayed}
								<Loader2 class="animate-spin" />
							{:else}
								Approve
							{/if}
						</Button>

						<Button type="button" variant="destructive" on:click={() => (showRejectionForm = true)}
							>Reject</Button
						>
					</div>

					{#if $approvalErrors?._errors}
						<div class=" text-sm text-destructive">{$approvalErrors._errors[0]}</div>
					{/if}
				</form>
			{/if}
		{/if}
	</Card.Content>
</Card.Root>

<div class="invisible h-0 w-0 overflow-hidden" id="pdf-spot" bind:this={pdfSpot}>
	<div
		id="pdf-container"
		class="grid w-screen max-w-screen-md gap-4"
		bind:this={pdfContainer}
	></div>
</div>
