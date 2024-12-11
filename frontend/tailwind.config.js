// ./tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css,scss,sass,less,stylus}",
    "./src/**/*.{html,md,markdown}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      'fh_black': {
        DEFAULT: '#39373b',
        light: '#464349',
        dark: '#28272a',
      },
      'fh_dgreen': {
        DEFAULT: '#3e5e32',
        light: '#4c753b',
        dark: '#334a2a',
      },
      'fh_lgreen': {
        DEFAULT: '#849161',
        light: '#98a378',
        dark: '#5f6a46',
      },
      'fh_yellow': {
        DEFAULT: '#d69d30',
        light: '#e2bb62',
        dark: '#c88b2a',
      },
      'fh_beige': {
        DEFAULT: '#e6ddc2',
        dark: '#d6c69a',
        light: '#f3efe1',
      },
      'fh_white': {
        DEFAULT: '#efefe8',
        light: '#f8f8f4',
        dark: '#dcdccc',
      },
      'fh_red': {
        DEFAULT: '#e73d13',
        light: '#f2551d4',
        dark: '#bd2a11',
      }

    },
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'serif': ['Roboto Slab', 'serif'],
    },

    extend: {
      utilities: {
        '.no-scroll': {
          overflow: 'hidden',
        },
      },
    },
  },
  plugins: [
    'tailwind-scrollbar',
    'tailwind-scrollbar-hide',

  ],
}