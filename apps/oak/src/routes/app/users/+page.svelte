<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { Loader2, Plus } from 'lucide-svelte';

	import { getContext } from '$lib/utils';
	import { createUserByAdminSchema, updateUserByAdminSchema } from '$lib/schemas';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import * as Select from '$lib/components/ui/select';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Combobox } from '$lib/components/ui/combobox';
	import * as Dialog from '$lib/components/ui/dialog';
	import DataTable from './data-table.svelte';
	import type { Enums } from '$lib/server/supabase.types';
	import type { JoinedProfile } from '$lib/types';

	export let data;

	const profiles = getContext('profiles');
	const currentProfile = getContext('currentProfile');

	const createForm = superForm(data.createForm, {
		validators: zodClient(createUserByAdminSchema),
		onUpdate: ({ form }) => {
			if (form.valid) {
				toast.success('User added!');
				createFormOpen = false;
				$profiles = [form.message as JoinedProfile, ...$profiles];
				createReset();
			} else {
				toast.error('Failed to add user...');
			}
		}
	});

	const updateForm = superForm(data.updateForm, {
		validators: zodClient(updateUserByAdminSchema),
		onResult: ({ result }) => {
			if (result.type == 'success') {
				const updatedProfile = result.data.updatedProfile;
				const idx = $profiles.findIndex((p) => p.id === updatedProfile.id);

				$profiles.splice(idx, 1, updatedProfile);
				$profiles = $profiles;
				toast.success('User updated!');
				updateFormOpen = false;
				updateReset();
			}

			if (result.type == 'failure') {
				toast.error('Failed to update user...');
			}
		}
	});

	const {
		form: createData,
		enhance: createEnhance,
		submitting: creating,
		errors: createErrors,
		reset: createReset
	} = createForm;

	const {
		form: updateData,
		enhance: updateEnhance,
		submitting: updating,
		errors: updateErrors,
		reset: updateReset
	} = updateForm;

	const roles: Enums<'role'>[] = ['employee', 'admin', 'signer'];
	let createFormOpen = false;
	let updateFormOpen = false;
	let selectedProfile: JoinedProfile | null = null;

	$: selectedRolesCreate = $createData.roles.map((r) => ({ label: r, value: r }));
	$: selectedRolesUpdate = $updateData.roles.map((r) => ({ label: r, value: r }));

	const handleEdit = (event) => {
		const profile = event.detail as JoinedProfile;
		$updateData = {
			...profile
		};
		selectedProfile = profile;
		updateFormOpen = true;
	};
</script>

<h1 class="text-3xl">Users</h1>

<div class="container mx-auto py-10">
	{#key $profiles}
		<DataTable data={$profiles} on:edit={handleEdit}>
			<svelte:fragment slot="form">
				<FormDialog title="Add user" bind:open={createFormOpen}>
					<svelte:fragment slot="trigger">
						<Dialog.Trigger>
							<Button><Plus />Add</Button>
						</Dialog.Trigger>
					</svelte:fragment>
					<form method="POST" action="?/create" use:createEnhance>
						<Form.Field form={createForm} name="full_name">
							<Form.Control let:attrs>
								<Form.Label>Full Name</Form.Label>
								<Input {...attrs} bind:value={$createData.full_name} />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={createForm} name="email">
							<Form.Control let:attrs>
								<Form.Label>Email</Form.Label>
								<Input {...attrs} bind:value={$createData.email} />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={createForm} name="roles">
							<Form.Control let:attrs>
								<Form.Label>Role</Form.Label>
								<Select.Root
									multiple
									selected={selectedRolesCreate}
									onSelectedChange={(s) => {
										if (s) {
											$createData.roles = s.map((r) => r.value);
										} else {
											$createData.roles = [];
										}
									}}
								>
									<Select.Trigger {...attrs}>
										<Select.Value placeholder="Select a role" />
									</Select.Trigger>
									<Select.Content>
										{#each roles as role}
											<Select.Item value={role}>{role}</Select.Item>
										{/each}
									</Select.Content>
									{#each $createData.roles as role}
										<input hidden value={role} name={attrs.name} />
									{/each}
								</Select.Root>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={createForm} name="approver_id">
							<Form.Control let:attrs>
								<Form.Label>Supervisor</Form.Label>
								<div>
									<Combobox
										placeholder="Select a user"
										items={$profiles.map((p) => ({ label: p.full_name, value: p.id }))}
										bind:value={$createData.approver_id}
										{attrs}
									/>
								</div>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={createForm} name="approval_threshold">
							<Form.Control let:attrs>
								<Form.Label>Approval Threshold</Form.Label>
								<Input
									type="number"
									on:change={(e) => ($createData.approval_threshold = +e.currentTarget.value)}
									{...attrs}
									bind:value={$createData.approval_threshold}
								/>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={createForm} name="password">
							<Form.Control let:attrs>
								<Form.Label>Password</Form.Label>
								<div class="flex gap-2">
									<Input disabled type="password" {...attrs} bind:value={$createData.password} />
								</div>
							</Form.Control>
							<Form.Description>The password is auto-generated</Form.Description>
							<Form.FieldErrors />
						</Form.Field>

						{#if $createErrors._errors}
							<p class="text-sm text-destructive">{$createErrors._errors[0]}</p>
						{/if}

						<Form.Button type="submit" class="my-4 w-full">
							{#if $creating}
								<Loader2 class="animate-spin" />
							{:else}
								Submit
							{/if}
						</Form.Button>
					</form>
				</FormDialog>

				<FormDialog title="Edit User ({selectedProfile?.full_name})" bind:open={updateFormOpen}>
					<form method="POST" action="?/update" use:updateEnhance>
						<Form.Field form={updateForm} name="id">
							<Form.Control let:attrs>
								<input hidden {...attrs} bind:value={$updateData.id} />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={updateForm} name="approver_id">
							<Form.Control let:attrs>
								<Form.Label>Supervisor</Form.Label>
								<div>
									<Combobox
										placeholder="Select a user"
										items={$profiles
											.filter(
												(p) =>
													p.id !== $currentProfile.id &&
													p.id !== selectedProfile.id &&
													p.approver_id !== selectedProfile.id &&
													!selectedProfile.roles.includes('signer')
											)
											.map((p) => ({ label: p.full_name, value: p.id }))}
										bind:value={$updateData.approver_id}
										{attrs}
									/>
								</div>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={updateForm} name="roles">
							<Form.Control let:attrs>
								<Form.Label>Role</Form.Label>
								<Select.Root
									multiple
									selected={selectedRolesUpdate}
									onSelectedChange={(s) => {
										if (s) {
											$updateData.roles = s.map((r) => r.value);
										} else {
											$updateData.roles = [];
										}
									}}
								>
									<Select.Trigger {...attrs}>
										<Select.Value placeholder="Select a role" />
									</Select.Trigger>
									<Select.Content>
										{#each roles as role}
											<Select.Item value={role}>{role}</Select.Item>
										{/each}
									</Select.Content>

									{#each $updateData.roles as role}
										<input hidden value={role} name={attrs.name} />
									{/each}
								</Select.Root>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field form={updateForm} name="approval_threshold">
							<Form.Control let:attrs>
								<Form.Label>Approval Threshold</Form.Label>
								<Input
									type="number"
									on:change={(e) => ($updateData.approval_threshold = +e.currentTarget.value)}
									{...attrs}
									bind:value={$updateData.approval_threshold}
								/>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						{#if $updateErrors._errors}
							<p class="text-sm text-destructive">{$updateErrors._errors[0]}</p>
						{/if}

						<Form.Button type="submit" class="my-4 w-full">
							{#if $updating}
								<Loader2 class="animate-spin" />
							{:else}
								Save
							{/if}
						</Form.Button>
					</form>
				</FormDialog>
			</svelte:fragment>
		</DataTable>
	{/key}
</div>
