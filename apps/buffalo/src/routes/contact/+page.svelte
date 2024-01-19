<script>
  import {
    Prose,
    Section,
    Inview,
    Container,
    Card,
    ContactForm,
    Icon,
    Video,
  } from "@repo/deprecated-lorc";
  import {
    fromTopPreset,
    downFadePreset,
    fromLeftPreset,
    fromRightPreset,
  } from "$lib/transitionOptions.ts";
  import { socials } from "$lib/socials";
</script>

<Prose size="lg">
  <Section class="bg-background py-32 md:py-44 text-left" id="contact">
    <Video
      class="absolute w-full h-full not-prose object-cover object-center"
      srcset={{ md: "/videos/slow_bjj.mp4", lg: "" }}
    />
    <div class="bg-black/70 w-full h-full absolute z-[5]" />

    <Container
      class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start z-[7]"
      sizes="max-w-7xl w-full"
    >
      <Inview presetOptions={fromLeftPreset}>
        <div class="flex flex-col gap-8">
          <h2 class="" style="margin:0">
            GET IN TOUCH, <br /> YOU’LL BE GLAD YOU DID
          </h2>
          <p style="margin:0">
            You’ve had a look at the site. You’re clearly Jiu-Jitsu-curious.
            Whether you’re big, small, young, old, male, female, a beast or a
            nerd, we have a home for you here.
          </p>
          <p style="margin:0">
            info@buffalojiujitsu.hk <br /> (+852) 9648 2270 <br /> <br /> 1/F
            Buffalo Strength Gym <br /> Mui Wo, Lantau Island, Hong Kong
          </p>
          <div class="flex flex-row gap-4 not-prose">
            {#each socials as { href, icon }}
              <a {href} target="new" class="">
                <Icon {icon} height="32" width="32" />
              </a>
            {/each}
          </div>
        </div>
      </Inview>

      <Inview presetOptions={fromRightPreset}>
        <ContactForm />
      </Inview>
    </Container>
  </Section>
  <Section class="py-12 md:py-24">
    <Container
      class="grid grid-cols-1 xl:grid-cols-2 gap-x-12 items-start justify-start"
      sizes="max-w-none w-full"
      padding="px-6 md:px-16 lg:px-32"
    >
      <img
        id="find-us"
        src="/images/buffalo_travel_times_1.jpg"
        alt="Travel times to Buffalo Jiu-Jitsu"
        class="object-contain not-prose max-w-7xl w-full rounded-sm my-auto"
      />

      <Inview presetOptions={fromLeftPreset}>
        <div class="flex flex-col">
          <h3>Arriving by ferry?</h3>
          <p>
            Turn left when you get off the ferry and walk past McDonalds, China
            Bear, The Kitchen and Isara.
          </p>
          <h3>Arriving by bus?</h3>
          <p>
            Take the 1 bus from Tai O or the 3M from Tung Chung. Wait until the
            bus gets to the Mui Wo Bus Terminus (the final stop, by the ferry
            pier) and walk past McDonalds, China Bear, The Kitchen and Isara.
          </p>
        </div>
      </Inview>
    </Container>
  </Section>
</Prose>
