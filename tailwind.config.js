/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "big-titles": "#0f2137",
        "text-blue-small": "#56bbd0",
        "darker-blue": "#3183ff",
        "gray-bg": "#f9fbfd",
      },
    },
  },
  plugins: [],
};
