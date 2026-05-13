/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1d4ed8',
          'blue-dark': '#1e3a8a',
          orange: '#f97316',
          'orange-dark': '#ea580c',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease both',
        'float': 'float 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
