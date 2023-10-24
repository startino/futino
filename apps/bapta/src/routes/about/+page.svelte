<script lang="ts">
  import Header from "$lib/components/organisms/Header.svelte";
  import Footer from "$lib/components/organisms/Footer.svelte";
  import OutlineButton from "$lib/components/molecules/OutlineButton.svelte";

  const employees = [
    {
      name: "Emmanuel",
      img: "/images/staff/staff_07.webp",
    },
    {
      name: "Gloria",
      img: "/images/staff/staff_12.webp",
    },
    {
      name: "",
      img: "/images/staff/staff_09.webp",
    },
    {
      name: "",
      img: "/images/staff/staff_08.webp",
    },
    {
      name: "",
      img: "/images/staff/staff_11.webp",
    },
    {
      name: "",
      img: "/images/staff/staff_04.webp",
    },
  ];
</script>

<svelte:head>
  <title>Bapta - Contact Us</title>
  <meta
    name="description"
    content="Connect with Bapta to learn about Tanzanian Safaris, Climbing Kilimanjaro, and FAQs relating to both."
  />
</svelte:head>

<!--Hero-->
<div
  class="object-contain section w-full h-screen grid-rows-2 px-10 bg-center bg-cover border-b shadow-lg shadow-background lg:grid-cols-2 card-shadow lg:px-20 xl:px-40 pt-24 sm:pt-44 md:pt-60 place-items-center border-secondary/40 bg-about"
>
  <div
    class="flex flex-col items-center max-w-2xl mx-auto mt-8 mb-64 space-y-2 bg-surface/90 shadow-2xl drop-shadow-2xl rounded-lg py-12 px-8 md:px-14"
  >
    <h1 class="font-bold text-primary display-medium">
      Discover Tanzania With Bapta
    </h1>
    <h1 class="pb-6 text-white body-large">
      Experience the Adventure of a Lifetime
    </h1>

    <OutlineButton href="/contact" class="py-2">
      <h1 class="px-4 py-1 title-large">Contact Us</h1>
    </OutlineButton>
  </div>
</div>

<!-- Our Mission section -->
<section class="section">
  <div class="my-6 inner-section">
    <div class="flex flex-col items-center w-full p-6 mx-auto rounded-xl">
      <div
        class="grid items-center grid-cols-1 md:grid-cols-2 gap-y-3 md:flex-row gap-x-6"
      >
        <div
          class="flex flex-col place-items-center justify-center self-center h-full bg-surface rounded-lg py-8 px-4"
        >
          <h2 class="font-semibold display-medium text-primary">Our Mission</h2>
          <p class="max-w-lg px-3 py-3 body-medium tracking-wide leading-7">
            At our company, we believe in responsible tourism that respects
            local communities, cultures, and environments. We are committed to
            sustainable development and conservation, and work closely with
            local organizations and initiatives to ensure that our trips have a
            positive impact on the places we visit. We believe that travel is
            not only a way to explore new places, but also a way to connect with
            people and learn about different ways of life. We are dedicated to
            providing authentic travel experiences that immerse our clients in
            the local culture and memories for a lifetime.
          </p>
        </div>
        <img
          src="/images/staff/staff_01.webp"
          alt="Mission Img"
          class="object-cover object-center h-full rounded-md md:max-h-600"
        />
      </div>
    </div>
  </div>
</section>

<!-- Our Team section -->
<section class="section">
  <div
    class="grid grid-cols-1 text-center md:grid-cols-2 gap-y-5 inner-section"
  >
    <!--Our Team Passage and group photo. Left -->
    <div
      class="flex flex-col items-center self-center px-4 mx-2 py-6 bg-surface rounded-lg"
    >
      <h1 class="display-medium text-primary font-bold">
        Meet Your Dream Team
      </h1>
      <p class="py-3 body-medium text-surface-variant-on">
        Emmanuel Baptister, founder of Bapta Safaris, is passionate about
        wildlife conservation. Growing up in Tanzania, he started his own safari
        business to share his love for the beauty and biodiversity of Tanzania
        while supporting local communities. Your safari dream team has many
        years of safari guide experience serving customers around the globe. At
        Bapta, you're more than a customer - you're our "rafiki", and there are
        no problems, only solutions. Hakuna matata!
      </p>
      <img
        src="/images/staff/team_03.webp"
        alt=""
        class="object-cover h-64 my-8 w-fit sm:h-72 md:h-96 object-top rounded-lg md:mb-0"
      />
    </div>
    <!--Employees Grid. Right-->
    <div
      class="grid grid-cols-3 gap-3 md:grid-cols-2 xl:grid-cols-3 place-items-center"
    >
      {#each employees as { name, img }}
        <button
          class="relative w-28 h-28 bg-black sm:w-36 sm:h-36 md:w-40 md:h-40 card-zoom rounded-lg group"
        >
          <div class="card-zoom-image">
            <img src={img} alt="" class="object-center" />
          </div>
          <h1
            class="pt-2 font-bold text-center mb-auto title-medium sm:title-large card-zoom-text"
          >
            <!-- {name} -->
          </h1>
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
</style>
