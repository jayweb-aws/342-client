/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#05a081",
        secondary: "red"
      },
      boxShadow: {
        custom: "0px 8px 15px rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [],
}

