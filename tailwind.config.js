module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './layout/**/*.{js,ts,jsx,tsx}',
  './helpers/**/*.{js,ts,jsx,tsx}',
  './subpages/**/*.{js,ts,jsx,tsx}'
],
  darkMode: "class", // or 'media' or 'class'
  theme: 

  { 
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
    fontFamily: {
      custom1: ["Kaushan Script"],
      custom2: ["Great Vibes"],
      custom3: ["Pacifico"]
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
};
