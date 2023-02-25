/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        xl: "1320px",
        "2xl": "1520px",
      },
    },
  },
  plugins: [],
};
