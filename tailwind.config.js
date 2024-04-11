/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#1E2640",
        "side-hover": "#353C53",
        success: "#22C55E",
        main: "#FAFAFA",
        "light-blue": "#146EB4",
        "dark-blue": "#0E4F82",
        grey: "#F2F2F2",
        processing: "#999999",
        "svg-color": "#666666",
        "grey-text": "#4D4D4D",
      },
    },
  },
  plugins: [],
};
