const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js', './components/**/*.tsx', './pages/**/*.tsx'],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
        container: {
          center: true,
        },    
        colors: {
          'accent-1': '#FAFAFA',
          'accent-2': '#EAEAEA',
          'accent-7': '#333',
          success: '#0070f3',
          cyan: '#79FFE1',
        },
        spacing: {
          28: '7rem',
        },
        letterSpacing: {
          tighter: '-.04em',
        },
        lineHeight: {
          tight: 1.2,
        },
        fontSize: {
          '5xl': '2.5rem',
          '6xl': '2.75rem',
          '7xl': '4.5rem',
          '8xl': '6.25rem',
        },
        boxShadow: {
          sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
          md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
      },
    },
  }