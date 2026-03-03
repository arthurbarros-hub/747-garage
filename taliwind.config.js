/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C6A75E",
        ink: "#0A0A0A",
        off: "#F2F2F2",
      },
    },
  },
  plugins: [],
};