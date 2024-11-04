/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue, react}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fafeff',
      primary: {
        50: '#fafeff', // MIANS White Color 
        100: '#f5f5f4',
        150: '', 
        200: '#FAFEFF',
        300: '#50505F', // Stone Grey -> Dark Theme -> Button Hover 
        400: '#C0C0C0', // Light Grey -> Dark Theme -> Button Normal
        500: '#78716c',
        600: '#090909', // Black Color -> Light Theme -> Button Normal 
        700: '#50505F', // Stone Gray -> Light Theme -> Button Hover
        800: '#292524',
        900: '#1c1917',
        950: '#090909', // MIANS Black Color
      },
      // primary: colors.stone,
    },
    boxShadow: {
      'dark-md': '0 4px 6px -1px rgba(80, 80, 95, 0.5), 0 2px 4px -1px rgba(80, 80, 95, 0.06)', // Shadow with #50505F color
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    keyframes: {
      gazzledark: {
        '0%, 100%': { color: '#fafeff' },
        '50%': { color: '#50505F' }, 
      },
      gazzlelight: {
        '0%, 100%': { color: '#090909' },
        '50%': { color: '#C0C0C0' }, 
      },
      slideUp: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      'gazzle-text-dark': 'gazzledark 1.5s infinite ease-in-out',
      'gazzle-text-light': 'gazzlelight 1.5s infinite ease-in-out',
      'slide-up': 'slideUp 1s ease-out forwards',
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
