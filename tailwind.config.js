/** @type {import('tailwindcss').Config} */

const colors = {
  hearts: "#f03464",
  clubs: "#235955",
  diamonds: "#f06b3f",
  spades: "#3c4368",
};

const safelist = Object.keys(colors).flatMap((color) => [
  `bg-${color}`,
  `bg-${color}/50`,
  `border-${color}`,
  `outline-${color}`,
  `text-${color}`,
]);

module.exports = {
  daisyui: {
    themes: ["garden"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist,
  theme: {
    colors,
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
