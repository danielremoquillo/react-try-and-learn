/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#2F80ED",
          DEFAULT: "#2F80ED",

          200: "#2667BF",

          50: "#94BDF3",
          25: "#C7DBF6",
          10: "#E5EDF8",
        },
      },
    },
  },
  plugins: [],
});
