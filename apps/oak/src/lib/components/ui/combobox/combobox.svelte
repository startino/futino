<script lang="ts">
	import Check from 'svelte-radix/Check.svelte';
	import CaretSort from 'svelte-radix/CaretSort.svelte';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	export let open = false;
	export let value: string | null;
	export let items: { value: typeof value; label: string | { heading: string; content: string } }[];
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

	$: selectedItem = items.find((i) => i.value === value) ?? {
		label: placeholder,
		value: null
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
			'max-w-full',
			'overflow-clip',
			'justify-between',
			!value && 'text-muted-foreground'
		)}
		role="combobox"
		{...attrs}
	>
		{#if typeof selectedItem.label === 'string'}
			{selectedItem.label}
		{:else}
			{selectedItem.label.heading}
		{/if}
		<CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
	</Popover.Trigger>
	<input hidden bind:value name={attrs?.name} />
	<Popover.Content class="w-full max-w-96 p-0">
		<Command.Root
			filter={(value, search) => {
				let result = 0;
				const item = items.find((i) => i.value === value);
				if (item) {
					let label = '';
					if (typeof item.label === 'string') {
						label = item.label;
					} else {
						label = item.label.heading;
					}
					label.toLowerCase().includes(search.toLowerCase()) && (result = 1);
					return result;
				}
			}}
		>
			<Command.Input placeholder="Search..." class="h-9" />
			<Command.Empty>No item found.</Command.Empty>
			<Command.Group>
				<Command.Item
					onSelect={() => {
						value = null;
						closeAndFocusTrigger(ids.trigger);
					}}
				>
					<Check class={cn('mr-2 h-4 w-4', 'text-transparent')} />
					None
				</Command.Item>
				{#each items as item}
					<Command.Item
						class="grid grid-cols-[auto_1fr] items-start"
						value={item.value}
						onSelect={(currentValue) => {
							value = currentValue;
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', value !== item.value && 'text-transparent')} />
						{#if typeof item.label === 'string'}
							{item.label}
						{:else}
							<div class="grid gap-1 text-sm">
								<span class="font-bold">{item.label.heading}</span>
								<span>{item.label.content}</span>
							</div>
						{/if}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
