/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif'],
        serif: ['Space Grotesk', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
          // Adds default inner padding (1rem for all screen sizes, 2rem for lg screens and above).
        },
      },
    },
  },
  plugins: [],
};
