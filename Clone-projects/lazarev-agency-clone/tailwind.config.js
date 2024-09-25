/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-backgound": "#111111",
        "secondary-background": "#FFFFFF",
        "accent-background": "#1F1F1F",
        "primery-text": "#FFFFFF",
        "secondery-text": "#828282",
        "button-background": "#0DA34E",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 26s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
    fontFamily: {
      poppins: "Poppins ,system-ui,font-sens",
    },
  },
  plugins: [],
};
