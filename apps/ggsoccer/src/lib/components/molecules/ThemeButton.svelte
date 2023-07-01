<script lang="ts">
	function changeTheme() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		} else {
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		}
	}
</script>

<button
	on:click={changeTheme}
	class="{$$props.class} fill-primary-light stroke-primary-light hover:fill-tertiary-light hover:stroke-tertiary-light dark:fill-primary-dark dark:stroke-primary-dark dark:hover:fill-tertiary-dark dark:hover:stroke-tertiary-dark"
>
	<!-- Light mode -->
	<span class="dark:hidden">
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="w-6 h-6"
		>
			<path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
			<path
				d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
			/>
		</svg>
	</span>

	<!-- Dark mode -->
	<span class="hidden dark:inline">
		<svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
			/>
		</svg>
	</span>
</button>
