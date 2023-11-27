<script lang="ts">
  import { Container } from "lorc";
  import Button from "../atoms/Button.svelte";
  import FAQCard from "../atoms/FAQCard.svelte";
  import SearchBox from "../atoms/SearchBox.svelte";

  // Gets the Frequently Asked Questions by parent component
  export let faqs: {
    question: string;
    answer: string;
  }[] = [];
  let questionEntry: string;

  const handleClick = (question: string) => () => (questionEntry = question);

  // For Search Input
  let searchInput = "";
  let filteredFaqs: {
    question: string;
    answer: string;
  }[] = [];

  // Matches photoData
  const searchPhotos = () => {
    return (filteredFaqs = faqs.filter((faq) => {
      if (faq.question.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
      if (faq.answer.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
    }));
  };
</script>

<Container class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
  <div
    class="col-span-2 h-fit flex flex-col gap-y-4 items-center self-start md:items-start md:text-left text-surface-on"
  >
    <h6 class="self-start uppercase text-tertiary">Your Questions, Answered</h6>
    <h6 class="title-medium hidden md:flex m-0 sm:-0">
      Find clarity and confidence through some frequently asked questions. If
      you can't find your answer there, we're open to answer any questions.
    </h6>
    <div
      class="md:flex flex-row md:flex-col lg:flex-row gap-y-4 -ml-2 my-2 mb-6 self-start hidden"
    >
      <Button class="bg-surface-highlight" tracking="down-arrow" variant="pill" href="/contact">
        Book a consultation
      </Button>
    </div>
  </div>
  <div class="flex flex-col gap-4 md:col-span-3 self-start w-full">
    <div class="lex flex-col gap-4 items-start">
      <SearchBox
        class="w-full mb-4 md:mb-6"
        bind:searchInput
        on:input={searchPhotos}
      />
      <div class="flex flex-col gap-4 overflow-y-scroll w-full max-h-[505px]">
        {#if searchInput && filteredFaqs.length === 0}
          <div class="w-full py-12 headline-medium inline">
            <h6 class="">Sorry, we couldn't find your question.</h6>
            <a href="/contact" class="underline text-tertiary headline-small"
              >Ask Us Here!</a
            >
          </div>
        {:else if filteredFaqs.length > 0}
          {#each filteredFaqs as { question, answer }}
            <FAQCard {question} {answer} isOpen={question == questionEntry} />
          {/each}
        {:else}
          {#each faqs as { question, answer }}
            <FAQCard {question} {answer} isOpen={question == questionEntry} />
          {/each}
        {/if}
      </div>
    </div>
  </div>
</Container>
