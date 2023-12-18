import { join } from "path";
import fColors from "../../futino-colors.cjs";
import fAnimations from "../../futino-animations.cjs";
import fKeyframes from "../../futino-keyframes.cjs";
import fPadding from "../../futino-padding.cjs";
import fTypography from "../../futino-typography.cjs";

const alpha = "<alpha-value>";

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve("lorc"), "../**/*.{html,js,svelte,ts}"),
  ],

  DEFAULTMode: "class",

  theme: {
    extend: {
      fontFamily: {
        bilbo: ["Bilbo Swash Caps"],
        ubuntu: ["Ubuntu"],
        ibm: ["IBM Plex Sans"],
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        slideDown: "slideDown 5s ease-in-out 1",
        scroll: "scroll 5s ease-in-out",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slideDown: {
          "0%, 100%": { transform: "translate(0%,-200%)", opacity: 0 },
          "1%, 99%": { opacity: 1 },
          "20%, 70%": { transform: "translate(0%, 0%)" },
        },
        scroll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },

      colors: fColors,
      plugins: [],
    },
  },
};

module.exports = config;
