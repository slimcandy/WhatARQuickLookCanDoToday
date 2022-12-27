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
        'custom-dark-grey': '#6e6e73',
        'custom-yellow': '#fcff00',
        'custom-white': '#4e4e4eba',
        'custom-white-shadow': '#9b9b9b',
        'custom-cian-bg': '#f4f4f4',
        'custom-cian-blue': '#0468ff',
        'custom-cian-blue-button-hover': '#0661ec',
        'prose-pre-bg': '#1e293b'
      },
      backgroundImage: {
        'ar-glyph': "url('/src/images/ARKit-glyph.png')"
      },
      listStyleType: {
        'lower-roman': 'lower-roman'
      }
    }
  },
  plugins: [require('tailwindcss-hyphens')]
};
