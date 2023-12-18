import { join } from "path";
import fColors from "../../futino-universal-colors.cjs";
import fAnimations from "../../futino-animations.cjs";
import fKeyframes from "../../futino-keyframes.cjs";
import fPadding from "../../futino-padding.cjs";
import fTypography from "../../futino-new-typography.cjs";

const alpha = "<alpha-value>";

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve("lorc"), "../**/*.{html,js,svelte,ts,ttf}"),
  ],

  DEFAULTMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/pre_mockup_designs/garage_ref.png')",
      },
      padding: fPadding,
      fontFamily: {
        sans: ["TASA Orbiter Text"],
      },

      animation: fAnimations,
      keyframes: fKeyframes,
      colors: fColors,

      typography: ({ colors }) => ({
        ...fTypography(colors, alpha),
        ...{
          DEFAULT: {
            css: {
              h1: {
                fontFamily: "TASA Orbiter Display",
                fontWeight: "bold",
              },
              h2: {
                fontFamily: "TASA Orbiter Text",
                fontWeight: "normal",
              },
              h3: {
                fontFamily: "TASA Orbiter Text",
                fontWeight: "normal",
              },
              h4: {
                fontFamily: "TASA Orbiter Text",
                fontWeight: "normal",
              },
              h5: {
                fontFamily: "TASA Orbiter Text",
                fontWeight: "normal",
              },

              h6: {
                fontFamily: "TASA Orbiter Text",
                fontWeight: "normal",
              },
              p: {
                fontFamily: "TASA Orbiter Text",
                letterSpacing: "0.5",
                lineHeight: "1.5",
                opacity: "0.75",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};

module.exports = config;
