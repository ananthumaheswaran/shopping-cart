/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        img1: "url('./src/assets/images/medium-shot-young-woman-with-smartphone.jpg')",
        img2: "url('./src/assets/images/yellow-van-shipping.jpg')",
      }),
    },
  },
  plugins: [],
};
