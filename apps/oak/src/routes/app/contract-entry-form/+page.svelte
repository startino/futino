<script lang="ts">
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import * as Form from '$lib/components/ui/form';
	import { contractEntrySchema, type ContractEntryForm } from '$lib/schemas';
	import { page } from '$app/stores';
	import { Calendar as CalendarIcon, Lock, Paperclip } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		today
	} from '@internationalized/date';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Popover from '$lib/components/ui/popover';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import DatePicker from '$lib/components/atoms/DatePicker.svelte';
	import type { FormOptions } from 'formsnap';
	import Combobox from '$lib/components/atoms/Combobox.svelte';
	import type { PageData } from './$types';
	import { tick } from 'svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import SkeletonForm from '$lib/components/molecules/SkeletonForm.svelte';
	import { formatUSD } from '$lib/helpers';
	import { Label } from '$lib/components/ui/label';
	import * as Dialog from '$lib/components/ui/dialog';
	export let data: PageData;

	const supabase = data.supabase;
	let status: 'uploading' | 'submitting' | 'idle' | 'adding-new-vendor' | 'error' = 'idle';
	let vendorOption: 'search' | 'add' = 'search';

	let fileName: string | null;
	let contractsParsed = [];
	let organizationUsersParsed = [];
	let vendorsParsed = [];
	let departmentsParsed = [];
	let vendorDialogOpen = false;
	let newVendorError = '';

	let form: SuperValidated<ContractEntryForm> = $page.data.form;

	const userID: string = $page.data.userID;

	const theForm = superForm(form, {
		validators: contractEntrySchema,
		taintedMessage: null,
		dataType: 'json'
	});

	const submitting = theForm.submitting;
	const error = theForm.errors;

	$: console.log($error);

	const { form: formStore } = theForm;

	const options: FormOptions<typeof contractEntrySchema> = {
		validators: contractEntrySchema,
		onSubmit: () => {},
		onError: () => {
			// do something else
		}
		// ...
	};

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let parentContractOpen = false;
	function closeAndFocusTrigger(triggerId: string) {
		parentContractOpen = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	let parentContractValue: string | undefined = $formStore.parent_contract;
	let startDateValue: DateValue | undefined = $formStore.start_date
		? parseDate($formStore.start_date.toString())
		: undefined;
	let endDateValue: DateValue | undefined = $formStore.end_date
		? parseDate($formStore.end_date.toString())
		: undefined;

	let startDatePlaceholder: DateValue = today(getLocalTimeZone());
	let endDatePlaceholder: DateValue = today(getLocalTimeZone());

	$: $formStore.start_date = startDateValue ? new Date(startDateValue.toString()) : undefined;
	$: $formStore.end_date = endDateValue ? new Date(endDateValue.toString()) : undefined;

	async function upload(e) {
		status = 'uploading';
		const file = e.target.files[0];
		const path = `/${crypto.randomUUID()}-${file.name}`;

		const { error, data } = await supabase.storage.from('contract-attachments').upload(path, file, {
			cacheControl: '3600',
			upsert: false
		});

		if (error) {
			console.log({ uploadError: error });
			fileName = null;
		} else {
			fileName = file.name;
			formStore.update((v) => ({ ...v, attachment: data.path }));
		}

		status = 'idle';
	}

	async function addVendor(e) {
		vendorDialogOpen = true;
		status = 'adding-new-vendor';

		const idError = await theForm.validate('new_vendor.department_id');
		const nameError = await theForm.validate('new_vendor.name');

		if (idError || nameError) {
			console.error('Error adding new vendor');
			status = 'idle';
			return;
		}

		const response = await fetch('/api/vendor', {
			method: 'POST',
			body: JSON.stringify({ ...$formStore.new_vendor, organization_id: data.organization_id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { error, vendor } = await response.json();

		status = 'idle';

		if (error) {
			newVendorError = 'Something went wrong...Please, try again';
			return;
		}

		vendorsParsed = [{ label: vendor.name, value: vendor.id }, ...vendorsParsed];

		formStore.update((v) => ({ ...v, vendor_id: vendor.id }));

		vendorDialogOpen = false;
	}

	async function waitForRequiredData() {
		const contractsWithVendor = await data.contractsWithVendors;
		const organizationUsers = await data.organizationUsers;
		const vendors = await data.vendors;
		const departments = await data.departments;

		departmentsParsed = departments.map((department) => ({
			value: department.id,
			label: department.name
		}));

		organizationUsersParsed = organizationUsers.map((user) => ({
			value: user.id,
			label: user.full_name
		}));

		contractsParsed = contractsWithVendor.map((contract) => ({
			label: `${contract.vendor_name} | ${formatUSD(contract.amount)} | ${contract.start_date} | ${contract.end_date}`,
			value: contract.id
		}));

		vendorsParsed = vendors.map((vendor) => ({
			label: vendor.name,
			value: vendor.id
		}));

		return {
			contracts: contractsParsed,
			organizationUsers: organizationUsersParsed,
			vendors: vendorsParsed,
			departments: departmentsParsed
		};
	}
</script>

<Card.Root class="h-full p-10">
	<Card.Header
		><Card.Title class="m-0">Contract Entry Form</Card.Title>
		<Card.Description class="m-0"
			>Enter the contract details. Once complete this item will be sent for approval.</Card.Description
		></Card.Header
	>
	<Card.Content>
		{#await waitForRequiredData()}
			<SkeletonForm />
		{:then { contracts, organizationUsers, departments }}
			<Form.Root
				method="POST"
				class="max-w-xl space-y-6"
				controlled
				schema={contractEntrySchema}
				form={theForm}
				let:config
			>
				<Form.Field {config} name="parent_contract" let:setValue>
					<Form.Item class="grid">
						<Form.Label class="mb-2">Parent Contract</Form.Label>
						<Combobox items={contracts} {setValue} />
						<Form.Description>
							Enter the parent contract number if this is a renewal or extension
						</Form.Description>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Field {config} name="start_date">
					<Form.Item class="grid">
						<Form.Label for="start_date" class="mb-2">Start Date</Form.Label>
						<Popover.Root>
							<Form.Control id="start_date" let:attrs>
								<Popover.Trigger
									id="start_date"
									{...attrs}
									class={cn(
										buttonVariants({ variant: 'outline' }),
										'w-[220px] justify-start pl-4 text-left font-normal',
										!startDateValue && 'text-muted-foreground'
									)}
								>
									{startDateValue
										? df.format(startDateValue.toDate(getLocalTimeZone()))
										: 'Pick a date'}
									<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
								</Popover.Trigger>
							</Form.Control>
							<Popover.Content class="w-auto p-0" side="right">
								<DatePicker bind:value={startDateValue} bind:placeholder={startDatePlaceholder} />
							</Popover.Content>
						</Popover.Root>
						<Form.Description
							>The first day that the contract is active and enforced</Form.Description
						>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Field {config} name="end_date">
					<Form.Item class="grid">
						<Form.Label class="mb-2">End Date</Form.Label>
						<Popover.Root>
							<Form.Control id="end_date" let:attrs>
								<Popover.Trigger
									id="end_date"
									{...attrs}
									class={cn(
										buttonVariants({ variant: 'outline' }),
										'w-[220px] justify-start pl-4 text-left font-normal',
										!endDateValue && 'text-muted-foreground'
									)}
								>
									{endDateValue
										? df.format(endDateValue.toDate(getLocalTimeZone()))
										: 'Pick a date'}
									<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
								</Popover.Trigger>
							</Form.Control>
							<Popover.Content class="w-auto p-0" side="right">
								<DatePicker bind:value={endDateValue} bind:placeholder={endDatePlaceholder} />
							</Popover.Content>
						</Popover.Root>
						<Form.Description
							>The last day that the contract is active and enforced.</Form.Description
						>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Field {config} name="description">
					<Form.Item class="grid">
						<Form.Label class="mb-2">Description</Form.Label>
						<Form.Textarea
							placeholder="Free text field to describe the contract if needed."
							class="resize-none"
						/>
						<Form.Description>Free text field to describe the contract if needed.</Form.Description>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Field {config} name="vendor_id" let:setValue>
					<Form.Item class="grid">
						<Form.Label class="mb-2">Vendor</Form.Label>
						<Combobox
							items={vendorsParsed}
							bind:value={$formStore.vendor_id}
							placeholder="Search for a vendor"
							{setValue}
						/>
						<Form.Validation />

						<Dialog.Root open={vendorDialogOpen} closeOnEscape>
							<Dialog.Trigger
								class={`${buttonVariants({ variant: 'default' })} justify-self-start`}
							>
								Add new vendor
							</Dialog.Trigger>
							<Dialog.Content class="">
								<Dialog.Header>
									<Dialog.Title>Add new vender</Dialog.Title>
								</Dialog.Header>
								<div class="gap-4">
									<Form.Field {config} name="new_vendor.name">
										<Form.Item class="grid">
											<Form.Label class="mb-2">Name</Form.Label>
											<Form.Input placeholder="Name" />
											<Form.Validation />
										</Form.Item>
									</Form.Field>
									<Form.Field {config} name="new_vendor.department_id" let:setValue>
										<Form.Item class="grid">
											<Form.Label class="mb-2">Department</Form.Label>
											<Combobox
												items={departments}
												placeholder="Search for a department"
												{setValue}
											/>
										</Form.Item>
									</Form.Field>
									<span class="text-destructive">{newVendorError}</span>
								</div>
								<Dialog.Footer>
									<Button
										type="button"
										on:click={addVendor}
										disabled={status === 'adding-new-vendor'}
										>{status === 'adding-new-vendor' ? 'Adding...' : 'Add'}</Button
									>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
					</Form.Item>
				</Form.Field>

				<!--TODO project code input field-->
				<Form.Field {config} name="owner" let:setValue>
					<Form.Item class="grid">
						<Form.Label class="mb-2">Owner</Form.Label>
						<Combobox items={organizationUsers} value={userID} {setValue} />
						<Form.Description>
							Select the owner of the contract, if it isn't yourself.
						</Form.Description>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<div>
					{#await $page.data.approversWithNames}
						<div class="flex">
							<Skeleton class="h-[40px] w-[200px] rounded-md" />
							<Skeleton class="ml-2 h-[40px] w-[500px] rounded-md" />
						</div>
					{:then approvers}
						<Label for="terms">Approvers <Lock class="mb-1 ml-1 inline-block h-4 w-4" /></Label>
						<div class="flex max-w-xs flex-wrap gap-2">
							{#if approvers[0]}
								{#each approvers as { name }}
									<div class="mt-2 block w-fit rounded-md border">
										<h6 class="not-prose whitespace-nowrap px-4 py-3 text-sm text-muted">{name}</h6>
									</div>
								{/each}
							{:else}
								<p class="text-destructive">No approvers</p>
							{/if}
						</div>
					{/await}
				</div>
				<Form.Field {config} name="amount">
					<Form.Item class="grid">
						<Form.Label class="mb-2">Amount</Form.Label>
						<div class="flex flex-row place-items-center gap-x-2">
							<Form.Input type="number" />
							<Form.Label
								class="flex h-[40px] max-h-[300px] place-items-center rounded-md border border-input px-2"
								>USD</Form.Label
							>
						</div>
						<Form.Description>Enter the amount of the contract.</Form.Description>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Field {config} name="attachment">
					<Form.Item class="">
						<Form.Label class="mb-2">Attachment</Form.Label>
						<label class="mb-2 block cursor-pointer">
							<input hidden type="file" on:input={upload} />
							<div
								class="flex w-fit items-center justify-start gap-4 rounded-md border border-input px-3 py-2"
							>
								{#if status === 'uploading'}
									Uploading...
								{:else if fileName}
									{fileName}
								{:else}
									Upload file
								{/if}
								<Paperclip />
							</div>
						</label>
						<Form.Input class="hidden" />

						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Button type="submit" disabled={status === 'uploading' || $submitting}
					>Submit</Form.Button
				>
			</Form.Root>
		{/await}
	</Card.Content>
</Card.Root>
