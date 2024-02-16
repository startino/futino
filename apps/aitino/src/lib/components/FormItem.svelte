<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	import { ArrowRight, Loader, Github, X, Youtube } from 'lucide-svelte';
	import Input from './ui/input/input.svelte';
	import { toast } from 'svelte-sonner';

	import * as Dialog from './ui/dialog';
	import { Label } from './ui/label';
	import { Textarea } from './ui/textarea';

	export let form: any = {};

	let isLoading = false;
</script>

<form
	action="?/register"
	method="POST"
	class="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-4 space-x-2 lg:max-w-lg {$$props.class}"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<div class="flex w-full flex-col gap-4 p-1 sm:flex-row">
		<Input
			class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
			id="email"
			type="email"
			name="email"
			placeholder="jorge.lewis@futi.no"
		/>
		<Button
			type="submit"
			class="text-md relative flex w-full gap-x-3 transition-all duration-300 ease-in-out sm:w-fit"
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
				Join the Waitlist<ArrowRight class="" />{/if}
		</Button>
	</div>

	<!-- svelte-ignore missing-declaration -->

	<Dialog.Root>
		<Dialog.Trigger class="mt-4 md:mt-6 xl:mt-8">
			<Button class=" text-base" variant="outline">Contact Us</Button>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header class="mt-4 space-y-1">
				<Dialog.Title class="text-4xl">Contact Us</Dialog.Title>
			</Dialog.Header>
			<form action="?/contactUs" method="POST" class="space-y-4">
			<div class="grid gap-2">
				<Label for="name">Name</Label>
				<Input
					class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
					id="name"
					type="name"
					name="name"
					required
				/>
			</div>
			<div class="grid gap-2">
				<Label for="email">Email</Label>
				<Input
					class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
					id="email"
					type="email"
					required
					name="email"
				/>
			</div>
			<div class="grid gap-2">
				<Label for="email">Description</Label>
				<Textarea
				name="description"	class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
				/>
			</div>
			<Dialog.Footer>
				<Button type="submit">Submit</Button>
			</Dialog.Footer>
		</form>
		</Dialog.Content>
	</Dialog.Root>

	<div class="mx-auto flex w-full items-center justify-between md:p-4">
		<Button
			class="hover:bg-primary text-accent hover:text-primary-foreground bg-transparent p-8 font-bold transition-all duration-300 ease-in-out hover:scale-95 "
			href="https://github.com/Futino/"
		>
			<Github size="28" />
			<div class="flex flex-col py-4">
				<p class="px-4 py-4 text-base">
					Github
					<br />
					@futino
				</p>
			</div>
		</Button>

		<Button
			class="hover:bg-primary text-accent hover:text-primary-foreground bg-transparent p-8 font-bold transition-all duration-300 ease-in-out hover:scale-95"
			href="https://www.youtube.com/@futinolimited"
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
</form>
