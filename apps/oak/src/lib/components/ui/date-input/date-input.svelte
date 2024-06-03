<script lang="ts">
	import { CalendarIcon } from 'lucide-svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { cn } from '$lib/utils';
	import { type DateValue, getLocalTimeZone, DateFormatter } from '@internationalized/date';
	import { buttonVariants } from '../button';
	import DatePicker from '$lib/components/atoms/DatePicker.svelte';

	export let value: DateValue | undefined = undefined;

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});
</script>

<Popover.Root>
	<div>
		<Popover.Trigger
			class={cn(
				buttonVariants({ variant: 'outline' }),
				'w-[220px] justify-start pl-4 text-left font-normal',
				!value && 'text-muted-foreground'
			)}
		>
			{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
			<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
		</Popover.Trigger>
	</div>
	<Popover.Content class="w-auto p-0" side="left">
		<DatePicker bind:value />
	</Popover.Content>
</Popover.Root>
