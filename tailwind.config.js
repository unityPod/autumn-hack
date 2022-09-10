/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        success: "#004D44",
        error: "#AC1A2F",
        caution: "#CF7600",
      },
      fontFamily: {
        primary: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
