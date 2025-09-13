/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { red: "#E2211C" }
      },
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Inter','Helvetica','Arial','sans-serif']
      },
      dropShadow: {
        logo: "0 6px 30px rgba(226,33,28,.4)"
      }
    },
  },
  plugins: [],
}
