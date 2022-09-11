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
        "primary-600": "#FFF9F3",
        "primary-500": "#9777FA",
        "primary-400": "#727272",
        "primary-300": "#F5BE3D",
        "primary-200": "#37404E",
        "primary-100": "#A0ABB8",
        "secondary-600": "#1F2938",
        "secondary-500": "#FFFFFF",
        "secondary-400": "#061224",
        success: "#004D44",
        error: "#AC1A2F",
        caution: "#CF7600",
      },
      fontFamily: {
        primary: ["Montserrat", ...defaultTheme.fontFamily.sans],
        secondary: ["OpenSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
