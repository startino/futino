import { join } from 'path';
import fColors from '../../futino-universal-colors.cjs';
import fAnimations from '../../futino-animations.cjs';
import fKeyframes from '../../futino-keyframes.cjs';
import fPadding from '../../futino-padding.cjs';
import fTypography from '../../futino-new-typography.cjs';

const alpha = '<alpha-value>';


const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('lorc'),
      '../**/*.{html,js,svelte,ts,ttf}',
    ),
  ],

  DEFAULTMode: 'class',

  theme: {
    extend: {
      backgroundImage:
      {
        'landing': "url('/images/Screenshot from 2023-11-02 13-43-57.png')"
      },
      padding: fPadding,

      animation: fAnimations,
      keyframes: fKeyframes,
      colors: fColors,

      typography: ({ colors }) => ({
        ...fTypography(colors, alpha), ...{
          DEFAULT: {
            css: {
              h1: {
                fontFamily: "Antonio",
              },
              h2: {
                fontFamily: "Antonio",
              },
              h3: {
                fontfamily: "Antonio",
              },
              h4: {
                fontfamily: "Antonio",
              },
              h5: {
                fontfamily: "Antonio",
              },

              h6: {
                fontfamily: "Antonio",
              },
              p: {
                fontFamily: "Orienta",
                letterSpacing: "0.5",
                lineHeight: "1.5",
                opacity: '0.75'
              }
            }
          },
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};

module.exports = config;
