/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'mono': ["Martian Mono", "monospace"],
      extend: {},
    },
    plugins: [],
  }
};