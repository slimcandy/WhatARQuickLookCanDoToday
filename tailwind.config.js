const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'custom-grey': '#D9D9D93D',
        'custom-link': '#0066CC'
      }
    }
  },
  plugins: [require('tailwindcss-hyphens')]
};
