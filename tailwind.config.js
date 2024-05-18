/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gren':'#60B064',
        'telegram':'#30B4FF',
      },
      backgroundImage: {
        'hero': "url('/src/imgs/hero.png')",

      }
    },
  },
  plugins: [],
}

