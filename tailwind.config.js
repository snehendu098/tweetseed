const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        back: "#2D2D2D",
        sidebar: "#262626",
        primary: "#6c6c6c",
        like: "#D43939",
        schedulebtn: "#6FB1FF",
        dark: "#202020",
        comment: "#8CFF98",
        retweet: "#D1D34F",
        txtlight: "#cacaca",
      },
    },
  },
  plugins: [],
};
