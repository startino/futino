<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { contractEntrySchema, type ContractEntryForm } from '$lib/schemas';
	import { page } from '$app/stores';
	import { Calendar as CalendarIcon } from 'lucide-svelte';
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

	export let form: SuperValidated<ContractEntryForm> = $page.data.datePicker;

	const theForm: SuperForm<ContractEntryForm> = superForm(form, {
		validators: contractEntrySchema,
		taintedMessage: null
	});

	const { form: formStore } = theForm;

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let startDateValue: DateValue | undefined = $formStore.startDate
		? parseDate($formStore.startDate)
		: undefined;
	let endDateValue: DateValue | undefined = $formStore.endDate
		? parseDate($formStore.endDate)
		: undefined;

	let startDatePlaceholder: DateValue = today(getLocalTimeZone());
	let endDatePlaceholder: DateValue = today(getLocalTimeZone());
</script>

<Card.Root class="mx-auto  mx-4 p-12">
	<Card.Header
		><Card.Title class="m-0 sm:m-0">Contract Entry Form</Card.Title>
		<Card.Description class="m-0 sm:m-0"
			>Enter the contract details. Once complete this item will be sent for approval.</Card.Description
		></Card.Header
	>
	<Card.Content>
		<Form.Root class="space-y-6" schema={contractEntrySchema} {form} let:config>
			<Form.Field {config} name="parentContract">
				<Form.Item>
					<Form.Label>Parent Contract</Form.Label>
					<Form.Input />
					<Form.Description>
						Enter the parent contract number if this is a renewal or extension
					</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="startDate">
				<Form.Item class="flex flex-col">
					<Form.Label for="startDate">Start Date</Form.Label>
					<Popover.Root>
						<Form.Control id="startDate" let:attrs>
							<Popover.Trigger
								id="startDate"
								{...attrs}
								class={cn(
									buttonVariants({ variant: 'outline' }),
									'w-[280px] justify-start pl-4 text-left font-normal',
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
			<Form.Field {config} name="startDate">
				<Form.Item class="flex flex-col">
					<Form.Label for="startDate">End Date</Form.Label>
					<Popover.Root>
						<Form.Control id="startDate" let:attrs>
							<Popover.Trigger
								id="startDate"
								{...attrs}
								class={cn(
									buttonVariants({ variant: 'outline' }),
									'w-[280px] justify-start pl-4 text-left font-normal',
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
			<Button type="submit">Submit</Button>
		</Form.Root>
	</Card.Content>
</Card.Root>
