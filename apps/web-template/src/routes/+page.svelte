<script lang="ts">
	import { default as ThemeSwitcher } from 'ui/src/lib/atoms/ThemeSwitcher.svelte';
</script>

<ThemeSwitcher />
<main
	class="py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40"
>
	<div class="grid justify-items-center space-y-12 mx-auto text-center">
		<h1 class="display-large">Welcome to Futino Web-Template</h1>
		<ul>
			<li>
				<a class="link" href="https://futi.no">Futino</a>
			</li>
			<li>
				<a class="link" href="https://web-template.futi.no">Web-Template</a>
			</li>
			<li>
				<a class="link" href="https://github.com/Futino/web-template">Source Code</a>
			</li>
		</ul>
	</div>
</main>
