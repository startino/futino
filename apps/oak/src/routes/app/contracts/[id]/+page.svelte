<script lang="ts">
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { View, Loader2, StickyNote, Edit } from 'lucide-svelte';
	import type { PDFDocumentProxy } from 'pdfjs-dist';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { enhance } from '$app/forms';
	import { pdfjsLib, formatAmount, getContext, renderPDF, toDateString } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import * as Alert from '$lib/components/ui/alert';
	import { Textarea } from '$lib/components/ui/textarea';
	import { rejectionSchema } from '$lib/schemas';
	import ContractForm from '../contract-form.svelte';
	import { FormDialog } from '$lib/components/ui/form-dialog';

	export let data;
	export let form;

	const rejectionForm = superForm(data.rejectionForm, {
		validators: zodClient(rejectionSchema),
		onUpdate: ({ form }) => {
			if (form.valid) {
				toast.success('Contract rejected!');
			}
		}
	});
	const {
		form: rejectionData,
		delayed: rejectionDelayed,
		enhance: rejectionEnhance,
		errors: rejectionErrors
	} = rejectionForm;

	const currentProfile = getContext('currentProfile');

	let pdf: PDFDocumentProxy;
	let pdfSpot: HTMLElement;
	let pdfContainer: HTMLElement;
	let loadStatus:
		| 'idle'
		| 'submitting-explanation'
		| 'approving-contract'
		| 'approving-review'
		| 'rejecting-review'
		| 'dismissing-review'
		| 'loading-pdf' = 'idle';
	let showRejectionForm = false;
	let rejectionFieldOpen = false;
	let contractFormOpen = false;
	let reviewRejectionNote = '';
	let reviewStep: 1 | 2 = 1;
	let reviewExplanation: string | null = null;

	const isSigner = $currentProfile.roles.includes('signer');

	onMount(async () => {
		pdf = await pdfjsLib.getDocument(data.attachmentUrl).promise;
		loadStatus = 'loading-pdf';
		await renderPDF(pdf, pdfContainer);
		loadStatus = 'idle';
	});

	const approveReview = async () => {
		loadStatus = 'approving-review';

		const response = await fetch(`/api/approve-review/${reviewChange.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { error, message } = await response.json();

		if (error) {
			toast.error(error);
			loadStatus = 'idle';
			return;
		}

		toast.success(message);
		data.contract.status = 'active';
		reviewChange = null;

		loadStatus = 'idle';
	};

	const rejectReview = async () => {
		if (!reviewRejectionNote) {
			return;
		}

		loadStatus = 'rejecting-review';

		const response = await fetch(`/api/reject-review/${reviewChange.id}`, {
			method: 'POST',
			body: JSON.stringify({ note: reviewRejectionNote }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { error, message } = await response.json();

		if (error) {
			toast.error(error);
			loadStatus = 'idle';
			return;
		}

		toast.success(message);
		loadStatus = 'idle';
		rejectionFieldOpen = false;
		reviewChange.status = 'rejected';
		reviewChange.note = reviewRejectionNote;
	};

	const dismissReview = async () => {
		loadStatus = 'dismissing-review';

		const response = await fetch(`/api/dismiss-review/${reviewChange.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { error, message } = await response.json();

		if (error) {
			toast.error(error);
			loadStatus = 'idle';
			return;
		}

		toast.success(message);
		data.contract.status = 'active';
		reviewChange = null;

		loadStatus = 'idle';
	};

	const handleReviewExplanation = async () => {
		loadStatus = 'submitting-explanation';

		const response = await fetch(`/api/explain-review-change/${reviewChange.id}`, {
			method: 'POST',
			body: JSON.stringify({ explanation: reviewExplanation }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { error, message } = await response.json();

		if (error) {
			toast.error(error);
			loadStatus = 'idle';
			return;
		}

		toast.success(message);
		reviewChange.explanation = reviewExplanation;
		contractFormOpen = false;
		reviewStep = 1;

		loadStatus = 'idle';
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
	$: isApprover = contract.approver && $currentProfile.id === contract.approver.id;
	$: if (form?.success) {
		toast.success(form.success);
	}

	$: if (form?.success || form?.error) {
		loadStatus = 'idle';
	}
	$: $rejectionData.id = contract.id;
	$: rejection =
		contract.status === 'rejected' ? contract.rejections[contract.rejections.length - 1] : null;
	$: reviewChange = contract.status === 'under review' ? contract.review_change : null;
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
			<p>
				<Badge variant={contract.status === 'rejected' ? 'destructive' : 'default'}
					>{contract.status}</Badge
				>
			</p>
		</div>

		{#if rejection && $currentProfile.id === contract.owner_id}
			<div>
				<Alert.Root class="mb-2">
					<StickyNote class="h-4 w-4" />
					<Alert.Title>Note from {rejection.creator.full_name}</Alert.Title>
					<Alert.Description class="text-base">{rejection.note}</Alert.Description>
				</Alert.Root>
				<FormDialog bind:open={contractFormOpen} title="Edit Contract">
					<svelte:fragment slot="trigger">
						<Dialog.Trigger>
							<Button size="sm" class="gap-1"><Edit class="h-4 w-4" />Edit contract</Button>
						</Dialog.Trigger>
					</svelte:fragment>

					<ContractForm
						action={`?/update&id=${contract.id}&approverId=${rejection.creator_id}`}
						type="update"
						data={data.optionalContractForm}
						onSuccess={() => {
							contractFormOpen = false;
							toast.success('Contract updated!');
						}}
					/>
				</FormDialog>
			</div>
		{/if}

		{#if reviewChange && [contract.owner_id, reviewChange.requester_id].includes($currentProfile.id)}
			<div>
				<Alert.Root
					class="mb-2"
					variant={reviewChange.status === 'rejected' ? 'destructive' : 'default'}
				>
					<StickyNote class="h-4 w-4" />
					<Alert.Title class="mb-4">
						Review Requested by {reviewChange.requester.full_name} - <Badge variant="outline"
							>{reviewChange.status}</Badge
						>
					</Alert.Title>

					{#if reviewChange.note}
						<Alert.Description class="text-items-baseline mb-4 text-base text-foreground">
							<h3>Rejection note</h3>
							<p class="text-muted-foreground">{reviewChange.note}</p>
						</Alert.Description>
					{/if}
					<FormDialog bind:open={contractFormOpen} title="Edit Contract">
						<svelte:fragment slot="trigger">
							{#if ['pending approval', 'rejected'].includes(reviewChange.status)}
								<div class="mb-4 space-y-1">
									<h3 class="text-foreground">Changes pending for approval:</h3>
									<ul class="list-disc text-muted-foreground">
										<li>
											start date: {toDateString(new Date(contract.start_date))} -> {toDateString(
												new Date(reviewChange.start_date)
											)}
										</li>
										<li>
											end date: {toDateString(new Date(contract.end_date))} -> {toDateString(
												new Date(reviewChange.end_date)
											)}
										</li>
									</ul>

									<h3 class="text-foreground">Explanation:</h3>
									<p class="text-muted-foreground">{reviewChange.explanation}</p>
								</div>

								{#if $currentProfile.id === reviewChange.requester_id && reviewChange.status === 'pending approval'}
									{#if rejectionFieldOpen && reviewChange.status === 'pending approval'}
										<div>
											<Textarea
												bind:value={reviewRejectionNote}
												class="my-2"
												placeholder="Add a note..."
											/>
											<div class="flex gap-2">
												<Button
													disabled={loadStatus === 'rejecting-review'}
													size="sm"
													variant="destructive"
													on:click={rejectReview}
												>
													{#if loadStatus === 'rejecting-review'}
														<Loader2 class="animate-spin" />
													{:else}
														Reject review
													{/if}
												</Button>

												<Button variant="ghost" on:click={() => (rejectionFieldOpen = false)}>
													Cancel
												</Button>
											</div>
										</div>
									{:else}
										<div class="mt-4 flex gap-2">
											<Button
												disabled={loadStatus === 'approving-review'}
												size="sm"
												on:click={approveReview}
											>
												{#if loadStatus === 'approving-review'}
													<Loader2 class="animate-spin" />
												{:else}
													Approve review
												{/if}
											</Button>

											<Button
												variant="ghost"
												disabled={loadStatus === 'approving-review'}
												on:click={() => (rejectionFieldOpen = true)}>Reject review</Button
											>
										</div>
									{/if}
								{/if}
							{/if}

							{#if ['idle', 'rejected'].includes(reviewChange.status) && contract.owner_id === $currentProfile.id}
								<div class="flex gap-2">
									<Dialog.Trigger>
										<Button size="sm" class="gap-1"><Edit class="h-4 w-4" />Edit contract</Button>
									</Dialog.Trigger>

									<Button
										size="sm"
										class="gap-1"
										variant="outline"
										disabled={loadStatus === 'dismissing-review'}
										on:click={dismissReview}
									>
										{#if loadStatus === 'dismissing-review'}
											<Loader2 class="animate-spin" />
										{:else}
											Dismiss Review
										{/if}
									</Button>
								</div>
							{/if}
						</svelte:fragment>

						{#if reviewStep === 1}
							<h3>1 - Changes</h3>
							<ContractForm
								action={`?/review&id=${contract.review_change.id}&approverId=${reviewChange.requester_id}`}
								type="update"
								data={data.optionalContractForm}
								onSuccess={() => {
									reviewStep = 2;
									toast.success('Review submitted!');
								}}
							/>
						{/if}

						{#if reviewStep === 2}
							<h3>2 - Explanation</h3>
							<Textarea placeholder="Explain the changes..." bind:value={reviewExplanation} />
							<Button
								on:click={handleReviewExplanation}
								disabled={loadStatus === 'submitting-explanation' || !reviewExplanation}
							>
								{#if loadStatus === 'submitting-explanation'}
									<Loader2 class="animate-spin" />
								{:else}
									Submit
								{/if}
							</Button>
						{/if}
					</FormDialog>
				</Alert.Root>
			</div>
		{/if}

		<div class="grid gap-2">
			<h2 class="font-bold">Owner</h2>
			<p>{contract.owner.full_name}</p>
		</div>

		{#if contract.signer}
			<div class="grid gap-2">
				<h2 class="font-bold text-accent">Signer</h2>
				<p>{contract.signer.full_name}</p>
			</div>
		{/if}

		<div class="grid gap-2">
			<h2 class="font-bold">Description</h2>
			<p>{contract.description}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Amount</h2>
			<p>{formatAmount(contract.amount)}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Start Date</h2>
			<p>{toDateString(new Date(contract.start_date))}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">End Date</h2>
			<p>{toDateString(new Date(contract.end_date))}</p>
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
			<h2 class="font-bold">Approver</h2>
			{#if contract.approver}
				<p>{contract.approver.full_name}</p>
			{:else}
				<p>No approver</p>
			{/if}
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Attachment</h2>

			<Dialog.Root>
				<Dialog.Trigger disabled={loadStatus === 'loading-pdf'}>
					<Button class="flex gap-2" variant="outline">
						{#if loadStatus === 'loading-pdf'}
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

		{#if (isApprover || isSigner) && !['rejected', 'active'].includes(contract.status)}
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
				{#if isApprover && !isSigner}
					<form action="?/approve" method="post" use:enhance>
						<input hidden value={contract.id} name="contract-id" />
						<div class="mt-4 flex gap-4">
							<Button on:click={() => (loadStatus = 'approving-contract')} type="submit">
								{#if loadStatus === 'approving-contract'}
									<Loader2 class="animate-spin" />
								{:else}
									Approve
								{/if}
							</Button>

							<Button
								type="button"
								variant="destructive"
								on:click={() => (showRejectionForm = true)}>Reject</Button
							>
						</div>
					</form>
				{/if}

				{#if isSigner}
					<form action="?/sign" method="post" use:enhance>
						<input hidden value={contract.id} name="contract-id" />
						<div class="mt-4 flex gap-4">
							<Button on:click={() => (loadStatus = 'approving-contract')} type="submit">
								{#if loadStatus === 'approving-contract'}
									<Loader2 class="animate-spin" />
								{:else}
									Sign
								{/if}
							</Button>

							<Button
								type="button"
								variant="destructive"
								on:click={() => (showRejectionForm = true)}>Reject</Button
							>
						</div>
					</form>
				{/if}
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
