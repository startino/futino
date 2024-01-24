<script lang="ts">
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';
	import * as Form from '../ui/form';
	import { string } from 'zod';

	export let users: { id: string; fullName: string }[];

	export let open = false;
	export let initialValue: string = '';
	export let value = '';
	value = initialValue;

	$: selectedValue =
		users.find((f) => f.fullName === value)?.fullName ?? 'Select a company employee...';

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Form.Control id={ids.trigger} let:attrs>
			<Button
				builders={[builder]}
				{...attrs}
				variant="outline"
				role="combobox"
				type="button"
				class={cn('mt-12 w-[350px] justify-between', !value && 'text-muted-foreground')}
			>
				{selectedValue}
				<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Button>
		</Form.Control>
	</Popover.Trigger>
	<Popover.Content class="w-[350px] pt-1">
		<Command.Root>
			<Command.Input class="mt-2" placeholder="Search for a company employee..." />
			<Command.Empty>No User Found.</Command.Empty>
			<Command.Group>
				{#each users as user}
					<Command.Item
						value={user.fullName}
						onSelect={(currentValue) => {
							value = currentValue;
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', user.id !== value && 'text-transparent')} />
						{user.fullName}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
