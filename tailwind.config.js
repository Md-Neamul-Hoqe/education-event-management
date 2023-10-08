/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        periwinkle: "#4b537e",
        "periwinkle-light": "#97a8ff",
      },
      fontFamily: {
        "kaushan-script": '"Kaushan Script", cursive',
      },
    },
  },
};
