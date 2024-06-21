<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import type { Writable } from 'svelte/store';

	export let checked: Writable<boolean>;
</script>

<button on:click|stopPropagation>
	<Checkbox bind:checked={$checked} />
</button>
