<script lang="ts">
	import '../app.pcss';

	import { Header } from '../lib/index';
</script>

<div class="bg-background-light dark:bg-background-dark text-center text-background-on-light dark:text-background-on-dark">
	<Header />
	
	<main class="py-40">
		<slot />
	</main>
</div>
