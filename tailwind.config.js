/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  theme: {
    screens: {
      sm: "900px",
    },
  },
  plugins: [],
};
