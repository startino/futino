<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import AuthForm from '$lib/components/molecules/AuthForm.svelte';

	export let data: PageData;
</script>

<main class="mt-32 flex h-fit w-full flex-col items-center">
	<h1 class="mt-24">Log in to your account</h1>
	<AuthForm typeOfAuth="login" {data} />
</main>
