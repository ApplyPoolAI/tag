/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'm14': '1380px',
        // => @media (min-width: 1380px) { ... }
      },
      colors: {
        gray: {
          DEFAULT: '#595959',
          "79": '#797979',
          'c5':'#C5C5C5',
          '97':'#979797'
        },

        "main": "#131E42",
        "sec": "#C80815",

        "secD": "#0079d5",
        "dark": "#0c0c0c",
        "light": "#ffffff"
      },
    },
  },
  plugins: [],
};
