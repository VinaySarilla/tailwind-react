const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",

  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    display: ['Inter', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        rose:colors.red,
        amber:colors.amber
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
