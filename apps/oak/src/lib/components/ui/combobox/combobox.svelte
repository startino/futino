<script lang="ts">
	import Check from 'svelte-radix/Check.svelte';
	import CaretSort from 'svelte-radix/CaretSort.svelte';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	export let open = false;
	export let value: string | undefined;
	export let items: { value: typeof value; label: string }[];
	export let placeholder = 'Select an item';
	export let attrs: Partial<{
		name: string;
		id: string;
		'data-fs-error': string;
		'aria-describedby': string;
		'aria-invalid': 'true';
		'aria-required': 'true';
		'data-fs-control': string;
	}> = {};

	$: selectedValue = items.find((i) => i.value === value) ?? {
		label: placeholder,
		value: undefined
	};

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
	<Popover.Trigger
		class={cn(
			buttonVariants({ variant: 'outline' }),
			'justify-between',
			!value && 'text-muted-foreground'
		)}
		role="combobox"
		{...attrs}
	>
		{selectedValue.label}
		<CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
	</Popover.Trigger>
	<input hidden bind:value name={attrs?.name} />
	<Popover.Content class="p-0">
		<Command.Root>
			<Command.Input placeholder="Search framework..." class="h-9" />
			<Command.Empty>No item found.</Command.Empty>
			<Command.Group>
				{#each items as item}
					<Command.Item
						value={item.value}
						onSelect={(currentValue) => {
							value = currentValue;
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', value !== item.value && 'text-transparent')} />
						{item.label}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
