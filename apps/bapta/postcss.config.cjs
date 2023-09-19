/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    // Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    // But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
};

module.exports = config;
