<script lang="ts">
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';
	import * as Form from '../ui/form';

	export let setValue;

	export let items: { value: string; label: string }[];

	export let placeholder: string = 'Select or search for an item...';

	export let open = false;
	export let value: string | undefined = undefined;
	export let label = '';

	setValue(value);

	$: label = items.find((f) => f.value === value)?.label ?? placeholder;

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
				class={cn('justify-between', !label && 'text-muted-foreground')}
			>
				{label}
				<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Button>
		</Form.Control>
	</Popover.Trigger>
	<Popover.Content class="pt-1">
		<Command.Root>
			<Command.Input class="mt-2" {placeholder} />
			<Command.Empty>No Results Found.</Command.Empty>
			<Command.Group>
				{#each items as item}
					<Command.Item
						class="whitespace-nowrap px-2"
						value={item.value}
						onSelect={(currentValue) => {
							console.log('currentValue: ', currentValue);
							setValue(currentValue);
							value = currentValue;
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', item.value !== value && 'text-transparent')} />
						{item.label}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
