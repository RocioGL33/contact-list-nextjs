/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      white: "#F7F7F7",
      blueLight: "#F2FAFC",
      lavender: "#212C5E",
      blue: "#131E50",
      blue2: "#1C85E8",
      yellow: "#FFD93D",
      grey: "#B2B2B2",
      darkGrey: "#181818",
      red: "#FD2816",
      intenseRed: "#6D070B",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
};
