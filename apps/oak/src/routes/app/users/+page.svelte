<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { Loader2 } from 'lucide-svelte';

	import { getContext } from '$lib/utils';
	import { profileSchema } from '$lib/schemas';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import * as Select from '$lib/components/ui/select';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Combobox } from '$lib/components/ui/combobox';
	import DataTable from './data-table.svelte';
	import type { Enums } from '$lib/server/supabase.types';
	import type { JoinedProfile } from '$lib/types';

	export let data;

	const profiles = getContext('profiles');
	const form = superForm(data.form, {
		validators: zodClient(profileSchema),
		onResult: ({ result }) => {
			if (result.type == 'success') {
				$profiles = [result.data.newProfile as JoinedProfile, ...$profiles];
				toast.success('User added!');
				formOpen = false;
				reset();
			}

			if (result.type == 'failure') {
				toast.error('Failed to add user...');
			}
		}
	});

	const { form: formData, enhance, submitting, errors, reset } = form;
	const roles: Enums<'role'>[] = ['employee', 'admin', 'signer'];
	let formOpen = false;

	$: selectedRole = $formData.role ? { label: $formData.role, value: $formData.role } : undefined;
</script>

<h1 class="text-3xl">Users</h1>

<div class="container mx-auto py-10">
	{#key $profiles}
		<DataTable data={$profiles}>
			<svelte:fragment slot="entry-form">
				<FormDialog title="Add user" bind:open={formOpen}>
					<form method="POST" use:enhance>
						<Form.Field {form} name="full_name">
							<Form.Control let:attrs>
								<Form.Label>Full Name</Form.Label>
								<Input {...attrs} bind:value={$formData.full_name} />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="email">
							<Form.Control let:attrs>
								<Form.Label>Email</Form.Label>
								<Input {...attrs} bind:value={$formData.email} />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="role">
							<Form.Control let:attrs>
								<Form.Label>Role</Form.Label>
								<Select.Root
									selected={selectedRole}
									onSelectedChange={(v) => v && ($formData.role = v.value)}
								>
									<Select.Trigger {...attrs}>
										<Select.Value placeholder="Select a role" />
									</Select.Trigger>
									<Select.Content>
										{#each roles as role}
											<Select.Item value={role}>{role}</Select.Item>
										{/each}
									</Select.Content>
									<input hidden bind:value={$formData.role} name={attrs.name} />
								</Select.Root>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="approver_id">
							<Form.Control let:attrs>
								<Form.Label>Supervisor</Form.Label>
								<div>
									<Combobox
										placeholder="Select a user"
										items={$profiles.map((p) => ({ label: p.full_name, value: p.id }))}
										bind:value={$formData.approver_id}
										{attrs}
									/>
								</div>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="approval_threshold">
							<Form.Control let:attrs>
								<Form.Label>Approval Threshold</Form.Label>
								<Input
									type="number"
									on:change={(e) => ($formData.approval_threshold = +e.currentTarget.value)}
									{...attrs}
									bind:value={$formData.approval_threshold}
								/>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="password">
							<Form.Control let:attrs>
								<Form.Label>Password</Form.Label>
								<div class="flex gap-2">
									<Input disabled type="password" {...attrs} bind:value={$formData.password} />
								</div>
							</Form.Control>
							<Form.Description>The password is auto-generated</Form.Description>
							<Form.FieldErrors />
						</Form.Field>

						{#if $errors._errors}
							<p class="text-sm text-destructive">{$errors._errors[0]}</p>
						{/if}

						<Form.Button type="submit" class="my-4 w-full">
							{#if $submitting}
								<Loader2 class="animate-spin" />
							{:else}
								Submit
							{/if}
						</Form.Button>
					</form>
				</FormDialog>
			</svelte:fragment>
		</DataTable>
	{/key}
</div>
