<script>
  import { onMount } from "svelte";

  let modelWrapper;
  let video;
  let inside_element;

  onMount(async () => {
    const section = document.querySelector("section");
    const end = section.querySelector("h1");

    //SCROLLMAGIC
    const controller = new ScrollMagic.Controller();

    //Scenes
    let scene = new ScrollMagic.Scene({
      duration: 2500,
      triggerElement: modelWrapper,
      triggerHook: 0,
    })
      .addIndicators()
      .setPin(modelWrapper)
      .addTo(controller);

    //Text Animation
    const textAnim = TweenMax.fromTo(
      inside_element,
      3,
      { opacity: 1 },
      { opacity: 0 }
    );

    let scene2 = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: modelWrapper,
      triggerHook: 0,
    })
      .setTween(textAnim)
      .addTo(controller)
      .offset(2000);

    //Video Animation
    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", (e) => {
      scrollpos = e.scrollPos / 800;
    });

    setInterval(() => {
      delay += (scrollpos - delay) * accelamount;

      video.currentTime = delay;
    }, 33.3);
  });
</script>

<svelte:head />

<div bind:this={modelWrapper} class=" h-screen relative w-screen">
  <div
    bind:this={inside_element}
    class="absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 w-fit h-fit"
  >
    <slot />
  </div>
  <video
    bind:this={video}
    class="w-full h-full object-cover absolute"
    src="/animations/garage_animation_parsed_120fps.mp4"
    fetchpriority="high"
    preload
  />
</div>
