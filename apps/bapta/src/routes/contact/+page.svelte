<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import TextField from '$lib/components/molecules/TextField.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';
	import ContactForm from '$lib/components/organisms/ContactForm.svelte';
	import FaqSection from '$lib/components/organisms/FAQSection.svelte';
	import safariFaq from '$lib/components/tsData/safariFaq';
</script>

<svelte:head>
	<title>Bapta - Contact Us</title>
</svelte:head>

<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-56 place-items-center border-b  border-secondary/40 bg-contact bg-cover object-contain bg-center">
	<div
		class="flex flex-col max-w-xl self-center items-center h-fit inner-section bg-surface/90 shadow-2xl drop-shadow-2xl rounded-lg py-12 px-8 md:px-14">
		<h1 class="font-bold text-primary display-medium">Connect With Bapta</h1>
		<h1 class="pb-4 body-large">Bapta at Your Service, to Provide the Best Service</h1>

		<div class="mx-auto">
			<OutlineButton>
				<h1 class="px-4 py-2 title-medium md:title-large">Contact Us</h1>
			</OutlineButton>
		</div>
	</div>
</div>

<div class="border-b shadow-2xl  border-primary/40">
	<!--Contact Section-->
	<div class="flex flex-col md:flex-row mx-10 my-20 lg:mx-32 md:mx-20 sm:mx-10 xs:mx-4 space-x-12">
		<div
			class="bg-surface self-start flex flex-col rounded-xl bg-surface py-10 px-10 space-y-6 max-w-xl">
			<h3 class="font-bold text-left headline-medium text-primary">Get in touch.</h3>
			<h4 class=" text-lg font-thin text-left text-secondary my-auto">
				Feel free to contact us regarding any questions or requests. We'll get back to you shortly.
			</h4>
		</div>
		<div class="w-full">
			<ContactForm />
		</div>
	</div>
</div>

<div class="my-20">
	<FaqSection faqs={safariFaq} />
</div>
