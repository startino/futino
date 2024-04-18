<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Form from '$lib/components/ui/form';
	import { registerSchema, type LoginSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { MoveRight } from 'lucide-svelte';

	export let data: PageData;

	export let datta: SuperValidated<Infer<LoginSchema>> = data.form;

	const form = superForm(datta, {
		validators: zodClient(registerSchema)
	});

	const { form: formData, enhance } = form;

	let currentStep = 0;
</script>

<div class="h-full w-full lg:grid lg:grid-cols-2">
	<form method="POST" use:enhance class="flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="relative flex w-full flex-row justify-between">
				<div class="flex flex-col place-items-center gap-2 text-center">
					<h1 class="text-md">Company Details</h1>
					<div class=" grid aspect-1 place-items-center rounded-full bg-card text-xl">
						<p class="p-2">1</p>
					</div>
				</div>
				<MoveRight class="w-full scale-x-125" width="120" />
				<div class="flex flex-col place-items-center gap-2 text-center">
					<h1 class="text-md">Company Details</h1>
					<div class=" grid aspect-1 place-items-center rounded-full bg-card text-xl">
						<p class="p-2">1</p>
					</div>
				</div>
			</div>
			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Login</h1>
				<p class="text-balance text-muted-foreground">
					Enter your email and password below to login to your account
				</p>
			</div>
			<div class="grid gap-4">
				<Form.Field {form} name="email">
					<Form.Control let:attrs class="grid gap-2">
						<Form.Label>Email</Form.Label>
						<Input {...attrs} bind:value={$formData.email} placeholder="m@example.com" />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<div class="grid gap-2">
					<Form.Field name="password" {form}>
						<Form.Control let:attrs class="flex items-center">
							<Label for="password">Password</Label>

							<Input {...attrs} bind:value={$formData.password} />
						</Form.Control>
						<a href="##" class="ml-auto inline-block text-sm text-accent underline">
							Forgot your password?
						</a>
						<Form.Description />
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Form.Button type="submit" class="w-full">Login</Form.Button>
			</div>
			<div class="mt-4 text-center text-sm">
				Don&apos;t have an account?
				<a href="##" class="text-accent underline"> Sign up </a>
			</div>

			<div class="mt-4 text-balance text-center text-sm">
				If you’re company hasn’t created accounts yet to register
				<a href="##" class="text-accent underline"> click here to register</a>
			</div>
		</div>
	</form>

	<div class="hidden h-screen bg-muted lg:block">
		<img
			src="road-of-oak-trees.jpg"
			alt="oak tree"
			width="1920"
			height="1080"
			class="h-full w-full object-cover brightness-[0.4] contrast-[1.3] hue-rotate-[30deg]"
		/>
	</div>
</div>
