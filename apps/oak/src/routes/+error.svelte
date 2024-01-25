<script>
	import { page } from '$app/stores';
</script>

<h1 class="prose prose-main">{$page.status} {$page.error.message}</h1>
