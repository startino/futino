<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '$styling';
	import { setContext } from 'svelte';

	export let data;

	setContext('splitTestIdentifier', data?.splitTestIdentifier);
</script>

<Toaster />
<slot />
