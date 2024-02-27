<script lang="ts">
	import { Input } from '$lib/components/ui/input';

	export let error: string[] | undefined = undefined;
	export let labelText: string;
	export let name: string | undefined;

	export let value: any = undefined;
</script>

<div class="w-full">
	<label for={name}>{labelText}</label>

	<Input
		id={name}
		{name}
		aria-invalid={error ? 'true' : undefined}
		class={error ? 'border-destructive' : ''}
		bind:value
		on:change
		{...$$restProps}
	/>

	{#if error}
		<span class="text-xs text-destructive">{error[0]}</span>
	{/if}
</div>

<style lang="postcss">
	label {
		@apply text-sm;
	}
</style>
