<script lang="ts">
  import { text } from "@sveltejs/kit";
  import { Hero, Card, Prose, Button, Container, AnimatedCounter } from "lorc";
  const HeroCTA = {
    "Our work": {
      href: "/",
      highlight: true,
    },
    "Contact us": {
      href: "/",
      highlight: false,
    },
  };
</script>

<Prose>
  <Hero
    CTAButtons={HeroCTA}
    title="Futino's Secret Sauce."
    subtitle=""
    justified="center"
    bgImg="/bg-landing"
  />
</Prose>
