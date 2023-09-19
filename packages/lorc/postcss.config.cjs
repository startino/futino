/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require('postcss-import'),
		// Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
		// But others, like autoprefixer, need to run after,
		autoprefixer,
	],
};

module.exports = config;
