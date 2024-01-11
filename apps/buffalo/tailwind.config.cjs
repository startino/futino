import fColors from '../../legacy/futino-universal-colors.cjs';
import fAnimations from '../../legacy/futino-animations.cjs';
import fKeyframes from '../../legacy/futino-keyframes.cjs';
import fTypography from '../../legacy/futino-new-typography.cjs';

const alpha = '<alpha-value>';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', '../**/*.{html,js,svelte,ts,ttf}'],

	DEFAULTMode: 'class',

	theme: {
		extend: {
			backgroundImage: {
				landing: "url('/images/Screenshot from 2023-11-02 13-43-57.png')"
			},
			padding: { 69420: 'pt-24' },
			animation: fAnimations,
			keyframes: fKeyframes,
			colors: fColors,

			fontFamily: {
				sans: 'Orienta',
				Antonio: 'Antonio'
			},

			typography: ({ colors }) => ({
				...fTypography(colors, alpha),
				...{
					DEFAULT: {
						css: {
							h1: {
								fontFamily: 'Antonio'
							},
							h2: {
								fontFamily: 'Antonio'
							},
							h3: {
								fontFamily: 'Antonio'
							},
							h4: {
								fontfamily: 'Antonio'
							},
							h5: {
								fontfamily: 'Antonio'
							},

							h6: {
								fontfamily: 'Antonio'
							},
							p: {
								fontFamily: 'Orienta',
								letterSpacing: '0.5',
								lineHeight: '1.5',
								opacity: '0.75'
							}
						}
					}
				}
			})
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries')
	]
};

module.exports = config;
