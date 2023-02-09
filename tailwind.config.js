/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './contexts/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      fontFamily: {
        benguia: ['Benguia', 'sans-serif'],
        glodok: ['Glodok', 'sans-serif']
      }
    }
  },
  plugins: []
};
