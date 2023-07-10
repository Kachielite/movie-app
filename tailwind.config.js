/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8B319",
        primaryText: "#F9F9F9",
      },
    },
    fontFamily: {
      sans: ["Luckiest Guy", "cursive"],
      lato: ["Lato", "serif"],
    },
  },
  plugins: [],
};
