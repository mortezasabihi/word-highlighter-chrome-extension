/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "whir-",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
