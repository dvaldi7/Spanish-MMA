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
      animation:{
        'spin-slow':'spin 7s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear',
      },
      keyframes:{
        fromBellow:{
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fromRight:{
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}