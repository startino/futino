<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import Authenticate from "$lib/components/atoms/Authenticate.svelte";
  import type { Database } from "$lib/supabase.types";
  import Button from "$lib/components/atoms/Button.svelte";
  import ContactForm from "$lib/components/organisms/ContactForm.svelte";

  // Create a Supabase client object
  const supabase = createClient<Database>(
    "https://qnzxoapdhdycrblbeovn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs"
  );

  let activeTab: number = 0;

  function toggleTab(tab: number) {
    activeTab = tab;
  }
</script>

<Authenticate>
  <div
    class="flex flex-col w-full h-full shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 py-40 justify-center place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40"
  >
    <h1 class="font-bold text-primary-dark display-medium">Admin Board</h1>

    <hr class="w-40 py-4" />

    <div class="grid grid-cols-2 mx-auto w-fit">
      <Button
        click={() => {
          toggleTab(0);
        }}>Contact Form</Button
      >
      <Button
        click={() => {
          toggleTab(1);
        }}>Request Tour</Button
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
      {#key activeTab}
        {#if activeTab == 0}
          {#await supabase.from("baptaTours").select("*")}
            <p>Loading...</p>
          {:then bapta}
            {#if bapta.data}
              {#each bapta.data as tour}
                <div
                  class="rounded-lg shadow-lg shadow-black bg-surface-dark/70 h-full"
                >
                  <div
                    class="p-5 text-surface-variant-on-dark prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert prose-main justify-items-center mx-auto"
                  >
                    <p>First Name: {tour.firstName}</p>
                    <p>Last Name: {tour.lastName}</p>
                    <p>Tours: {tour.tours}</p>
                    <p>Email: {tour.email}</p>
                    <p>WhatsApp: {tour.whatsapp}</p>
                    <p>People: {tour.people}</p>
                    <p>Message: {tour.message}</p>
                    <p>Request Date: {tour.created_at}</p>
                  </div>
                </div>
              {/each}
            {/if}
          {/await}
        {:else}
          {#await supabase
            .from("Contact Forms")
            .select("*")
            .eq("website", "bapta")}
            <p>Loading...</p>
          {:then bapta}
            {#if bapta.data}
              {#each bapta.data as { name, message, email, created_at }}
                <div class="rounded-lg shadow-lg bg-surface-dark h-full">
                  <div
                    class="p-8 text-left text-surface-variant-on-dark prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-invert prose-main"
                  >
                    <p>Name: {name}</p>
                    <p>Message: {message}</p>
                    <p>Email: {email}</p>
                    <p>Request Date: {created_at}</p>
                  </div>
                </div>
              {/each}
            {/if}
          {/await}
        {/if}
      {/key}
    </div>
  </div>
</Authenticate>
