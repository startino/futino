<script lang="ts">
  import { fromTop, Container, Card, Inview, Prose, Button } from "@repo/deprecated-lorc";
  const classTimes = [
    { day: "MON", time: "7:45PM" },
    {
      day: "WED",
      time: "7:45PM",
    },
    {
      day: "THURS",
      time: "7:45PM",
    },
  ];
  const prices = [
    {
      label: "TRIAL WEEK",
      price: "FREE",
    },
    {
      label: "DAY PASS",
      price: "$150",
    },
    {
      label: "MONTHLY",
      price: "$750",
    },
  ];
</script>

<Container
  class="grid grid-cols-1 md:grid-cols-2 gap-y-12 items-center text-center"
  sizes="max-w-7xl w-fit"
>
  <Inview presetOptions={fromTop} class="w-full h-full">
    <Card
      id="adult-classes"
      class="flex flex-col gap-6 items-center w-full justify-self-end"
    >
      <h1 class="" style="margin:0">ADULT CLASSES</h1>
      <img
        class="not-prose object-cover object-center aspect-[3/4] w-full"
        src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9342.jpg"
        alt="Adult classes"
      />
      <Prose size="sm" class="w-full">
        <div class="grid grid-cols-2 gap-y-2 w-full">
          {#each prices as { price, label }}
            <h4 class="text-left justify-self-start" style="margin:0">
              {price}
            </h4>
            <h4
              class="text-right whitespace-nowrap justify-self-end"
              style="margin:0"
            >
              {label}
            </h4>
          {/each}
          <div class="pt-4 col-span-2" />
          {#each classTimes as { day, time }}
            <h4 class="text-left justify-self-start" style="margin:0">
              {day}
            </h4>
            <h4
              class="text-right whitespace-nowrap justify-self-end"
              style="margin:0"
            >
              {time}
            </h4>
          {/each}
          <div class="pt-6 col-span-2" />
        </div>
      </Prose>
    </Card>
  </Inview>
  <Inview presetOptions={fromTop} class="w-full h-full">
    <Card
      id="youth-classes"
      class="flex flex-col gap-6 items-center w-full h-full justify-self-start"
    >
      <h1 class="" style="margin:0">YOUTH CLASSES</h1>
      <img
        class="not-prose object-cover object-center aspect-[3/4] w-full"
        src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9376.jpg"
        alt="Adult classes"
      />
      <Prose size="sm" class="w-full my-auto">
        <h3 class="">COMING SOON!</h3>
        <h4>SIGN UP IF INTERESTED!</h4>
      </Prose>
    </Card>
  </Inview>
</Container>
