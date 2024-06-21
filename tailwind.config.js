/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(9, 130, 230)',
        secondary: 'rgb(216, 34, 33)',
        'secondary-dark': 'rgb(185, 28, 28)',
        'secondary-light': 'rgb(255, 54, 47)',
        'primary-dark': 'rgb(3, 82, 148)',
        'primary-darker': 'rgb(2, 47, 83)',
        'blue-grey': 'rgb(240, 243, 245)',
        'grey-soft': 'rgb(241, 235, 233)',
        iron: 'rgb(84, 89, 95)',
        'red-light': 'rgb(216 34 33)'
      },
      container: {
        center: true,
        padding: '14px'
      },
      keyframes: {
        scaleIn: {
          '0%': {
            transform: 'scale(1, 1)',
            opacity: '0.0'
          },
          '30%': {opacity: '1'},
          '90%': {opacity: '0.8'},
          '100%': {
            transform: 'scale(1.15, 1.15)',
            opacity: '0.0'
          }
        }
      },
      animation: {
        scaleIn: 'scaleIn 11s ease forwards'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#000000",
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "rgb(9, 130, 230)",
          },
        },
      },
    },
  })],
};
