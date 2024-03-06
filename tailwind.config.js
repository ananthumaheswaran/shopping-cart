/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        img: "url('./src/assets/images/medium-shot-young-woman-with-smartphone.jpg')",
      }),
    },
  },
  plugins: [],
};
