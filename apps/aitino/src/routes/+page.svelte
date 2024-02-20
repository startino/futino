<script lang="ts">
	import { SplitTest } from 'svelte-split-testing';
	import { Toaster } from '$lib/components/ui/sonner';
	import FormItem from '$lib/components/FormItem.svelte';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;

	console.log(form, 'action data');
	export let data: PageData;
	const titleVariants = {
		'0': 'Join the Future of AI<br /> with Exclusive Early Access to <span class="bg-gradient-to-b from-primary to-background from-50% bg-clip-text text-transparent">Aitino</span>'
		// '1': 'Create Solutions Like <br /> Never Before with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '2': 'Automate Your Business <br /> with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '3': 'Create teams of  AI Agents <br/> to solve any task.',
		// '4': 'Join the Multi-Agent <br/> Revolution with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '5': 'Join the Future of AI with <br/>  Exclusive Early Access to <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '6': 'Create Solutions Like <br/>  Never Before with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '7': 'Automate Your Business <br/>  with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>'
	};

	const subtitleVariants = {
		'0': "Aitino is a platform that allows for the creation of teams of AI Agents to help you automate tasks and solve complex problems. It's made easily customizable through a node-editor."
	};
</script>


<div
	class="pointer-events-none absolute inset-0 h-full w-full bg-inherit bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:150px_150px]"
></div>

<Toaster />

<svelte:head>
	<script type="text/javascript">
		window.$crisp = [];
		window.CRISP_WEBSITE_ID = 'd8b6e215-1bae-470a-b3c4-0e227902e47a';
		(function () {
			d = document;
			s = d.createElement('script');
			s.src = 'https://client.crisp.chat/l.js';
			s.async = 1;
			d.getElementsByTagName('head')[0].appendChild(s);
		})();
	</script>
</svelte:head>

<div class="font-roboto flex h-screen w-screen flex-col justify-center bg-transparent">
	<div class="mt-4 flex h-full w-screen flex-col justify-evenly py-6">
		<div
			class="text-foreground mx-auto flex w-full flex-col place-items-center gap-y-4 px-2 sm:gap-y-8"
		>
			<img src="logo_nobg.png" alt="Aitino Logo" class="mt-4 h-20 w-20" />
			<h1
				class="tracking-loose m-0 text-center text-3xl font-semibold sm:m-0 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
			>
				<SplitTest key="Title Test" variants={Object.keys(titleVariants)} let:variant>
					{@html titleVariants[0]}
				</SplitTest>
			</h1>

			<h3
				class="text-foreground m-0 mx-auto mt-2 max-w-3xl text-balance text-center text-sm brightness-75 sm:m-0 sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
			>
				<SplitTest key="Subtitle Test" variants={Object.keys(subtitleVariants)} let:variant>
					{@html subtitleVariants[variant]}
				</SplitTest>
			</h3>

			<FormItem class="mt-10" mainform={form} notform={data} />
		</div>
	</div>
</div>
