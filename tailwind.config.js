/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heading': ['Montserrat', 'sans-serif'],
      'body': ['Nunito Sans', 'sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#fdfded',
        'primary': '#d6efc8',
        'dark': '#3e883c'
      },
    },
  },
  plugins: [],
}