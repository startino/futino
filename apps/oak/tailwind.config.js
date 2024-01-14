import { fontFamily } from "tailwindcss/defaultTheme";
import typographyConfig  from "./theme/typography.cjs";
import colorConfig  from "./theme/color.cjs";


/** @type {import('tailwindcss').Config} */

const alpha = "<alpha-value>";

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}",
		"./theme/*.{html,js,svelte,ts,ttf,cjs}",
	],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: colorConfig,
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			typography: ({ colors }) => ({
				...typographyConfig(colors, alpha),
				...{
					DEFAULT: {
						css: {
							h1: {
								fontFamily: "TASA Orbiter Display",
								fontWeight: "bold",
							},
							h2: {
								fontFamily: "TASA Orbiter Text",
								fontWeight: "normal",
							},
							h3: {
								fontFamily: "TASA Orbiter Text",
								fontWeight: "normal",
							},
							h4: {
								fontFamily: "TASA Orbiter Text",
								fontWeight: "normal",
							},
							h5: {
								fontFamily: "TASA Orbiter Text",
								fontWeight: "normal",
							},

							h6: {
								fontFamily: "TASA Orbiter Text",
								fontWeight: "normal",
							},
							p: {
								fontFamily: "TASA Orbiter Text",
								letterSpacing: "0.5",
								lineHeight: "1.5",
								opacity: "0.75",
							},
						},
					},
				},
			}),
		}
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio")
	],
};

export default config;
