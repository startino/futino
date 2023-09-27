const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

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

      colors: {
	// Primary tones
	primary: {
		DEFAULT: 'rgb(var(--md-sys-color-primary))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-primary))',
		},
		container: {
			DEFAULT: 'rgb(var(--md-sys-color-primary-container))',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-primary-container))',
			},
		},
		inverse: {
			DEFAULT: 'rgb(var(--md-sys-color-inverse-primary))',
		},
	},

	// Secondary tones
	secondary: {
		DEFAULT: 'rgb(var(--md-sys-color-secondary))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-secondary))',
		},
		container: {
			DEFAULT: 'rgb(var(--md-sys-color-secondary-container))',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-secondary-container))',
			},
		},
	},

	// Tertiary tones
	tertiary: {
		DEFAULT: 'rgb(var(--md-sys-color-tertiary))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-tertiary))',
		},
		container: {
			DEFAULT: 'rgb(var(--md-sys-color-tertiary-container))',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-tertiary-container))',
			},
		},
	},

	// Neutral tones (md3 names them as 'surface')
	surface: {
		DEFAULT: 'rgb(var(--md-sys-color-surface))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-surface))',
			inverse: {
				DEFAULT: 'rgb(var(--md-sys-color-inverse-on-surface))',
			},
		},
		// Neutral variant tones
		variant: {
			DEFAULT: 'rgb(var(--md-sys-color-surface-variant))',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-surface-variant))',
			},
		},
	},

	// Background tones
	background: {
		DEFAULT: 'rgb(var(--md-sys-color-background))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-background))',
		},
	},

	outline: {
		DEFAULT: 'rgb(var(--md-sys-color-outline))',
		variant: {
			DEFAULT: 'rgb(var(--md-sys-color-outline-variant))',
		},
	},

	// On Error tones
	error: {
		DEFAULT: 'rgb(var(--md-sys-color-error))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-error))',
		},
		container: {
			DEFAULT: 'rgb(var(--md-sys-color-error-container))',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-error-container))',
			},
		},
	},
};
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

module.exports = config;
