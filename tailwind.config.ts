import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        beige: "#FFFAF6",
        "dark-blue": "#1D265D",
        "light-blue": "#00ACFF",
        pink: "#ff7bff",
        orange: "#FFBA00",
        "navy-blue": "#0044FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gooper: ["Gooper", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
