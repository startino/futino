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
			backgroundImage: {
				// Image of zanzibar beach
				zanzibar: "url('/images/zanzibar/8.webp')",
				// Image of kilimanjaro mountains
				kilimanjaro: "url('/images/kilimanjaro/hero.webp')",
				meru: "url('/images/meru/hero.webp')",
				// Image of a tree :)
				about: "url('/images/safari/50.webp')",
				contact: "url('/images/safari/69.webp')",
				emmanuel: "url('/images/safari/51.webp')",
				landing_hero: "url('/images/safari/68.webp')",
			},

			fontFamily: {
				bilbo: ['Bilbo Swash Caps'],
				ubuntu: ['Ubuntu'],
				wix: ['Wix Madefor Display'],
			},

			spacing: {
				110: '27.5rem',
				600: '600px',
				800: '800px',
			},

			borderWidth: {
				1: '1px',
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
					'0%, 100%': { transform: 'translate(0%,-200%)', opacity: 0 },
					'1%, 99%': { opacity: 1 },
					'20%, 70%': { transform: 'translate(0%, 0%)' },
				},
				scroll: {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(100%)' },
				},
			},

      colors: fColors,
      plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
	},}

module.exports = config;
