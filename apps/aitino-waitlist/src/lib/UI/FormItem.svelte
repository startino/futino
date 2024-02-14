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
	class="flex flex-col justify-center gap-y-6 w-full max-w-sm lg:max-w-lg items-center space-x-2 mx-auto"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<div class="p-1 w-full">
		<Input
			type="email"
			placeholder="Enter your email..."
			name="email"
			id="email"
			class="py-2 font-bold border-none w-full font-roboto bg-[#17151c]  outline-none focus:outline-none shadow-lg shadow-[#17151c]"
			required
		/>
	</div>
	<div class="p-1 w-full">
		<!-- svelte-ignore missing-declaration -->
		<Button
			type="submit"
			class="w-full flex gap-8 relative  text-lg -ml-1 bg-[#17151c] hover:bg-[#45dfa4] "
			variant="outline"
			on:click={() =>
				toast.success('Event has been created', {
					description: 'Sunday, December 03, 2023 at 9:00 AM',
					action: {
						label: 'Undo',
						onClick: () => console.log('Undo')
					}
				})}>Join Waitlist <i class="fas fa-arrow-right absolute right-2"></i></Button
		>
	</div>

	<div class="flex justify-between w-full items-center">
		<div class="flex">
			<Button class="p-8 bg-transparent" href="x.com/@futino">
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
			<Button class="p-8 bg-transparent" href="youtube.com/@futino">
				<i class="fa-brands fa-youtube text-xl"></i>
				<div class="flex flex-col">
					<p class="px-4 py-4 text-base">
						Youtube
						<br />
						@fitino
					</p>
				</div>
			</Button>
		</div>
	</div>
</form>
