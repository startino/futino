<script lang="ts">
	import { onMount } from 'svelte';
	let baseUrl = '';
	let ext = '.jpg';
	let page = 1;

	onMount(async () => {
		baseUrl = localStorage.getItem('baseUrl')
			? (localStorage.getItem('baseUrl') as string)
			: baseUrl;
		ext = localStorage.getItem('ext') ? (localStorage.getItem('ext') as string) : ext;
		page = localStorage.getItem('page') ? parseInt(localStorage.getItem('page') as string) : page;
		(<HTMLInputElement>document.getElementById('baseUrl')).value = baseUrl;
		(<HTMLInputElement>document.getElementById('ext')).value = ext;
		(<HTMLInputElement>document.getElementById('page')).value = page.toString();
	});

	function loadExternal() {
		baseUrl = (<HTMLInputElement>document.getElementById('baseUrl')).value;
		ext = (<HTMLInputElement>document.getElementById('ext')).value;
		page =
			parseInt((<HTMLInputElement>document.getElementById('page')).value) +
			((parseInt((<HTMLInputElement>document.getElementById('page')).value) % 2) * -1 + 1);
		localStorage.setItem('baseUrl', baseUrl);
		localStorage.setItem('ext', ext);
		localStorage.setItem('page', page.toString());
	}

	function previousPage() {
		page -= 2;
	}
	function nextPage() {
		page += 2;
	}
</script>

<main
	class="p-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40"
>
	<div class="grid justify-items-center space-y-12 mx-auto">
		<form class="grid justify-items-center space-y-5 w-full px-80">
			<h1 class="display-large">External Reader</h1>
			<h2 class="label-large">by Jonas Lindberg</h2>
			<input
				id="baseUrl"
				type="text"
				placeholder="https://example.com/files/"
				class="bg-black/50 p-2 w-full"
			/>
			<input id="ext" type="text" placeholder=".jpg" class="bg-black/50 p-2 w-full" />
			<input id="page" type="number" placeholder="0" class="bg-black/50 p-2 w-full" />
			<button on:click={loadExternal} class="p-2 bg-black/20 shadow-md shadow-black"> Load </button>
		</form>

		{#if baseUrl !== ''}
		<div class="flex flex-col h-screen">
			<section class="flex h-full w-full p-5 space-x-5">
				<button on:click={previousPage}>
					<svg
						class="stroke-white self-center"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
						><path
							d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"
						/></svg
					>
				</button>

				<ul class="flex h-full shadow-lg shadow-black">
					<button on:click={previousPage} class="h-full w-full">
						<img src="{baseUrl}{page - 1}{ext}" alt="Left Page" class="h-full w-full select-none" />
					</button>

					<button on:click={nextPage} class="h-full w-full">
						<img
							src="{baseUrl}{page + 0}{ext}"
							alt="Right Page"
							class="h-full w-full select-none"
						/>
					</button>
				</ul>

				<button on:click={nextPage}>
					<svg
						class="stroke-white self-center"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
						><path
							d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"
						/></svg
					>
				</button>
			</section>
		</div>
		{/if}
	</div>
</main>
