/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #ffa387 0%, #fe4f70 51%, #ffa387 100%)',
      },
      keyframes: {
        fadeInLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        fadeOutRight: {
          "0%": { transform: "translateX(0%)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 0.5s ease-out",
        fadeOutRight: "fadeOutRight 0.5s ease-out",
      },
    },
  },
  plugins: [],
}