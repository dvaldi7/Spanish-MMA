/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '768px' },
      },

      backgroundImage: {
        "body-pattern": "url('/pattern.png')",
        "banner": "url('/mmabanner.jpg')",
      },

      colors: {
        'custom-blue': '#1e3a8a',
        'custom-gold': '#ffdb0fe5',
        "custom-black": "#000511ff",
        "custom-red": "#e60303ff"
      },
      boxShadow: {
        header3D: "0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f",
        box: "0px 0px 1px rgba(0, 0, 0, 0.3), 0px 3px 7px rgba(0, 0, 0, 0.3), 0px 1px white inset, 0px -3px 1px rgba(0, 0, 0, 0.3) inset"
      },

      fontFamily: {
        bebas: ['BebasNeue', 'sans-serif'],
        trebuchet: ['TrebuchetMS', 'sans-serif'],
        symbols: ['WebSymbolsRegular'],
      },

      animation: {
        'spin-slow': 'spin 7s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear',
        'bg-banner': 'mmaBanner 10s linear',
        'show-card-icon': 'showCardIcon 300ms linear',
        'show-card-category': 'showCategory 400ms linear',
        'show-card-desc': 'showDesc 400ms linear',
      },

      keyframes: {
        fromBellow: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fromRight: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        mmaBanner: {
          '0%': { 'background-position': '0px 0px' },
          '50%': { 'background-position': '-100px -100px' },
          '100%': { 'background-position': '0px 0px' },
        },
        showCardIcon: {
          'from': { transform: 'translateY(-200%)' },
          'to': { transform: 'translateY(0%)' },
        },
        showCategory: {
          'from': { transform: 'translateY(-300%)' },
          'to': { transform: 'translateY(0%)' },
        },
        showDesc: {
          'from': { transform: 'translateX(-300%)' },
          'to': { transform: 'translateX(0%)' },
        },

      },

      variants: {
        fontSize: ['responsive', 'hover', 'group-hover'],
      },

      fontSize: {
             'xxs': '.625rem', 
             '2xs': '.75rem', 
           }
    },
  },
  plugins: [],
}