import { join } from 'path';
import fColors from '../../futino-colors.cjs';

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
			padding: {
				18: '4.5rem',
			},

			fontFamily: {
				bilbo: ['Bilbo Swash Caps'],
				ubuntu: ['Ubuntu'],
			},

			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				slideDown: 'slideDown 5s ease-in-out 1',
				scroll: 'scroll 5s ease-in-out',
			},

			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				slideDown: {
					'0%, 100%': { transform: 'translate(0%, -200%)', opacity: 0 },
					'1%, 99%': { opacity: 1 },
					'20%, 70%': { transform: 'translate(0%, 0%)' },
				},
				scroll: {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(100%)' },
				},
			},

			colors: fColors,

			typography: ({ colors }) => ({
				main: {
					css: {
						'--tw-prose-body': colors.neutral[300],
						'--tw-prose-headings': colors.white,
						'--tw-prose-lead': colors.neutral[400],
						'--tw-prose-links': fColors.tertiary.DEFAULT.replace(alpha, 1),
						'--tw-prose-bold': colors.white,
						'--tw-prose-counters': colors.neutral[400],
						'--tw-prose-bullets': fColors.secondary.DEFAULT.replace(alpha, 0.4),
						'--tw-prose-hr': colors.neutral[700],
						'--tw-prose-quotes': colors.neutral[100],
						'--tw-prose-quote-borders': fColors.secondary.DEFAULT.replace(alpha, 0.3),
						'--tw-prose-captions': colors.neutral[400],
						'--tw-prose-code': colors.white,
						'--tw-prose-pre-code': colors.neutral[300],
						'--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-th-borders': colors.neutral[600],
						'--tw-prose-td-borders': colors.neutral[700],
					},
				},
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
