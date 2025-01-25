/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#E5E7EB',
        'custom-dark-blue': '#1A1A1D',
        'subtle-gray': '#E2DFD0',
        'link-color':'#9DB2BF'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
