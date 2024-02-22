/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary : '#003893',
        primary : '#113678',
        secondary : '#008ee5',
        lightgray : '#f5f5f5',
        darkgray : '#dbdbdb',
      }
    },
  },
  plugins: [],
}
