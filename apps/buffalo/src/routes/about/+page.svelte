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
  } from "lorc";
  import {
    fromTopPreset,
    downFadePreset,
    fromLeftPreset,
    fromRightPreset,
  } from "$lib/transitionOptions.ts";
  import { socials } from "$lib/socials";
  import { testimonials } from "$lib/testimonials";
  const aboutTopics = [
    {
      title: "INTERESTED?",
      body: [
        "Tried it before, but would like another go?",
        "Or you have been training for a while but still consider yourself a beginner because something has been missing?",
        "Buffalo Jiu-Jitsu is here to provide you with a solid foundation in Jiu-Jitsu. We are dedicated to helping you grow and excel in this incredible sport.",
        "In Jiu-Jitsu, your journey is unique. We understand that everyone comes from different backgrounds and experiences. That's why our training is live. You can do it at your own pace. You will work with a partner to explore ideas and become skilful in small areas of the game first, then ‘join the dots’ to mature into a confident grappler. Whether you're looking to compete, stay fit, meet new friends or simply have a fun workout, we've got you covered.",
        "Located on the first floor of Buffalo Strength Gym in Mui Wo, Lantau Island, our training room culture offers challenges with a welcoming and supportive atmosphere. We are committed to your success and will guide you every step of the way. Come and try: your first week is on us.",
      ],
      cta: { title: "GET STARTED", href: "/contact" },
    },
    {
      title: "EXCLUSIVELY NO GI",
      body: [
        "What’s a gi, anyway? Pronounced G-EE (as in ‘gear’), it is the Japanese period costume worn in Judo and Jiu-Jitsu, as well as other martial arts. It affords a level of proxy control over your opponent via his/her clothing and vice-versa.",
        "In contrast, ‘no gi’ involves simply a rashguard and shorts, which we are not allowed grab. We believe no gi Jiu-Jitsu fulfils the promise of this martial art: controlling another human without using any tools outside of ourselves. The comfort and purity of training in simple attire without a cumbersome gi, along with the recent explosion in popularity of no gi Jiu-Jitsu in both professional and amateur arenas has led to a movement by many to train exclusively in no gi Jiu-Jitsu.",
        "Previously seen as only for the younger and more athletic, no gi Jiu-Jitsu has developed to allow for older, less athletic and even physically-compromised practitioners to control more athletic opponents, thus enjoying their training while developing skills.",
        "No gi Jiu-Jitsu has taken the grappling world by storm and raised the profile of the sport around the world. Begin your no gi journey with us.",
      ],
      cta: {},
    },
    {
      title: "OUR MANIFESTO",
      body: [
        "All our training sessions are ‘No Gi’. If someone wishes to train in a gi during an open mat, it is permissible, but our regular training sessions will not involve a gi.",
        "We have built a great ‘room’, which means our training culture is productive, welcoming, respectful, safe, a decent challenge and fun.",
        "We provide an environment for grapplers to explore and develop their game with a friendly, competitive attitude. We help each other get sharper by providing challenges. We act as a team on and off the mats.",
      ],
      cta: {},
    },
  ];
</script>

<Prose size="lg">
  <Section class="bg-background max-h-screen h-screen" id="contact">
    <Video
      class="absolute w-full h-full not-prose object-cover object-center"
      srcset={{ md: "/videos/slow_bjj.mp4", lg: "" }}
    />
    <div class="bg-black/70 w-full h-full absolute z-[5]" />
    <Inview presetOptions={fromTopPreset} class="z-[7]">
      <Container
        class="grid gap-x-12 gap-y-8 items-start z-[7]"
        sizes="max-w-7xl w-full h-full"
      >
        <h1 class="" style="margin:0">WELCOME TO BUFFALO JIU-JITSU</h1>
      </Container>
    </Inview>
  </Section>
  <Section class="py-12 md:py-24">
    <Container
      class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 items-start justify-start"
      sizes="max-w-none w-full"
      padding="px-8 md:px-16 xl:px-32"
    >
      {#each aboutTopics as { title, body, cta }, i}
        <Card
          class="hidden lg:flex relative h-full w-full aspect-[2/3] {i % 2 == 0
            ? ''
            : 'lg:hidden'}"
        >
          <img
            src={testimonials[i].img}
            alt={testimonials[i].name}
            class="absolute h-full w-full object-cover not-prose"
          />
          <blockquote class="">
            {testimonials[i].body}
          </blockquote>
          <p>{testimonials[i].name}</p>
        </Card>

        <Prose size="sm" class="w-full h-full ">
          <Card class="flex flex-col " size="max-w-none">
            <h6 style="margin: 0;" class="text-primary">0{i + 1}</h6>
            <h1 style="margin: 0;" class="pb-6">{title}</h1>
            {#each body as paragraph}
              <p style="margin: 0;" class="py-2">
                {paragraph}
              </p>
            {/each}
          </Card>
        </Prose>
        <Card
          class="hidden lg:flex flex-col h-full w-full  aspect-[2/3] relative {i %
            2 ==
          0
            ? 'lg:hidden'
            : ''}"
        >
          <img
            src={testimonials[i].img}
            alt={testimonials[i].name}
            class="absolute h-full w-full object-cover not-prose"
          />
          <div class="bg-black/50 w-full h-full absolute z-[5]" />

          <figure class="mt-10">
            <blockquote
              class="text-center text-xl font-semibold leading-8 text-surface-on sm:text-2xl sm:leading-9"
            >
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption class="mt-10">
              <img
                class="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div
                class="mt-4 flex items-center justify-center space-x-3 text-base"
              >
                <div class="font-semibold text-surface-on">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  class="fill-gray-900"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </Card>
      {/each}
    </Container>
  </Section>
</Prose>
