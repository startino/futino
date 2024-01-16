<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import AuthForm from '$lib/components/molecules/AuthForm.svelte';

	export let data: PageData;
</script>

<h1>{data.profile?.full_name}</h1>