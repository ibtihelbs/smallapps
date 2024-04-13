/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    colors: {
      // Using your defined variables
      veryDark: "var(--Very-dark)",
      darkGrayish: "var(--Dark-grayish)",
      grayish: "var(--Grayish)",
      lightgrayish: "var(--Light-grayish)",
      veryLightGrayish: "var(--Very-light-grayish)",
      white: "var(--White)",
      // Add more colors if needed
    },
    fontFamily: {
      space: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
