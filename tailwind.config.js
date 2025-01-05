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
      keyframes: {
        'bounce-up': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation:{
        "bounce-up": "bounce-up 3s ease-in-out infinite",
        "move-left": "move-left 30s linear infinite",
      }
    },
  },
  plugins: [],
};
