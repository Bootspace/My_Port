/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alien: "#39FF14", // Neon green for the alien theme
        dark: "#0A0A0A", // Dark background
      },
    },
  },
  plugins: [],
};