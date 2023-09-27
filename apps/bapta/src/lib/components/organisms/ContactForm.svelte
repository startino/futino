<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import { createClient } from "@supabase/supabase-js";
  import type { Database } from "$lib/supabase.types";
  import TextField from "../molecules/TextField.svelte";

  // Create a Supabase client object
  const supabase = createClient<Database>(
    "https://qnzxoapdhdycrblbeovn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs"
  );

  let nameInput: string = "";
  let emailInput: string = "";
  let messageInput: string = "";

  let formSubmitted = false;

  async function submitForm(event: any) {
    let rawData = new FormData(event.target);
    console.log(rawData);

    let formData: {
      name: string;
      email: string;
      message: string;
    } = {
      name: "na",
      email: "na",
      message: "na",
    };

    event.target.reset();
    formSubmitted = true;

    // Assign data values from input elements.
    for (let field of rawData) {
      const [key, value]: [string, FormDataEntryValue] = field;
      formData[key as keyof typeof formData] = value as string;
    }

    const { data, error } = await supabase.from("Contact Forms").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        website: "bapta",
      },
    ]);
  }
</script>

<form
  id="contactform"
  class="flex flex-col gap-8 text-left items-center overflow-x-clip"
  on:submit|preventDefault={submitForm}
>
  <TextField
    bind:value={nameInput}
    label="Name"
    placeholder="Elon Gates"
    required={true}
  />

  <TextField
    bind:value={emailInput}
    label="Email"
    placeholder="j.lewis@futi.no"
    required={true}
  />
  <TextField
    bind:value={messageInput}
    label="Your Message"
    placeholder="I want to ask about"
    required={true}
    textArea={true}
  />

  <button
    type="submit"
    id="submit"
    class="flex w-full mx-1.5 relative border-2 border-primary-dark justify-center tracking-wide items-center py-3 my-1 px-6 font-bold rounded-md shadow-2xl group hover:text-primary-container-on-dark hover:bg-primary-container-dark/60 transition-all duration-300 hover:scale-[98%] text-primary-on-dark bg-primary-dark"
  >
    <h1 class="title-large">Submit</h1>
  </button>

  <div class:hidden={!formSubmitted} class="mx-1.5 text-left self-start">
    <h2 class="title-medium">
      Your message has been sent. Thank you for contacting us!
    </h2>
  </div>
</form>

<style>
  .placeholder {
    @apply absolute pointer-events-none -left-1/2 invisible group-hover:visible group-hover:left-3 group-hover:right-auto text-left top-1/2 -translate-y-1/2 transition-all  text-outline-dark;
  }
  .input {
    @apply w-full h-fit px-3 py-3 leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded focus:outline-none;
    @apply w-full h-fit px-3 py-3 rounded-sm leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded-r appearance-none;
  }
</style>
