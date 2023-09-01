const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				bilbo: ['Bilbo Swash Caps'],
				ubuntu: ['Ubuntu'],
			},
			boxShadow: {
				glow: '0 0 4px 4px current;',
				button: '0 2px 6px 4px current',
				'button-hover': '0 0 2px 2px current',
			},
			dropShadow: {
				whatsapp: [
					'-5px 2px 7px #064A16BB','5px -2px 7px #064A16BB'
				],
				'whatsapp-hover': [
					'-5px 2px 10px #064A16FF','5px -2px 10px #064A16FF'
				],
				instagram: [
					'-5px 2px 7px #04417FBB','5px -2px 7px #700053BB'
				],
				'instagram-hover': [
					'-5px 2px 10px #04417FFF','5px -2px 10px #700053FF'
				],
				phone: [
					'-5px 2px 7px #5C0C9DBB','5px -2px 7px #1A24A4BB'
				],
				'phone-hover': [
					'-5px 2px 10px #5C0C9DFF','5px -2px 10px #1A24A4FF'
				],
				email: [
					'-5px 2px 7px #400B8DBB','5px -2px 7px #000069BB'
				],
				'email-hover': [
					'-5px 2px 10px #400B8DFF','5px -2px 10px #000069FF'
				],
				// Light
				'glow-sm-light': '0 0 5px rgb(var(--md-sys-color-primary-container-light) / 0.5)',
				'glow-md-light': '0 0 10px rgb(var(--md-sys-color-primary-container-light) / 0.5)',
				'glow-lg-light': '0 0 15px rgb(var(--md-sys-color-primary-container-light) / 0.5)',
				'glow-xl-light': '0 0 20px rgb(var(--md-sys-color-primary-container-light) / 0.5)',
				'glow-2xl-light': '0 0 25px rgb(var(--md-sys-color-primary-container-light) / 0.5)',
				// Dark
				'glow-sm-dark': '0 0 5px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
				'glow-md-dark': '0 0 10px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
				'glow-lg-dark': '0 0 15px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
				'glow-xl-dark': '0 0 20px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
				'glow-2xl-dark': '0 0 25px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
			},
			spacing: {
				110: '27.5rem',
				600: '600px',
				800: '800px',
			},

			borderWidth: {
				1: '1px',
			},
			backgroundSize: {
				'50%': '50%',
				'25%': '25%',
			},

			animation: {
				shine: 'shine 0.9s ease-out',
				wiggle: 'wiggle 1s ease-in-out infinite',
				slideDown: 'slideDown 5s ease-in-out 1',
				scroll: 'scroll 5s ease-in-out',
				carouselSlide: 'carouselSlide infinite 25s linear',
				typingtitle: 'typing 1s steps(5), blinkCursor 6 0.5s steps(5) ',
				typingsubtitle: 'typing 3s steps(64), blinkCursor infinite 0.5s steps(64) ',
				ripple: 'ripple 0.7s ',
				fadeIn: 'fadeIn 2s ',
				fadeOut: 'fadeOut 2s',
				glow: 'glow 3s infinite',
			},

			keyframes: {
				ripple: {
					to: {
						transform: 'scale(4)',
						opacity: 0,
					},
				},
				typing: {
					'0%': { width: '0' },
					'99%': { width: '100%' },
					'100%': { 'border-right-color': 'transparent' },
				},
				blinkCursor: {
					'0%': { 'border-right-color': 'white' },
					'50%': { 'border-right-color': 'transparent' },
				},
				carouselSlide: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				shine: {
					'100%': { left: '125%' },
				},
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
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { transform: 1 },
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { transform: 0 },
				},
				glow: {
					'0%, 100%': { transform: 'rotate3d(0)' },
					'50%': { transform: 'rotate3d(0,1,0,90deg)' },
				},
			},

			colors: {
				// Primary tones
				primary: {
					light: 'rgb(var(--md-sys-color-primary-light)/ <alpha-value>)',
					dark: 'rgb(var(--md-sys-color-primary-dark) / <alpha-value>)',
					on: {
						light: 'rgb(var(--md-sys-color-on-primary-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-primary-dark) / <alpha-value>) ',
					},
					container: {
						light: 'rgb(var(--md-sys-color-primary-container-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-primary-container-dark) / <alpha-value>) ',
						on: {
							light: 'rgb(var(--md-sys-color-on-primary-container-light)/ <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-primary-container-dark) / <alpha-value>) ',
						},
					},
					inverse: {
						light: 'rgb(var(--md-sys-color-inverse-primary-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-primary-container-dark) / <alpha-value>) ',
					},
				},

				// Secondary tones
				secondary: {
					light: 'rgb(var(--md-sys-color-secondary-light)/ <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-secondary-dark) / <alpha-value>) ',
					on: {
						light: 'rgb(var(--md-sys-color-on-secondary-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-secondary-dark) / <alpha-value>) ',
					},
					container: {
						light: 'rgb(var(--md-sys-color-secondary-container-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-secondary-container-dark) / <alpha-value>) ',
						on: {
							light: 'rgb(var(--md-sys-color-on-secondary-container-light)/ <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-secondary-container-dark) / <alpha-value>) ',
						},
					},
				},

				// Tertiary tones
				tertiary: {
					light: 'rgb(var(--md-sys-color-tertiary-light)/ <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-tertiary-dark) / <alpha-value>) ',
					on: {
						light: 'rgb(var(--md-sys-color-on-tertiary-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-tertiary-dark) / <alpha-value>) ',
					},
					container: {
						light: 'rgb(var(--md-sys-color-tertiary-container-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-tertiary-container-dark) / <alpha-value>) ',
						on: {
							light: 'rgb(var(--md-sys-color-on-tertiary-container-light)/ <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-tertiary-container-dark) / <alpha-value>) ',
						},
					},
				},

				// Neutral tones (md3 names them as 'surface')
				surface: {
					light: 'rgb(var(--md-sys-color-surface-light)/ <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-surface-dark) / <alpha-value>) ',
					on: {
						light: 'rgb(var(--md-sys-color-on-surface-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-surface-dark) / <alpha-value>) ',
						inverse: {
							light: 'rgb(var(--md-sys-color-inverse-on-surface-light)/ <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-inverse-on-surface-dark) / <alpha-value>) ',
						},
					},
					// Neutral variant tones
					variant: {
						light: 'rgb(var(--md-sys-color-surface-variant-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-surface-variant-dark) / <alpha-value>) ',
						on: {
							light: 'rgb(var(--md-sys-color-on-surface-variant-light)/ <alpha-value>) ',
							dark: 'rgb(var(--md-sys-color-on-surface-variant-dark) / <alpha-value>) ',
						},
					},
				},

				// Background tones
				background: {
					light: 'rgb(var(--md-sys-color-background-light)/ <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-background-dark) / <alpha-value>) ',
					on: {
						light: 'rgb(var(--md-sys-color-on-background-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-background-dark) / <alpha-value>) ',
					},
				},

				outline: {
					light: 'rgb(var(--md-sys-color-outline-light)/ <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-outline-dark) / <alpha-value>) ',
					variant: {
						light: 'rgb(var(--md-sys-color-outline-variant-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-outline-variant-dark) / <alpha-value>) ',
					},
				},

				// On Error tones
				error: {
					light: 'rgb(var(--md-sys-color-error-light)/ <alpha-value>) ',
					dark: 'rgb(var(--md-sys-color-error-dark) / <alpha-value>) ',
					on: {
						light: 'rgb(var(--md-sys-color-on-error-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-on-error-dark) / <alpha-value>) ',
					},
					container: {
						light: 'rgb(var(--md-sys-color-error-container-light)/ <alpha-value>) ',
						dark: 'rgb(var(--md-sys-color-error-container-light)/ <alpha-value>) ',
						on: {
							light: 'rgb(var(--md-sys-color-on-error-container-light)/ <alpha-value>) ',
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
