<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	// import { toast } from 'svelte-sonner'
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
		integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<form
	action="?/register"
	method="POST"
	class="mx-auto flex w-full max-w-sm flex-col items-center justify-center space-x-2 lg:max-w-lg {$$props.class}"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<div class="flex w-full flex-col p-1">
		<input
			class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
			id="email"
			type="email"
			name="email"
			placeholder="jorge.lewis@futi.no"
		/>
	</div>
	<div class="w-full border-none p-1">
		<!-- svelte-ignore missing-declaration -->
		<Button
			type="submit"
			class="hover:bg-primary relative -ml-1 flex w-full gap-8 text-lg transition-all duration-300 ease-in-out"
			>Join the waitlist <i class="fas fa-arrow-right absolute right-8"></i></Button
		>
	</div>

	<div class="mt-12 flex w-full items-center justify-between md:p-4">
		<div class="flex">
			<Button
				class="hover:bg-primary bg-transparent p-8 font-bold transition-all duration-300 ease-in-out hover:scale-95 hover:text-[#17151c]"
				href="https://x.com/@futino"
			>
				<i class="fa-brands fa-twitter pr-2 text-2xl"></i>
				<div class="flex flex-col">
					<p class="px-4 py-4 text-base">
						Twitter
						<br />
						@futino
					</p>
				</div>
			</Button>
		</div>
		<div class="flex">
			<Button
				class="hover:bg-primary bg-transparent p-8 font-bold transition-all duration-300 ease-in-out hover:scale-95 hover:text-[#17151c]"
				href="https://youtube.com/@futino"
			>
				<i class="fa-brands fa-youtube text-xl"></i>
				<div class="flex flex-col">
					<p class="px-4 py-4 text-base">
						Youtube
						<br />
						@futino
					</p>
				</div>
			</Button>
		</div>
	</div>
</form>
