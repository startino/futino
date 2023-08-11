import fColors from '../../futino-colors.cjs';

const alpha = '<alpha-value>';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

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

			colors: fColors.tailwind,

			typography: ({ colors }) => ({
				main: {
					css: {
						'--tw-prose-body': colors.neutral[700],
						'--tw-prose-headings': colors.neutral[900],
						'--tw-prose-lead': colors.neutral[600],
						'--tw-prose-links': fColors.tertiary.light,
						'--tw-prose-bold': colors.neutral[900],
						'--tw-prose-counters': colors.neutral[500],
						'--tw-prose-bullets': colors.neutral[300],
						'--tw-prose-hr': colors.neutral[200],
						'--tw-prose-quotes': colors.neutral[900],
						'--tw-prose-quote-borders': colors.neutral[200],
						'--tw-prose-captions': colors.neutral[500],
						'--tw-prose-code': colors.neutral[900],
						'--tw-prose-pre-code': colors.neutral[200],
						'--tw-prose-pre-bg': colors.neutral[800],
						'--tw-prose-th-borders': colors.neutral[300],
						'--tw-prose-td-borders': colors.neutral[200],
						'--tw-prose-invert-body': colors.neutral[300],
						'--tw-prose-invert-headings': colors.white,
						'--tw-prose-invert-lead': colors.neutral[400],
						'--tw-prose-invert-links': fColors.tailwind.tertiary.dark.replace(alpha, 1),
						'--tw-prose-invert-bold': colors.white,
						'--tw-prose-invert-counters': colors.neutral[400],
						'--tw-prose-invert-bullets': fColors.tailwind.secondary.dark.replace(alpha, 0.4),
						'--tw-prose-invert-hr': colors.neutral[700],
						'--tw-prose-invert-quotes': colors.neutral[100],
						'--tw-prose-invert-quote-borders': fColors.tailwind.secondary.dark.replace(alpha, 0.3),
						'--tw-prose-invert-captions': colors.neutral[400],
						'--tw-prose-invert-code': colors.white,
						'--tw-prose-invert-pre-code': colors.neutral[300],
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': colors.neutral[600],
						'--tw-prose-invert-td-borders': colors.neutral[700],
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

module.exports = config;
