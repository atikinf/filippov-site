/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      colors: {
        cream: '#FAF7F2',
        ink: '#1a1a1a',
        stone: '#6B6B6B',
        accent: '#D4A574',
        // Bauhaus / De Stijl inspired palette
        mondrian: {
          blue: '#0051BA',
          yellow: '#FACA00',
          red: '#DD0100',
          black: '#000000',
          white: '#FFFFFF',
          gray: '#8C8C8C',
          // Deeper variations
          navy: '#003366',
          orange: '#FF6600',
          green: '#006B3C',
        },
      },
    },
  },
  plugins: [],
};

