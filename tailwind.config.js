/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg: '976',
      xl: '1440px'
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%, 100%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(1.5rem)" }
        },
      },
      animation: {
        slideIn: "slideIn 500ms ease-in-out"
      }
    },
  },
  plugins: [],
}

