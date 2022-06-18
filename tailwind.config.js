/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       "text-1": "'Poppins', sans-serif",
       "text-2": "'Volkhov', serif",
      },
      colors: {
        "accent-1": '#F1A501',
        "accent-2": '#DF6951',
        "accent-3": '#D5AEE4',
        "accent-4": '#FFF1DA',
        "accent-5": "#181E4B"
      }
    },
  },
  plugins: [],
}
