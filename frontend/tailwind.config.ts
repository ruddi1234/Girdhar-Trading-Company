import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grain: {
          50: '#faf8f3',
          100: '#f5f1e6',
          200: '#e8dfc4',
          300: '#dbc9a0',
          400: '#c9ad72',
          500: '#b89352',
          600: '#a67d46',
          700: '#8a643c',
          800: '#715237',
          900: '#5d4430',
        },
        earth: {
          50: '#f7f6f3',
          100: '#ede9e0',
          200: '#dbd2c1',
          300: '#c5b59f',
          400: '#af987d',
          500: '#9d8264',
          600: '#8f7158',
          700: '#775d49',
          800: '#634d3e',
          900: '#524134',
        },
      },
    },
  },
  plugins: [],
}
export default config

