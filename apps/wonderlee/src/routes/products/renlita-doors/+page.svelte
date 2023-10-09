<script lang="ts">
  import { Container, Button } from "lorc";
  import { slide } from "svelte/transition";

  const renlita_doors = [
    {
      label: "Renlita Floataway",
      href: "#floataway",
    },
    {
      label: "Renlita Hingeway",
      href: "#hingeway",
    },
    {
      label: "Renlita Foldaway",
      href: "#foldaway",
    },
    {
      label: "Renlita A750 NuFold",
      href: "#nufold",
    },
    {
      label: " Renlita Sovereign",
      href: "#sovereign",
    },
    {
      label: " Renlita Frameless Glass",
      href: "#frameless-glass",
    },
  ];
</script>

<Container class="flex flex-col gap-12 pt-44">
  <Container class="flex flex-col">
    <h2>Different Renlita Doors</h2>
    <div class="grid grid-cols-3 gap-6 place-items-center">
      <div class="flex flex-col place-items-center">
        <img
          src="/products/residential-gates/sliding/uphill_button.gif"
          alt=""
          class="object-contain object-center w-full h-full"
        />
        <Button href="#uphill" class="w-full">Uphill</Button>
      </div>
      <div class="flex flex-col place-items-center">
        <img
          src="/products/residential-gates/sliding/SSW-110-1.gif"
          alt=""
          class="object-contain object-center w-full h-full"
        />
        <Button href="#curved" class="w-full">Curved</Button>
      </div>

      <div class="flex flex-col place-items-center">
        <img
          src="/products/residential-gates/sliding/Telescopic_button.gif"
          alt=""
          class="object-contain object-center w-full h-full"
        />
        <Button href="#telescopic" class="w-full">Telescopic</Button>
      </div>

      <div class="flex flex-col place-items-center">
        <img
          src="/products/residential-gates/sliding/Cantilever_gate_2.gif"
          alt=""
          class="object-contain object-center w-full h-full"
        />
        <Button href="#uphill" class="w-full">Cantilever</Button>
      </div>
    </div>
  </Container>

  <Container class="flex flex-col md:grid md:grid-cols-2 gap-6" id="uphill">
    <img
      src="/products/residential-gates/sliding/uphill_button.gif"
      alt=""
      class="object-contain object-center w-full h-full"
    />
    <div class="flex flex-col col-span-1">
      <h3>How does uphill slide gate work</h3>
      <ul class="ulink">
        <li>The gate is trapezoidal to match the slope.</li>
        <li>The entire weight of the gate rests on a rails.</li>
        <li>
          Powerd by Tousek frequency converter motor withc mechanical brake to
          arrest the gate in stop position.
        </li>
        <li>
          One-way reduction gear to counter the downward m•g•Sinθ component.
        </li>
      </ul>
    </div>
  </Container>
  <Container class="flex flex-col md:grid md:grid-cols-2 gap-6" id="curved">
    <img
      src="/products/residential-gates/sliding/ssw_curved.gif"
      alt=""
      class="object-contain object-center w-full h-full"
    />
    <div class="flex flex-col col-span-1">
      <h3>How does curved slide gate work</h3>
      <ul class="ulink">
        <li>
          The entire weight of the gate rests on a curved rails with turning
          radius of 0.5m.
        </li>
        <li>Each leaf is about 1m in width.</li>
        <li>
          Powerd by Tousek frequency converter motor for maximum torque at very
          low starting speed.
        </li>
        <li>Wall-mount top track for stability.</li>
      </ul>
    </div>
  </Container>
  <Container class="flex flex-col md:grid md:grid-cols-2 gap-6" id="telescope">
    <img
      src="/products/residential-gates/sliding/TELESCOPIC.gif"
      alt=""
      class="object-contain object-center w-full h-full"
    />
    <div class="flex flex-col col-span-1">
      <h3>How does telescopic gate work with only 1 motor</h3>
      <ul class="ulink">
        <li>
          The entire weight of the gate rests on the rails where the wheels
          moves on, therefore no hanging track needed.
        </li>
        <li>The active leaf is driven by the motor through the teeth racks.</li>
        <li>
          The passive leaf is driven by a chain-and-sprocket telescopic gear. It
          will travel as double speed.
        </li>
        <li>
          (1) motor; (2) rail; (3) travel limit; (4) top roller bracket; (5)
          safe strike; (6) teeth rack; (7) chain-and-sprocket drive.
        </li>
      </ul>
    </div>
  </Container>
  <Container class="flex flex-col md:grid md:grid-cols-2 gap-6" id="cantilever">
    <img
      src="/products/residential-gates/sliding/Cantilever_gate_1.gif"
      alt=""
      class="object-contain object-center w-full h-full"
    />
    <div class="flex flex-col col-span-1">
      <h3>How does cantilever gate work without ground track</h3>
      <ul class="ulink">
        <li>
          The entire weight of the gate rests on stationary carriages where the
          gate slides on, therefore no track needed.
        </li>
        <li>
          Automation of cantilever gate is the same as slide gate with track.
        </li>
        <li>
          The gate opener only needs to overcome inertia and friction to move
          the gate. Gate can go up to 10 meter in length and 500 Kg in weight.
          Material can be stainless steel, wrought iron, brass, Aluminum or
          glass.
        </li>
        <li>
          (1) carriages; (2) parking wheel; (3) monorail; (4) guide-in fork; (5)
          turnbuckle; (6) guide bracket; (Z) diagonal tie; (D) diagonal tie.
        </li>
      </ul>
    </div>
  </Container>
</Container>
