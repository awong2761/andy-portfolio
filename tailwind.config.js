/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'deep-purple' : '#1c1536',
        'deep-purple-trans' : '#20173c'
      },
      backgroundImage: {
        'mountain': "url('./assets/mountain2.jpg')",
        'morefit' : "url('./assets/moreFitLogo.PNG')",
      }
    },
    fontFamily: {
      signature: ["Dancing Script"],
      main: ["Rajdhani"]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}