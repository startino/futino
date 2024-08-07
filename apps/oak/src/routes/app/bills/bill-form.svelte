<script lang="ts">
	import { CalendarIcon, Loader2, Paperclip } from 'lucide-svelte';
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { superForm, fileProxy } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { DateFormatter, getLocalTimeZone, parseDate } from '@internationalized/date';

	import { Combobox } from '$lib/components/ui/combobox';
	import { Textarea } from '$lib/components/ui/textarea';

	import * as Popover from '$lib/components/ui/popover';
	import { Input } from '$lib/components/ui/input';
	import type { Tables } from '$lib/server/supabase.types';
	import {
		type BillSchema,
		type OptionalBillSchema,
		billSchema,
		optionalBillSchema
	} from '$lib/schemas';
	import * as Form from '$lib/components/ui/form';
	import { getContext, cn, toDateString } from '$lib/utils';
	import { onMount } from 'svelte';
	import DateInput from '$lib/components/ui/date-input/date-input.svelte';
	import { MonthPicker } from '$lib/components/ui/month-picker';
	import { toDate } from 'date-fns-tz';

	export let data: SuperValidated<Infer<BillSchema | OptionalBillSchema>>;
	export let onSuccess: () => void = () => {};
	export let action: `?/${string}` | undefined = undefined;
	export let type: 'create' | 'update' = 'create';

	const form = superForm(data, {
		validators: zodClient(type === 'create' ? billSchema : optionalBillSchema),
		onUpdate: ({ form }) => {
			if (form.valid) {
				onSuccess();
				invoiceDate = undefined;
				dueDate = undefined;
				fileName = null;
				if (type === 'create') {
					reset();
				}
			}
		}
	});

	const vendors = getContext('vendors');
	const accounts = getContext('accounts');
	const departments = getContext('departments');
	const spendCategories = getContext('spendCategories');
	const projects = getContext('projects');

	const { form: formData, enhance, errors, delayed, reset } = form;
	const file = fileProxy(formData, 'attachment');

	let fileName: string | null = null;
	let loadingContracts = false;
	let vendorContracts: Tables<'contracts'>[] | null = null;
	let invoiceDate = $formData.invoice_date ? parseDate($formData.invoice_date) : undefined;
	let dueDate = $formData.due_date ? parseDate($formData.due_date) : undefined;
	let selectedVendorId: string | null = null;

	const fetchContracts = async (vendorId: string) => {
		loadingContracts = true;
		vendorContracts = null;
		const response = await fetch(`/api/bill-contracts/${vendorId}`, { method: 'GET' });

		response
			.json()
			.then((contracts) => {
				vendorContracts = contracts as Tables<'contracts'>[];
				if (vendorContracts.length === 0) {
					$errors.vendor_id = ['No active contracts for this vendor'];
				}
			})
			.catch(() => {
				$errors.vendor_id = ["Unable to get vendor's contracts. Please try again"];
				$formData.vendor_id = undefined;
			});

		loadingContracts = false;
	};

	const handleContract = (v: string) => {
		if (!v) {
			return;
		}
		const contract = vendorContracts.find((c) => c.id === v);
		$formData.account_id = contract.account_id;
		$formData.department_id = contract.department_id;
		$formData.spend_category_id = contract.spend_category_id;
		$formData.project_id = contract.project_id;
	};

	onMount(() => {
		$formData.vendor_id && fetchContracts($formData.vendor_id);
	});

	$: console.log($errors);

	$: $formData.invoice_date = invoiceDate ? invoiceDate.toString() : undefined;
	$: if (!dueDate && invoiceDate) {
		dueDate = invoiceDate.add({ days: 30 });
	}
	$: $formData.due_date = dueDate ? dueDate.toString() : undefined;
	$: $formData.readable_id =
		selectedVendorId && invoiceDate
			? `${$vendors.find((v) => v.id === selectedVendorId).name}_${toDateString(toDate(invoiceDate.toString()))}`
			: undefined;
	$: $formData.vendor_id = selectedVendorId;
</script>

<form method="post" {action} enctype="multipart/form-data" use:enhance class="grid gap-4">
	<input hidden bind:value={$formData.department_id} name="department_id" />
	<input hidden bind:value={$formData.spend_category_id} name="spend_category_id" />
	<input hidden bind:value={$formData.project_id} name="project_id" />
	<input hidden bind:value={$formData.account_id} name="account_id" />
	<input hidden bind:value={$formData.readable_id} name="readable_id" />

	<Form.Field {form} name="vendor_id">
		<Form.Control let:attrs>
			<input hidden bind:value={$formData.vendor_id} {...attrs} />
			<Form.Label>Vendor</Form.Label>
			<div>
				<Combobox
					placeholder="Select a vendor"
					disabled={loadingContracts}
					loading={loadingContracts}
					items={$vendors.map((v) => ({ label: v.name, value: v.id }))}
					bind:value={selectedVendorId}
					onChange={async (v) => {
						if (!v) {
							$formData.vendor_id = undefined;
							vendorContracts = null;
							return;
						}
						await fetchContracts(v);
					}}
				/>
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	{#if vendorContracts && $formData.vendor_id && !$errors.vendor_id}
		<Form.Field {form} name="contract_id">
			<Form.Control let:attrs>
				<Form.Label>Contract</Form.Label>
				<div>
					<Combobox
						placeholder="Select a contract"
						bind:value={$formData.contract_id}
						items={vendorContracts.map((c) => ({
							label: {
								heading: `#${c.number}`,
								content: c.description
							},
							value: c.id
						}))}
						{attrs}
						onChange={handleContract}
					/>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		{#if $formData.contract_id}
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
		{/if}

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
					{...attrs}
					on:change={(e) => ($formData.amount = +e.currentTarget.value)}
					bind:value={$formData.amount}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="number">
			<Form.Control let:attrs>
				<Form.Label>Number</Form.Label>
				<Input
					{...attrs}
					on:change={(e) => ($formData.number = +e.currentTarget.value)}
					bind:value={$formData.number}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="invoice_date">
			<Form.Control let:attrs>
				<Form.Label>Invoice Date</Form.Label>
				<input hidden bind:value={$formData.invoice_date} {...attrs} />
				<div>
					<DateInput bind:value={invoiceDate} />
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="due_date">
			<Form.Control>
				<Form.Label>Due Date</Form.Label>
				<Popover.Root>
					<Form.Control let:attrs>
						<input hidden bind:value={$formData.due_date} {...attrs} />
						<div>
							<DateInput bind:value={dueDate} />
						</div>
					</Form.Control>
				</Popover.Root>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="accrual_period">
			<Form.Control>
				<Form.Label>Accrual Period</Form.Label>
				<Popover.Root>
					<Form.Control let:attrs>
						<div>
							<MonthPicker bind:value={$formData.accrual_period} {...attrs} />
						</div>
					</Form.Control>
				</Popover.Root>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="attachment">
			<Form.Control let:attrs>
				<Form.Label class="cursor-pointer">
					<span class="mb-2 block">Attachment</span>
					<div
						class="flex w-fit items-center justify-start gap-4 rounded-md border border-input px-3 py-2"
					>
						{#if fileName}
							{fileName}
						{:else}
							{type === 'create' ? 'Select invoice PDF' : 'Replace existing invoice PDF'}
						{/if}
						<Paperclip />
					</div>
					<input
						hidden
						type="file"
						accept="application/pdf"
						on:input={(e) => (fileName = e.currentTarget.files[0]?.name ?? null)}
						bind:files={$file}
						{...attrs}
						class="hidden"
					/>
				</Form.Label>

				<Form.FieldErrors />
			</Form.Control>
		</Form.Field>

		<Form.Button disabled={$delayed} type="submit">
			{#if $delayed}
				<Loader2 class="animate-spin" />
			{:else}
				submit
			{/if}
		</Form.Button>
	{/if}
</form>
