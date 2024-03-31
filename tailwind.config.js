/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parent: "rgba(56, 54, 33, O.98)",
        bodyBg: "rgb(249, 178, 209)",
        dyBg: "#5a0667",
        byBg: "rgb(24, 178, 209)"
      },

      spacing: {
        "2rem": "2rem",
        "3rem" : "3rem"
      },

      fontSize:{
        2: "2rem"
      }
    },
  },
  plugins: [],
}
