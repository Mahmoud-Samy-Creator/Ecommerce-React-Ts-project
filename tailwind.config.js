/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f8f8',
        darkBlue: '#242b3a',
      },
      fontFamily: {
        playWrite: [' "Playwrite AU SA"'],
      },
    },
  },
  plugins: [],
}

