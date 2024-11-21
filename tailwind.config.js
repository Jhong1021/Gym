/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
  ],
  theme: {
    extend: {
      animation: {
        'slide-left-right': 'slideLeftToRight 10s linear infinite',
      },
      keyframes: {
        slideLeftToRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
