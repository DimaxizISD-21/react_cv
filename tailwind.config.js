module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"] 
      },
      colors: {
        "color-title": "#0B0A0A",
        "color-text": "#403A3A",
        "color-light-text": "#707070",
        "dark-text-title": "#f2f2f2", 
        "dark-text": "#bfbfbf",
        "dark-bg-1": "#181616",
        "dark-bg-2": "#212121",
      },
    },
  },
  plugins: [],
}