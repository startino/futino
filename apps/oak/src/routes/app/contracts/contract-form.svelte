<script lang="ts">
	import { Loader2, Paperclip } from 'lucide-svelte';
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { superForm, fileProxy } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		today
	} from '@internationalized/date';

	import { Combobox } from '$lib/components/ui/combobox';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Input } from '$lib/components/ui/input';
	import DatePicker from '$lib/components/atoms/DatePicker.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { getContext } from '$lib/utils';
	import * as Form from '$lib/components/ui/form';
	import {
		type ContractSchema,
		type OptionalContractSchema,
		contractSchema,
		optionalContractSchema
	} from '$lib/schemas';
	import type { ContractDatableRow } from '$lib/types';
	import { DateInput } from '$lib/components/ui/date-input';

	export let data: SuperValidated<Infer<ContractSchema | OptionalContractSchema>>;
	export let onSuccess: () => void = () => {};
	export let onVendorSelect: (vendorId: string | null) => void = () => {};
	export let action: `?/${string}` | undefined = undefined;
	export let type: 'create' | 'update' | 'review-update' = 'create';
	export let parentContracts: ContractDatableRow[] = [];

	const form = superForm(data, {
		validators: zodClient(type === 'create' ? contractSchema : optionalContractSchema),
		onUpdate: ({ form }) => {
			if (form.valid) {
				onSuccess();
				startDateValue = undefined;
				endDateValue = undefined;
				fileName = null;

				if (type === 'create') {
					reset();
				}
			}
		}
	});

	const { form: formData, enhance, errors, delayed, reset, isTainted, tainted } = form;
	const file = fileProxy(formData, 'attachment');
	const currentProfile = getContext('currentProfile');
	const projects = getContext('projects');
	const accounts = getContext('accounts');
	const departments = getContext('departments');
	const spendCategories = getContext('spendCategories');
	const vendors = getContext('vendors');
	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let fileName: string | null = null;
	let startDateValue = $formData.start_date
		? parseDate($formData.start_date.toString())
		: undefined;
	let endDateValue = $formData.end_date ? parseDate($formData.end_date.toString()) : undefined;
	let startDatePlaceholder: DateValue = today(getLocalTimeZone());
	let endDatePlaceholder: DateValue = today(getLocalTimeZone());

	$formData.department_id = $currentProfile.department_id;
	$: $formData.start_date = startDateValue ? startDateValue.toString() : undefined;
	$: $formData.end_date = endDateValue ? endDateValue.toString() : undefined;
</script>

<form method="POST" {action} enctype="multipart/form-data" class="grid gap-4" use:enhance>
	{#if ['create', 'update'].includes(type)}
		<Form.Field {form} name="vendor_id">
			<Form.Control let:attrs>
				<Form.Label>Vendor</Form.Label>
				<div>
					<Combobox
						placeholder="Select a vendor"
						items={$vendors.map((v) => ({ label: v.name, value: v.id }))}
						bind:value={$formData.vendor_id}
						onChange={(v) => onVendorSelect(v)}
						{attrs}
					/>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="parent_contract_id">
			<Form.Control let:attrs>
				<Form.Label>Parent contract</Form.Label>
				<div>
					{#if parentContracts[0]}
						<Combobox
							placeholder="Select a parent contract"
							items={parentContracts.map((c) => ({
								label: {
									heading: `#${c.number} | ${c.vendor.name}`,
									content: c.description
								},
								value: c.id
							}))}
							bind:value={$formData.parent_contract_id}
							{attrs}
						/>
					{:else}
						<p class="text-xs font-bold text-accent">No parent contract</p>
					{/if}
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="account_id">
			<Form.Control let:attrs>
				<Form.Label>Account number</Form.Label>
				<div>
					<Combobox
						placeholder="Select an account number"
						items={$accounts.map((c) => ({ label: c.number.toString(), value: c.id }))}
						bind:value={$formData.account_id}
						{attrs}
					/>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="spend_category_id">
			<Form.Control let:attrs>
				<Form.Label>Spend category</Form.Label>
				<div>
					<Combobox
						placeholder="Select a spend category"
						items={$spendCategories.map((c) => ({ label: c.name, value: c.id }))}
						bind:value={$formData.spend_category_id}
						{attrs}
					/>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="department_id">
			<Form.Control let:attrs>
				<Form.Label>Department</Form.Label>
				<div>
					<Combobox
						placeholder="Select a department"
						items={$departments.map((d) => ({ label: d.name, value: d.id }))}
						bind:value={$formData.department_id}
						{attrs}
					/>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="project_id">
			<Form.Control let:attrs>
				<Form.Label>Project</Form.Label>
				<div>
					<Combobox
						placeholder="Select a project"
						items={$projects.map((d) => ({ label: d.name, value: d.id }))}
						bind:value={$formData.project_id}
						{attrs}
					/>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="description">
			<Form.Control let:attrs>
				<Form.Label>Description</Form.Label>
				<Textarea {...attrs} bind:value={$formData.description} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="amount">
			<Form.Control let:attrs>
				<Form.Label>Amount</Form.Label>
				<Input
					type="number"
					{...attrs}
					bind:value={$formData.amount}
					on:change={(e) => ($formData.amount = +e.currentTarget.value)}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	{/if}
	<Form.Field {form} name="start_date">
		<Form.Control let:attrs>
			<Form.Label>Start Date</Form.Label>
			<input hidden bind:value={$formData.start_date} {...attrs} />
			<Popover.Root>
				<div>
					<DateInput bind:value={startDateValue} />
				</div>
				<Popover.Content class="w-auto p-0" side="right">
					<DatePicker bind:value={startDateValue} bind:placeholder={startDatePlaceholder} />
				</Popover.Content>
			</Popover.Root>
		</Form.Control>
	</Form.Field>

	<Form.Field {form} name="end_date">
		<Form.Control>
			<Form.Label>End Date</Form.Label>
			<Popover.Root>
				<Form.Control let:attrs>
					<input hidden bind:value={$formData.end_date} {...attrs} />
					<div>
						<DateInput bind:value={endDateValue} />
					</div>
				</Form.Control>
				<Popover.Content class="w-auto p-0" side="right">
					<DatePicker bind:value={endDateValue} bind:placeholder={endDatePlaceholder} />
				</Popover.Content>
			</Popover.Root>
			<Form.FieldErrors />
		</Form.Control>
	</Form.Field>

	{#if ['create', 'update'].includes(type)}
		<Form.Field {form} name="attachment">
			<Form.Control let:attrs>
				<Form.Label class="cursor-pointer">
					<span class="mb-2 block">Attachment</span>
					<div
						class="flex w-fit items-center justify-start gap-4 rounded-md border border-input px-3 py-2"
					>
						{#if fileName}
							{fileName}
						{:else if type === 'update'}
							Replace contract PDF
						{:else}
							Select contract PDF
						{/if}
						<Paperclip />
					</div>
					<input
						hidden
						type="file"
						accept="application/pdf"
						name="attachment"
						on:input={(e) => (fileName = e.currentTarget.files[0].name)}
						bind:files={$file}
						{...attrs}
						class="hidden"
					/>
				</Form.Label>

				<Form.FieldErrors />
			</Form.Control>
		</Form.Field>
	{/if}
	<Form.Button disabled={!isTainted($tainted) || $delayed} type="submit" class="my-4 w-full">
		{#if $delayed}
			<Loader2 class="animate-spin" />
		{:else}
			Submit
		{/if}
	</Form.Button>

	{#if $errors._errors}
		<p class="text-sm text-destructive">{$errors._errors[0]}</p>
	{/if}
</form>
