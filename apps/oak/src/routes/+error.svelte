<script>
	import { page } from '$app/stores';
    import Prose from '$lib/components/atoms/Prose.svelte';
</script>

<Prose>
    <h1>{$page.status} {$page.error?.message}</h1>
</Prose>

