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
    themes: [
      {
        garden: {
          primary: "#f8860d",
          "primary-focus": "#cb6c06",
          "primary-content": "#ffffff",
          secondary: "#007ebd",
          "secondary-focus": "#005c8a",
          "secondary-content": "#ffffff",
          accent: "#8B1E3F",
          "accent-focus": "#61152c",
          "accent-content": "#ffffff",
          neutral: "#5c5757",
          "neutral-focus": "#272525",
          "neutral-content": "#e9e7e7",
          "base-100": "#e9e7e7",
          "base-200": "#d1cccc",
          "base-300": "#b9b1b1",
          "base-content": "#100f0f",
          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist,
  theme: {
    colors,
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
