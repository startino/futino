<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { contractEntrySchema, type ContractEntryForm } from '$lib/schemas';
	import { navigating, page } from '$app/stores';
	import { Calendar as CalendarIcon, Check, ChevronsUpDown } from 'lucide-svelte';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		CalendarDate,
		today,
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
	import EmployeeDropDown from '$lib/components/atoms/EmployeeDropDown.svelte';
	import { ZodObject } from 'zod';
	import type {PageData} from './$types';
	import * as Command from '$lib/components/ui/command';
	import { onMount, tick } from "svelte"
	import { Skeleton } from '$lib/components/ui/skeleton';
	import type { Tables } from '$lib/server/supabase.types';

	export let data: PageData;
	let form: SuperValidated<ContractEntryForm> = $page.data.form;
	let contractsData: Tables<'contracts'>[]  = $page.data.contractsData;

	

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

	// Update formstore on changing the datepicker value
	$: $formStore.startDate = startDateValue ? new Date(startDateValue.toString()) : new Date(today.toString()); 
	$: $formStore.endDate = endDateValue ? new Date(endDateValue.toString()) : new Date(today.toString());

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

	let parentContractValue: string | undefined = $formStore.parentContract;
	let startDateValue: DateValue | undefined = $formStore.startDate
		? parseDate($formStore.startDate.toString())
		: undefined;
	let endDateValue: DateValue | undefined = $formStore.endDate
		? parseDate($formStore.endDate.toString())
		: undefined;

	let startDatePlaceholder: DateValue = today(getLocalTimeZone());
	let endDatePlaceholder: DateValue = today(getLocalTimeZone());

	async function waitForMe() {
		const contracts = await data.contractsData;
		const organizationUsers =await  data.organizationUsers

		let organizationUsersParsed: { id: string; fullName: string }[] = organizationUsers.map(
		(user) => ({
			id: user.id,
			fullName: user.full_name,
		}));

		let contractsParsed = contracts.map( (contract) =>
			({label: `${contract.vendor}`, value: contract.id})	
	);

		return {contracts: contractsParsed, organizationUsers: organizationUsersParsed}

	}


</script>


<Card.Root class="m-4 h-full p-10">
	<Card.Header
		><Card.Title class="m-0 sm:m-0">Contract Entry Form</Card.Title>
		<Card.Description class="m-0 sm:m-0"
			>Enter the contract details. Once complete this item will be sent for approval.</Card.Description
		></Card.Header
	>
	<Card.Content>
		{#await waitForMe()}
		<h1 class="prose prose-main">HEREEEE LOADINGGG</h1>
		<Skeleton class="w-screen h-screen" />
		{:then {contracts, organizationUsers}} 
		<Form.Root
		method="POST"
		class="w-min space-y-6"
		controlled
		schema={contractEntrySchema}
		form={theForm}
		let:config
	>
		<Form.Field {config} name="parentContract" let:setValue let:value={parentContractValue}>
			<Form.Item class="flex flex-col">
				<Form.Label class="mb-2">Parent Contract</Form.Label>
				
				<Popover.Root let:ids>
					<Popover.Trigger asChild let:builder>
					  <Form.Control id={ids.trigger} let:attrs>
						<Button
						  builders={[builder]}
						  {...attrs}
						  variant="outline"
						  role="combobox"
						  type="button"
						  class={cn(
							"w-[200px] justify-between",
							!parentContractValue && "text-muted-foreground"
						  )}
						>
						  {contracts.find((f) => f.label === parentContractValue)?.label ??
							"Select language"}
						  <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					  </Form.Control>
					</Popover.Trigger>
					<Popover.Content class="w-[200px] p-0" side="right" align="start">
					  <Command.Root>
						<Command.Input autofocus placeholder="Search language..." class="mt-2" />
						<Command.Empty>No language found.</Command.Empty>
						<Command.Group>
						  {#each contracts as contract}
							<Command.Item
							  value={contract.value}
							  onSelect={() => {
								setValue(contract.value);
								closeAndFocusTrigger(ids.trigger);
							  }}
							>
							  <Check
								class={cn(
								  "mr-2 h-4 w-4",
								  contract.value !== parentContractValue && "text-transparent"
								)}
							  />
							  {contract.label}
							</Command.Item>
						  {/each}
						</Command.Group>
					  </Command.Root>
					</Popover.Content>
				  </Popover.Root>
			
				<Form.Description>
					Enter the parent contract number if this is a renewal or extension
				</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="startDate">
			<Form.Item class="flex flex-col">
				<Form.Label for="startDate" class="mb-2">Start Date</Form.Label>
				<Popover.Root>
					<Form.Control id="startDate" let:attrs>
						<Popover.Trigger
							id="startDate"
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
				<Form.Description>The first day that the contract is active and enforced</Form.Description
				>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="endDate">
			<Form.Item class="flex flex-col">
				<Form.Label class="mb-2">End Date</Form.Label>
				<Popover.Root>
					<Form.Control id="endDate" let:attrs>
						<Popover.Trigger
							id="endDate"
							{...attrs}
							class={cn(
								buttonVariants({ variant: 'outline' }),
								'w-[220px] justify-start pl-4 text-left font-normal',
								!endDateValue && 'text-muted-foreground'
							)}
						>
							{endDateValue ? df.format(endDateValue.toDate(getLocalTimeZone())) : 'Pick a date'}
							<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
						</Popover.Trigger>
					</Form.Control>
					<Popover.Content class="w-auto p-0" side="right">
						<DatePicker bind:value={endDateValue} bind:placeholder={endDatePlaceholder} />
					</Popover.Content>
				</Popover.Root>
				<Form.Description>The last day that the contract is active and enforced.</Form.Description
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
		<!--TODO project code input field-->
		<Form.Field {config} name="owner">
			<Form.Item class="flex flex-col">
				<Form.Label class="mb-2">Owner</Form.Label>
				<EmployeeDropDown users={organizationUsers} initialValue={userID} />
				<Form.Description
					>Select the owner of the contract, if it isn't yourself.</Form.Description
				>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="approver">
			<Form.Item class="flex flex-col">
				<Form.Label class="mb-2">Approver</Form.Label>
				<EmployeeDropDown users={organizationUsers} initialValue={userID} />
				<Form.Description
					>Select the owner of the contract, if it isn't yourself.</Form.Description
				>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="amount">
			<Form.Item class="flex flex-col">
				<Form.Label class="mb-2">Amount</Form.Label>
				<div class="flex flex-row place-items-center gap-x-2">
					<Form.Input />
					<Form.Label
						class="border-input flex h-[40px] max-h-[300px] place-items-center rounded-md border px-2"
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
