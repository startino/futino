import fTypography from '../../legacy/futino-new-typography.cjs';
import fColors from '../../legacy/futino-universal-colors.cjs';
const alpha = '<alpha-value>';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			width: {
				18: '4.5rem',
				26: '6.5rem'
			},
			maxWidth: {
				'9xl': '92rem'
			},
			colors: {
				...{
					border: 'hsl(var(--border) / <alpha-value>)',
					input: 'hsl(var(--input) / <alpha-value>)',
					ring: 'hsl(var(--ring) / <alpha-value>)',
					background: 'hsl(var(--background) / <alpha-value>)',
					foreground: 'hsl(var(--foreground) / <alpha-value>)',
					primary: {
						DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
						foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
					},
					secondary: {
						DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
						foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
					},
					destructive: {
						DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
						foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
					},
					muted: {
						DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
						foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
					},
					accent: {
						DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
						foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
					},
					popover: {
						DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
						foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
					},
					card: {
						DEFAULT: 'hsl(var(--card) / <alpha-value>)',
						foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
					}
				},
				...fColors
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Roboto']
			},
			typography: ({ colors }) => ({
				...fTypography(colors, alpha),
				...{
					DEFAULT: {
						css: {
							h1: {
								fontFamily: 'Roboto',
								fontWeight: '900'
							},
							h2: {
								fontFamily: 'Roboto',
								fontWeight: '900'
							},
							h3: {
								fontFamily: 'Roboto',
								fontWeight: '900'
							},
							h4: {
								fontFamily: 'Roboto',
								fontWeight: 'normal'
							},
							h5: {
								fontFamily: 'Roboto',
								fontWeight: 'normal'
							},

							h6: {
								fontFamily: 'Roboto',
								fontWeight: 'normal'
							},
							p: {
								fontFamily: 'Roboto',
								fontWeight: '300',
								letterSpacing: '0.5',
								lineHeight: '1.2',
								opacity: '0.75'
							}
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

export default config;
