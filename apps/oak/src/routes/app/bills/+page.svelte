<script lang="ts">
	import { Plus, CalendarIcon, Loader2 } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { DateFormatter, getLocalTimeZone, parseDate } from '@internationalized/date';

	import DataTable from './data-table.svelte';
	import { Input } from '$lib/components/ui/input';
	import DatePicker from '$lib/components/atoms/DatePicker.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import { Combobox } from '$lib/components/ui/combobox';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { getContext, cn } from '$lib/utils';
	import type { Tables } from '$lib/server/supabase.types';
	import { billSchema } from '$lib/schemas';
	import * as Form from '$lib/components/ui/form';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(billSchema),
		onUpdate: ({ form }) => {
			if (form.valid) {
				toast.success('Valid!');
				formOpen = false;
			} else {
				toast.error('Invalid!');
			}
		}
	});

	const vendors = getContext('vendors');
	const { form: formData, enhance, errors, delayed } = form;
	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let formOpen = false;
	let loadingContracts = false;
	let vendorContracts: Tables<'contracts'>[] | null = null;
	let invoiceDate = $formData.invoice_date ? parseDate($formData.invoice_date) : undefined;
	let dueDate = $formData.due_date ? parseDate($formData.due_date) : undefined;
	let accrualPeriod = $formData.accrual_period ? parseDate($formData.accrual_period) : undefined;
	let postingPeriod = $formData.posting_period ? parseDate($formData.posting_period) : undefined;

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

	$: $formData.invoice_date = invoiceDate ? invoiceDate.toString() : undefined;
	$: $formData.due_date = dueDate ? dueDate.toString() : undefined;
	$: $formData.accrual_period = accrualPeriod ? accrualPeriod.toString() : undefined;
	$: $formData.posting_period = postingPeriod ? postingPeriod.toString() : undefined;
</script>

<h1 class="mb-10 text-3xl">Bills</h1>
{#key data.bills}
	<DataTable data={data.bills}>
		<svelte:fragment slot="entry-form">
			<FormDialog bind:open={formOpen} title="Add bill">
				<svelte:fragment slot="trigger">
					<Dialog.Trigger>
						<Button><Plus />Add</Button>
					</Dialog.Trigger>
				</svelte:fragment>
				<form method="post" use:enhance class="grid gap-4">
					<input hidden bind:value={$formData.department_id} name="department_id" />
					<input hidden bind:value={$formData.spend_category_id} name="spend_category_id" />
					<input hidden bind:value={$formData.project_id} name="project_id" />
					<input hidden bind:value={$formData.account_id} name="account_id" />

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
									bind:value={$formData.vendor_id}
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

						<Form.Field {form} name="invoice_date">
							<Form.Control>
								<Form.Label>Invoice Date</Form.Label>
								<Popover.Root>
									<Form.Control let:attrs>
										<input hidden bind:value={$formData.invoice_date} {...attrs} />
										<div>
											<Popover.Trigger
												class={cn(
													buttonVariants({ variant: 'outline' }),
													'w-[220px] justify-start pl-4 text-left font-normal',
													!invoiceDate && 'text-muted-foreground'
												)}
											>
												{invoiceDate
													? df.format(invoiceDate.toDate(getLocalTimeZone()))
													: 'Pick a date'}
												<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
											</Popover.Trigger>
										</div>
									</Form.Control>
									<Popover.Content class="w-auto p-0" side="left">
										<DatePicker bind:value={invoiceDate} />
									</Popover.Content>
								</Popover.Root>
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
											<Popover.Trigger
												class={cn(
													buttonVariants({ variant: 'outline' }),
													'w-[220px] justify-start pl-4 text-left font-normal',
													!dueDate && 'text-muted-foreground'
												)}
											>
												{dueDate ? df.format(dueDate.toDate(getLocalTimeZone())) : 'Pick a date'}
												<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
											</Popover.Trigger>
										</div>
									</Form.Control>
									<Popover.Content class="w-auto p-0" side="left">
										<DatePicker bind:value={dueDate} />
									</Popover.Content>
								</Popover.Root>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="accrual_period">
							<Form.Control>
								<Form.Label>Accrual Period</Form.Label>
								<Popover.Root>
									<Form.Control let:attrs>
										<input hidden bind:value={$formData.due_date} {...attrs} />
										<div>
											<Popover.Trigger
												class={cn(
													buttonVariants({ variant: 'outline' }),
													'w-[220px] justify-start pl-4 text-left font-normal',
													!accrualPeriod && 'text-muted-foreground'
												)}
											>
												{accrualPeriod
													? df.format(accrualPeriod.toDate(getLocalTimeZone()))
													: 'Pick a date'}
												<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
											</Popover.Trigger>
										</div>
									</Form.Control>
									<Popover.Content class="w-auto p-0" side="left">
										<DatePicker bind:value={accrualPeriod} />
									</Popover.Content>
								</Popover.Root>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="posting_period">
							<Form.Control>
								<Form.Label>Posting Period</Form.Label>
								<Popover.Root>
									<Form.Control let:attrs>
										<input hidden bind:value={$formData.due_date} {...attrs} />
										<div>
											<Popover.Trigger
												class={cn(
													buttonVariants({ variant: 'outline' }),
													'w-[220px] justify-start pl-4 text-left font-normal',
													!postingPeriod && 'text-muted-foreground'
												)}
											>
												{postingPeriod
													? df.format(postingPeriod.toDate(getLocalTimeZone()))
													: 'Pick a date'}
												<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
											</Popover.Trigger>
										</div>
									</Form.Control>
									<Popover.Content class="w-auto p-0" side="left">
										<DatePicker bind:value={postingPeriod} />
									</Popover.Content>
								</Popover.Root>
							</Form.Control>
							<Form.FieldErrors />
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
			</FormDialog>
		</svelte:fragment>
	</DataTable>
{/key}
