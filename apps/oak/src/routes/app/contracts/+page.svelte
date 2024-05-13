<script lang="ts">
	import { onMount } from 'svelte';
	import { CalendarIcon, Paperclip, Loader2, Plus } from 'lucide-svelte';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { fileProxy, superForm } from 'sveltekit-superforms/client';
	import { toast } from 'svelte-sonner';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		today
	} from '@internationalized/date';

	import Combobox from '$lib/components/atoms/Combobox.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { getContext, cn } from '$lib/utils';
	import DataTable from './data-table.svelte';
	import DatePicker from '$lib/components/atoms/DatePicker.svelte';
	import { contractSchema } from '$lib/schemas';
	import * as Popover from '$lib/components/ui/popover';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { buttonVariants } from '$lib/components/ui/button';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(contractSchema),
		onResult: ({ result }) => {
			if (result.type == 'success') {
				toast.success('Contract successfully created!');
				formOpen = false;
				startDateValue = undefined;
				endDateValue = undefined;
				fileName = null;
				reset();
			}

			if (result.type == 'failure') {
				toast.error('Contract creation failed...');
			}
		}
	});
	const { form: formData, enhance, submitting, errors, reset } = form;
	const file = fileProxy(formData, 'attachment');
	const currentProfile = getContext('currentProfile');
	const organization = getContext('organization');
	const projects = getContext('projects');
	const accounts = getContext('accounts');
	const departments = getContext('departments');
	const spendCategories = getContext('spendCategories');
	const vendors = getContext('vendors');
	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	console.log($currentProfile.role);

	let formOpen = false;
	let fileName: string | null;
	let selectedVendorId: string | null = null;
	let contracts = data.contracts;
	let userPending = data.contracts.filter(
		(c) =>
			(($currentProfile.role === 'employee' && c.current_approver_id === $currentProfile.id) ||
				$currentProfile.role === 'signer') &&
			!c.signed
	);
	let userPendingApprovalsMode = false;
	let startDateValue: DateValue | undefined = $formData.start_date
		? parseDate($formData.start_date.toString())
		: undefined;
	let endDateValue: DateValue | undefined = $formData.end_date
		? parseDate($formData.end_date.toString())
		: undefined;
	let startDatePlaceholder: DateValue = today(getLocalTimeZone());
	let endDatePlaceholder: DateValue = today(getLocalTimeZone());

	$: if (userPendingApprovalsMode) {
		contracts = userPending;
	} else {
		contracts = data.contracts;
	}
	$: parentContracts = data.contracts.filter((c) => c.vendor_id === selectedVendorId);
	$: $formData.start_date = startDateValue ? new Date(startDateValue.toString()) : undefined;
	$: $formData.end_date = endDateValue ? new Date(endDateValue.toString()) : undefined;

	onMount(() => {
		$formData.organization_id = $organization.id;
		$formData.owner_id = $currentProfile.id;
		$formData.current_approver_id = $currentProfile.approver_id;
	});
</script>

<h1 class="text-3xl">Contracts</h1>

<div class="container mx-auto py-10">
	{#key contracts}
		<DataTable
			data={contracts}
			bind:userPendingApprovalsMode
			userPendingApprovalsCount={userPending.length}
		>
			<svelte:fragment slot="entry-form">
				{#if $currentProfile.role === 'employee'}
					<FormDialog bind:open={formOpen} title="Add contract">
						<svelte:fragment slot="trigger">
							<Dialog.Trigger>
								<Button><Plus />Add</Button>
							</Dialog.Trigger>
						</svelte:fragment>
						<form method="POST" enctype="multipart/form-data" use:enhance>
							<input name="organization_id" hidden value={$formData.organization_id} />
							<input name="owner_id" hidden value={$formData.owner_id} />
							<input name="current_approver_id" hidden value={$formData.current_approver_id} />

							<Form.Field {form} name="vendor_id">
								<Form.Control>
									<Form.Label>Vendor</Form.Label>
									<div>
										<Combobox
											placeholder="Select a vendor"
											items={$vendors.map((v) => ({ label: v.name, value: v.id }))}
											bind:value={$formData.vendor_id}
											setValue={(value) => {
												$formData.vendor_id = value;
												selectedVendorId = value;
											}}
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
												items={[
													{ label: 'None', value: undefined },
													...parentContracts.map((c) => ({
														label: `#${c.number} | ${c.vendor.name}`,
														value: c.id
													}))
												]}
												bind:value={$formData.parent_contract_id}
												setValue={(value) => ($formData.parent_contract_id = value)}
												{...attrs}
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
											{...attrs}
											setValue={(value) => ($formData.account_id = value)}
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
											{...attrs}
											setValue={(value) => ($formData.spend_category_id = value)}
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
											{...attrs}
											setValue={(value) => ($formData.department_id = value)}
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
											{...attrs}
											setValue={(value) => ($formData.project_id = value)}
										/>
									</div>
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>

							<Form.Field {form} name="number">
								<Form.Control let:attrs>
									<Form.Label>Contract number</Form.Label>
									<Input type="number" {...attrs} bind:value={$formData.number} />
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
									<Input type="number" {...attrs} bind:value={$formData.amount} />
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>

							<Form.Field {form} name="start_date">
								<Form.Control let:attrs>
									<Form.Label>Start Date</Form.Label>
									<input hidden bind:value={$formData.start_date} {...attrs} />
									<Popover.Root>
										<div>
											<Popover.Trigger
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
										</div>
										<Popover.Content class="w-auto p-0" side="right">
											<DatePicker
												bind:value={startDateValue}
												bind:placeholder={startDatePlaceholder}
											/>
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
												<Popover.Trigger
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
											</div>
										</Form.Control>
										<Popover.Content class="w-auto p-0" side="right">
											<DatePicker bind:value={endDateValue} bind:placeholder={endDatePlaceholder} />
										</Popover.Content>
									</Popover.Root>
									<Form.FieldErrors />
								</Form.Control>
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
												Upload PDF
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

							<Form.Button type="submit" disabled={$submitting} class="my-4 w-full">
								{#if $submitting}
									<Loader2 class="animate-spin" />
								{:else}
									Submit
								{/if}
							</Form.Button>

							{#if $errors._errors}
								<p class="text-sm text-destructive">{$errors._errors[0]}</p>
							{/if}
						</form>
					</FormDialog>
				{/if}
			</svelte:fragment>
		</DataTable>
	{/key}
</div>
