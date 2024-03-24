/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient" : "linear-gradient(transparent 50%, #AFDBF5)",
        "main" : "linear-gradient(transparent 50%, #e17dcd)"
},

    },
  },
  plugins: [],
}

