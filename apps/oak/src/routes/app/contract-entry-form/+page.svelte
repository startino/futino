<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { contractEntrySchema, type ContractEntryForm } from '$lib/schemas';
	import { navigating, page } from '$app/stores';
	import { Calendar as CalendarIcon, Check, ChevronsUpDown, Lock } from 'lucide-svelte';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		CalendarDate,
		today
	} from '@internationalized/date';
	import { cn } from '$lib/utils';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Card from '$lib/components/ui/card';
	import * as Popover from '$lib/components/ui/popover';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm, type SuperForm } from 'sveltekit-superforms/client';
	import DatePicker from '$lib/components/atoms/DatePicker.svelte';
	import type { FormOptions } from 'formsnap';
	import Combobox from '$lib/components/atoms/Combobox.svelte';
	import { ZodObject } from 'zod';
	import type { PageData } from './$types';
	import * as Command from '$lib/components/ui/command';
	import { onMount, tick } from 'svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import SkeletonForm from '$lib/components/molecules/SkeletonForm.svelte';
	import { fade } from 'svelte/transition';
	import { formatUSD } from '$lib/helpers';
	import { Label } from '$lib/components/ui/label';

	export let data: PageData;
	let form: SuperValidated<ContractEntryForm> = $page.data.form;

	const userID: string = $page.data.userID;

	const theForm = superForm(form, {
		validators: contractEntrySchema,
		taintedMessage: null
	});

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

	async function waitForRequiredData() {
		const contractsWithVendor = await data.contractsWithVendors;
		const organizationUsers = await data.organizationUsers;
		const vendors = await data.vendors;

		let organizationUsersParsed = organizationUsers.map(
			(user) => ({
				value: user.id,
				label: user.full_name
			})
		);

		let contractsParsed = contractsWithVendor.map((contract) => ({
			label: `${contract.vendor_name} | ${formatUSD(contract.amount)} | ${contract.start_date} | ${contract.end_date}`,
			value: contract.id
		}));

		let vendorsParsed = vendors.map((vendor) => ({
			label: vendor.name,
			value: vendor.id
		}));

		return { contracts: contractsParsed, organizationUsers: organizationUsersParsed, vendors: vendorsParsed };
	}
</script>

<Card.Root class=" h-full p-10">
	<Card.Header
		><Card.Title class="m-0 sm:m-0">Contract Entry Form</Card.Title>
		<Card.Description class="m-0 sm:m-0"
			>Enter the contract details. Once complete this item will be sent for approval.</Card.Description
		></Card.Header
	>
	<Card.Content>
		{#await waitForRequiredData()}
			<SkeletonForm />
		{:then { contracts, organizationUsers, vendors}}
			<Form.Root
				method="POST"
				class="w-min space-y-6"
				controlled
				schema={contractEntrySchema}
				form={theForm}
				let:config
			>
				<Form.Field {config} name="parent_contract" let:setValue let:value>
					<Form.Item class="flex flex-col">
						<Form.Label class="mb-2">Parent Contract</Form.Label>
						<Combobox items={contracts} initialValue={userID} {setValue} />
						<Form.Description>
							Enter the parent contract number if this is a renewal or extension
						</Form.Description>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Field {config} name="start_date" >
					<Form.Item class="flex flex-col">
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
					<Form.Item class="flex flex-col">
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
					<Form.Item class="flex flex-col">
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
					<Form.Item class="flex flex-col">
						<Form.Label class="mb-2">Vendor</Form.Label>
						<Combobox items={vendors} placeholder="Search for a vendor" {setValue}/>
						<Form.Description
							>Select the owner of the contract, if it isn't yourself.</Form.Description
						>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<!--TODO project code input field-->
				<Form.Field {config} name="creator" let:setValue >
					<Form.Item class="flex flex-col">
						<Form.Label class="mb-2">Owner</Form.Label>
						<Combobox items={organizationUsers} initialValue={userID} {setValue} />
						<Form.Description
							>Select the owner of the contract, if it isn't yourself.</Form.Description
						>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<div>
					{#await $page.data.approversWithNames}
					<div class="flex">
						<Skeleton class="w-[200px] h-[40px] rounded-md" />
						<Skeleton class="w-[500px] h-[40px] rounded-md ml-2" />
					</div>
					{:then approvers}
					<Label for="terms" >Approvers <Lock class="ml-1 inline-block h-4 w-4 mb-1" /></Label>
					<div class="flex gap-2 max-w-xs flex-wrap">
					{#each approvers as {name}}
						<div class="block rounded-md border w-fit mt-2"> 
							<h6 class="not-prose text-sm px-4 py-3 whitespace-nowrap text-muted">{name}</h6>
						</div>
					{/each}
				</div>
					{/await}
				</div>
				<Form.Field {config} name="amount">
					<Form.Item class="flex flex-col">
						<Form.Label class="mb-2">Amount</Form.Label>
						<div class="flex flex-row place-items-center gap-x-2">
							<Form.Input />
							<Form.Label
								class="flex h-[40px] max-h-[300px] place-items-center rounded-md border border-input px-2"
								>USD</Form.Label
							>
						</div>
						<Form.Description>Enter the amount of the contract.</Form.Description>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Button>Submit</Form.Button>
			</Form.Root>
		{/await}
	</Card.Content>
</Card.Root>
