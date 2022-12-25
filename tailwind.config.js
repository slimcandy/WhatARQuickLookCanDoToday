const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'custom-grey': '#D9D9D93D',
        'custom-link': '#0066CC',
        'custom-dark-grey': '#6e6e73'
      }
    }
  },
  plugins: [require('tailwindcss-hyphens')]
};
