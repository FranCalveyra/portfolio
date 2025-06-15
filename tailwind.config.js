/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      mono: ['Martian Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#BB86FC',
        accent: '#03DAC6',
        bg: '#121212',
        surface: '#1E1E1E',
        text: '#E0E0E0',
        'text-muted': '#AAAAAA',
      },
    },
    plugins: [],
  }
};