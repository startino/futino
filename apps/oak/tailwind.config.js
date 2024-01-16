import { fontFamily } from "tailwindcss/defaultTheme";
import typographyConfig  from "./theme/typography.cjs";
import colorConfig  from "./theme/color.cjs";
import {animationsConfig, keyframesConfig}  from "./theme/animation.cjs";

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
			animation: animationsConfig,
			keyframes: keyframesConfig,
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
								fontWeight: "bold",
							},
							h2: {
								fontWeight: "normal",
							},
							h3: {
								fontWeight: "normal",
							},
							h4: {
								fontWeight: "normal",
							},
							h5: {
								fontWeight: "normal",
							},

							h6: {
								fontWeight: "normal",
							},
							p: {
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
