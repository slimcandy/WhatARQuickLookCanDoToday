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
        'custom-grey': '`#D9D9D93D`',
        'custom-link': 'color(rec2020 0 0.3417 1)',
        'custom-dark-grey': '#6e6e73',
        'custom-yellow': 'color(rec2020 0.9508 1 0.0035)',
        'custom-white': '#4e4e4eba',
        'custom-white-shadow': '#9b9b9b',
        'custom-cian-bg': '#f4f4f4',
        'custom-cian-blue': 'color(rec2020 0 0.3387 1)',
        'custom-cian-blue-button-hover': 'color(rec2020 0 0.3092 1)',
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
