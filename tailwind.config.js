/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          white: "#fff",
          black: "#000",
          primary: "#EC524D",
          secondary: "#F2BF62",
          accent: "#D7BA69",
          success: "#36B47B",
          info: "#23875A",
        },
      },
    },
  },
  plugins: [],
};
