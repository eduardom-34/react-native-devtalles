/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'work-black': ['WorkSansBlack', 'sans-serif'],
        'work-light': ['WorkSansLight', 'sans-serif'],
        'work-medium': ['WorkSansMedium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

