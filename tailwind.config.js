/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16325B",
        warning: "#f1c40f"
      }
    },
    fontFamily: {
      lbold: ["Lora-Bold", "Sans-serif"],
      lbolditalic: ["Lora-BoldItalic", "Sans-serif"],
      litalic: ["Lora-Italic", "Sans-serif"],
      lmedium: ["Lora-Medium", "Sans-serif"],
      lmediumitalic: ["Lora-MediumItalic", "Sans-serif"],
      lregular: ["Lora-Regular", "Sans-serif"],
      lsemibold: ["Lora-SemiBold", "Sans-serif"],
      lsemibolditalic: ["Lora-SemiBoldItalic", "Sans-serif"],
    }
  },
  plugins: [],
}

