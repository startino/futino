<script >
  import {onMount} from 'svelte';


  let modelWrapper;
  let video;
  let text;

  onMount(async () => {
    const section = document.querySelector("section");
    const end = section.querySelector("h1");

    //SCROLLMAGIC
    const controller = new ScrollMagic.Controller();

    //Scenes
    let scene = new ScrollMagic.Scene({
      duration: 9000,
      triggerElement: modelWrapper,
      triggerHook: 0
    })
      .addIndicators()
      .setPin(modelWrapper)
      .addTo(controller);

    //Text Animation
    const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

    let scene2 = new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: modelWrapper,
      triggerHook: 0
    })
      .setTween(textAnim)
      .addTo(controller);

    //Video Animation
    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
      scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
      delay += (scrollpos - delay) * accelamount;
      console.log(scrollpos, delay);

      video.currentTime = delay;
    }, 300.3);
});
</script>

<svelte:head>
</svelte:head>

<div bind:this={modelWrapper} class="h-screen relative">
  <h1 bind:this={text} class="absolute top-1/2 left-1/2 text-9xl">
    Hey there, how are yopu?
  </h1>
  <video bind:this={video} class="w-full h-full object-cover" src="/animations/garage_animation_60fps.mp4" preload>
  </video>
</div>

<section>
REVOLUTION
</section>


