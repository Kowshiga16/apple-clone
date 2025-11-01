/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // main HTML file
    "./src/**/*.{js,jsx,ts,tsx,html}", // all source files
  ],
  theme: {
    extend: {
       keyframes: {
        'gradient-move': {
          '0%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradient-move 5s linear infinite',
      },
    },
  },
  plugins: [],
}
