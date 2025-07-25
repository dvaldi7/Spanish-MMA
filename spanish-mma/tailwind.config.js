/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "body-pattern": "url('/pattern.png')",
      },
      colors: {
        'custom-blue': '#1e3a8a',
        'custom-gold': '#ffdb0fe5',
        "custom-black": "#000511ff",
        "custom-red": "#e60303ff"
      },
      fontFamily: {
        bebas: ['BebasNeue', 'sans-serif'],
        trebuchet: ['TrebuchetMS', 'sans-serif'],
        symbols: ['WebSymbolsRegular'],
      },
    },
  },
  plugins: [],
}