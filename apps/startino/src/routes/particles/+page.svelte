<script>
    import Particles, { particlesInit } from '@tsparticles/svelte';
    //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
    import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

    let particlesUrl = 'http://foo.bar/particles.json'; // placeholder, replace it with a real url

    let particlesConfig = {
        particles: {
            color: {
                value: '#000'
            },
            links: {
                enable: true,
                color: '#000'
            },
            move: {
                enable: true
            },
            number: {
                value: 100
            }
        }
    };

    let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    void particlesInit(async (engine) => {
        // call this once per app
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    });
</script>

<Particles
        id="tsparticles"
        class="put your classes here"
        style=""
        options="{particlesConfig}"
        on:particlesLoaded="{onParticlesLoaded}"
/>

<!-- or -->

<Particles
        id="tsparticles"
        class="put your classes here"
        style=""
        url="{particlesUrl}"
        on:particlesLoaded="{onParticlesLoaded}"
/>
