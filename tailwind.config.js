const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    // enabled: true,
    content: ["./**/*.html", "./**/*.js"],
  },
  presets: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {        
        // Simple 16 column grid        
        '20': 'repeat(20, minmax(0, 1fr))',     
      },
      gridColumn: {
        'span-19': 'span 19 / span 19',
      } 
    },
  },
  plugins: [],
};
