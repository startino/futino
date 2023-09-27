import { join } from 'path';
import fColors from '../../futino-colors.cjs';
import fAnimations from '../../futino-animations.cjs';
import fKeyframes from '../../futino-keyframes.cjs';
import fPadding from '../../futino-padding.cjs';
import fTypography from '../../futino-typography.cjs';

const alpha = '<alpha-value>';


const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('lorc'),
			'../**/*.{html,js,svelte,ts}',
		),
	],

	DEFAULTMode: 'class',

	theme: {
		extend: {
			padding: fPadding,
			fontFamily: {
				bilbo: ['Bilbo Swash Caps'],
				ubuntu: ['Ubuntu'],
			},

			animation: fAnimations,
			keyframes: fKeyframes,
			colors: fColors,

			typography: ({colors}) => (fTypography(colors, alpha)),
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
