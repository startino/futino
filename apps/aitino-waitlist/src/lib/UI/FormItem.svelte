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
	class="flex flex-col justify-center gap-y-4 w-full max-w-sm lg:max-w-lg items-center space-x-2 mx-auto"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<div class="p-1 w-full">
		<input
			class="flex  h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
			id="email"
			type="email"
			name="email"
			placeholder="jane@example.com"
		/>
	</div>
	<div class="p-1 w-full border-none">
		<!-- svelte-ignore missing-declaration -->
		<Button
			type="submit"
			class="border-none w-full flex gap-8 relative text-[#45dfa4]  text-lg -ml-1 bg-[#17151c] hover:bg-[#45dfa4] transition-all duration-300 ease-in-out"
			variant="outline"
			>Join the waitlist <i class="fas fa-arrow-right absolute right-8"></i></Button
		>
	</div>

	<div class="flex justify-between w-full items-center md:p-4">
		<div class="flex">
			<Button
				class="p-8 bg-transparent hover:scale-95 hover:bg-[#45dfa4] hover:text-[#17151c] font-bold transition-all duration-300 ease-in-out"
				href="x.com/@futino"
			>
				<i class="fa-brands fa-twitter text-2xl pr-2"></i>
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
				class="p-8 bg-transparent hover:scale-95 hover:bg-[#45dfa4] hover:text-[#17151c] font-bold transition-all duration-300 ease-in-out"
				href="youtube.com/@futino"
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
