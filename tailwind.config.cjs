/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue, react}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: {
        50: '#fafeff', // MIANS White Color 
        100: '#f5f5f4', 
        200: '#FAFEFF',
        300: '#C0C0C0', // Button Hover Color -> Light Grey Color for Dark
        400: '#fafeff', // Button Color -> White Color for Dark
        500: '#78716c',
        600: '#090909', // Button Hover Color -> Black Color for Light
        700: '#50505F', // Button Color -> Stone Gray Color for Light
        800: '#292524',
        900: '#1c1917',
        950: '#090909', // MIANS Black Color
      },
      // primary: colors.stone,

    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
