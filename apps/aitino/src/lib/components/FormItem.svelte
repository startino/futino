<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	import { ArrowRight, Loader, Twitter, X, Youtube } from 'lucide-svelte';
	import Input from './ui/input/input.svelte';
	import { toast } from 'svelte-sonner';

	export let form: any = {};

	let isLoading = false;
</script>

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
		<Input
			class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
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
			class="relative -ml-1  flex  w-full gap-8 text-lg transition-all duration-300 ease-in-out"
			on:click={async () => {
				if (form?.success) {
					toast.success(form.message);
					isLoading = false;
				} else {
					toast.error(form?.error);
					isLoading = false;
				}
			}}
		>
			{#if isLoading}
				<Loader />
			{:else}
				Join the waitlist<ArrowRight class="absolute right-4" />{/if}
		</Button>
	</div>

	<div class="mt-12 flex w-full items-center justify-between md:p-4">
		<div class="flex">
			<Button
				class="hover:bg-primary bg-transparent p-8 font-bold transition-all duration-300 ease-in-out hover:scale-95 hover:text-[#17151c]"
				href="https://x.com/@futino"
			>
				<Twitter size="28" />
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
				<Youtube size="28" />
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
