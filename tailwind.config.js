/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },

  plugins: [],
};
