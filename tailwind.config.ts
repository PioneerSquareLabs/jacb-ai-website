import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx", "./src/stories/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        beige: "#FFFAF6",
        "dark-beige": "#fcf3ed",
        "dark-blue": "#1D265D",
        "light-blue": "#00ACFF",
        pink: "#ff7bff",
        orange: "#FFBA00",
        "navy-blue": "#0044FF",
        "drake-passage": "#1D265D",
        "violet-beauregarde": "#0043FF",
        "not-black-black": "#191818",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gooper: ["Gooper", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
