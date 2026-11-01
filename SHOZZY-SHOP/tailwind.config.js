const path = require('path');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eaf7ff',
          100: '#d9f0ff',
          500: '#00c2ff',
          600: '#00a9e8',
          700: '#0e6bff',
          800: '#081d48',
          900: '#020816'
        },
        accent: '#7dd3fc',
        neon: '#38bdf8'
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.35)',
        panel: '0 20px 50px rgba(7, 13, 26, 0.55)'
      }
    }
  },
  plugins: []
};
