/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: '#0c75ad',
      one: '#ffffff',
      two: '#b3b3b3',
      three: '#323232',
      four: '#2c2c2c',
      five: '#222222',
      six: '#1c1c1c',
      seven: '#121212'
    },
    fontFamily: {
      inter: 'Inter, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}