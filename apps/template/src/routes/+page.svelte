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
    title="Hong Kong's Leading Gate & Garage Firm."
    subtitle="Serving homeowners and business owners with premium services & products since 1998."
    justified="center"
    bgImg=""
  />
</Prose>
