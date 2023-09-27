const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				bilbo: ['Bilbo Swash Caps'],
				ubuntu: ['Ubuntu'],
				ibm: ['IBM Plex Sans'],
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
					 'rgb(var( <alpha-value>)',
					dark: 'rgb(var(--md-sys-color-primary-dark) / <alpha-value>)',
					on: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-primary-dark) / <alpha-value>) ',
					},
					container: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-primary-container-dark) / <alpha-value>) ',
						on: {
							 'rgb(var( <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-primary-container-dark) / <alpha-value>) ',
						},
					},
					inverse: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-primary-container-dark) / <alpha-value>) ',
					},
				},

				// Secondary tones
				secondary: {
					 'rgb(var( <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-secondary-dark) / <alpha-value>) ',
					on: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-secondary-dark) / <alpha-value>) ',
					},
					container: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-secondary-container-dark) / <alpha-value>) ',
						on: {
							 'rgb(var( <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-secondary-container-dark) / <alpha-value>) ',
						},
					},
				},

				// Tertiary tones
				tertiary: {
					 'rgb(var( <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-tertiary-dark) / <alpha-value>) ',
					on: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-tertiary-dark) / <alpha-value>) ',
					},
					container: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-tertiary-container-dark) / <alpha-value>) ',
						on: {
							 'rgb(var( <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-tertiary-container-dark) / <alpha-value>) ',
						},
					},
				},

				// Neutral tones (md3 names them as 'surface')
				surface: {
					 'rgb(var( <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-surface-dark) / <alpha-value>) ',
					on: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-surface-dark) / <alpha-value>) ',
						inverse: {
							 'rgb(var( <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-inverse-on-surface-dark) / <alpha-value>) ',
						},
					},
					// Neutral variant tones
					variant: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-surface-variant-dark) / <alpha-value>) ',
						on: {
							 'rgb(var( <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-surface-variant-dark) / <alpha-value>) ',
						},
					},
				},

				// Background tones
				background: {
					 'rgb(var( <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-background-dark) / <alpha-value>) ',
					on: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-background-dark) / <alpha-value>) ',
					},
				},

				outline: {
					 'rgb(var( <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-outline-dark) / <alpha-value>) ',
					variant: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-outline-variant-dark) / <alpha-value>) ',
					},
				},

				// On Error tones
				error: {
					 'rgb(var( <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-error-dark) / <alpha-value>) ',
					on: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-error-dark) / <alpha-value>) ',
					},
					container: {
						 'rgb(var( <alpha-value>) ',
						dark: 'rgb(var( <alpha-value>) ',
						on: {
							 'rgb(var( <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-error-container-dark) / <alpha-value>) ',
						},
					},
				},
			},
		},
	},
	plugins: [],
};

module.exports = config;
