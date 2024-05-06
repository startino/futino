<script lang="ts">
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { View, Loader2 } from 'lucide-svelte';
	import type { PDFDocumentProxy } from 'pdfjs-dist';

	import { enhance } from '$app/forms';
	import { pdfjsLib, formatAmount, getContext } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	export let data;
	export let form;

	const currentProfile = getContext('currentProfile');

	let pdf: PDFDocumentProxy;
	let pdfSpot: HTMLDivElement;
	let pdfContainer: HTMLDivElement;
	let isLoadingPDF = true;
	let isApproving = false;

	const isSigner = $currentProfile.role === 'signer';

	onMount(async () => {
		pdf = await loadPDF();
		await renderPDF();
		isLoadingPDF = false;
	});

	const loadPDF = async () => await pdfjsLib.getDocument(data.attachmentUrl).promise;

	const renderPDF = async () => {
		for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
			const canvas = document.createElement('canvas');
			const page = await pdf.getPage(pageNum);

			let viewport = page.getViewport({ scale: 1 });
			const scale = pdfContainer.clientWidth / viewport.width;
			viewport = page.getViewport({ scale });

			canvas.width = viewport.width;
			canvas.height = viewport.height;

			const context = canvas.getContext('2d');
			const renderContext = {
				canvasContext: context,
				viewport: viewport
			};

			page.render(renderContext);
			pdfContainer.appendChild(canvas);
		}
	};

	const appendContainer = (node: HTMLDivElement) => {
		node.appendChild(pdfContainer);

		return {
			destroy() {
				pdfSpot.appendChild(pdfContainer);
			}
		};
	};

	$: contract = data.contract;
	$: isCurrentApprover = $currentProfile.id === contract.current_approver.id;
	$: if (form?.success) {
		toast.success(form.success);
	}

	$: if (form?.success || form?.error) {
		isApproving = false;
	}
</script>

<Breadcrumb.Root class="mb-6">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/app/contracts">Contracts</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>{`#${contract.number} ${contract.vendor.name}`}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<Card.Root class="mx-auto max-w-screen-md">
	<Card.Header>
		<Card.Title>
			<h1 class="text-xl font-bold">{`#${contract.number} ${contract.vendor.name}`}</h1>
		</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<div class="flex gap-2">
			<h2 class="font-bold">Status:</h2>
			<p><Badge>{contract.status}</Badge></p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Owner</h2>
			<p>{contract.owner.full_name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Description</h2>
			<p>{contract.description}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Amount</h2>
			<p>{formatAmount(contract.amount)}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Account</h2>
			<p>{contract.account.number}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Project</h2>
			<p>{contract.project.name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Spend Category</h2>
			<p>{contract.spend_category.name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Department</h2>
			<p>{contract.department.name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Current Approver</h2>
			<p>{contract.current_approver.full_name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Attachment</h2>

			<Dialog.Root>
				<Dialog.Trigger disabled={isLoadingPDF}>
					<Button class="flex gap-2" variant="outline">
						{#if isLoadingPDF}
							<Loader2 class="animate-spin" />
						{:else}
							<View /> View attachment
						{/if}
					</Button>
				</Dialog.Trigger>
				<Dialog.Content
					id="dialog-content"
					class="max-h-dvh w-full max-w-screen-md overflow-y-scroll px-0"
				>
					<Dialog.Title class="px-6">Attachment</Dialog.Title>
					<div use:appendContainer></div>
				</Dialog.Content>
			</Dialog.Root>
		</div>

		{#if form?.error}
			<span class="text-sm text-destructive">{form.error}</span>
		{/if}

		{#if !contract.signed}
			{#if isCurrentApprover && !isSigner}
				<form action="?/approve" method="post" use:enhance>
					<input hidden value={contract.id} name="contract-id" />
					<Button on:click={() => (isApproving = true)} class="w-full" type="submit">
						{#if isApproving}
							<Loader2 class="animate-spin" />
						{:else}
							Approve
						{/if}
					</Button>
				</form>
			{/if}

			{#if (isCurrentApprover && isSigner) || isSigner}
				<form action="?/sign" method="post" use:enhance>
					<input hidden value={contract.id} name="contract-id" />
					<Button on:click={() => (isApproving = true)} class="w-full" type="submit">
						{#if isApproving}
							<Loader2 class="animate-spin" />
						{:else}
							Sign
						{/if}
					</Button>
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
