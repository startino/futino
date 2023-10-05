<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import { createClient } from "@supabase/supabase-js";
  import TextField from "../atoms/TextField.svelte";

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

  <Button type="submit" id="submit" class="w-full">Send</Button>

  <div class:hidden={!formSubmitted} class="mx-1.5 text-left self-start">
    <h2 class="title-medium m-0 sm:m-0">
      Your message has been sent. Thank you for contacting us!
    </h2>
  </div>
</form>

<style>
  .placeholder {
    @apply absolute pointer-events-none -left-1/2 invisible group-hover:visible group-hover:left-3 group-hover:right-auto text-left top-1/2 -translate-y-1/2 transition-all font-light text-surface-on;
  }
  .input {
    @apply w-full h-fit px-3 py-3 leading-tight text-secondary bg-surface border border-primary rounded  focus:shadow-tertiary/20 focus:outline-none;
    @apply w-full h-fit px-3 py-3 rounded-sm leading-tight text-secondary bg-surface border border-primary rounded-r appearance-none;
  }
</style>
