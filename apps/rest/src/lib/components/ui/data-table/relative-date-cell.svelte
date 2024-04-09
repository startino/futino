<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { formatDistanceToNowStrict } from 'date-fns';

	export let date: string = '';

	const relativeDate = formatDistanceToNowStrict(date, { addSuffix: true });
</script>

<Label>
	{#if date}
		{relativeDate}
	{:else}
		N/A
	{/if}
</Label>
