import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        '2xl': '1400px'
      },
    },
    extend: {
      keyframes: {
        "shake": {
          '0%, 100%': { marginLeft: '0rem' },
          '25%': { marginLeft: '0.5rem' },
          '75%': { marginLeft: '-0.5rem' }
        },
      },
      animation: {
        "shake": 'shake 200ms ease-in-out',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        barlow: ['var(--font-barlow)'],
        dm: ['var(--font-dm-sans)'],
        space: ['var(--font-space-grotesk)'],
        open: ['var(--font-open-sans)'],
        bebas: ['var(--font-bebas)']
      },
      colors: {
        'black': "black",
        'black75': "#1B1A1EBF",
        'black50': "#1B1A1E80",
        'black25': "#1B1A1E40",
        'black10': "#1B1A1E41A",
        'black5': "#1B1A1E0D",
        'secondary': {
          200: "#fdca44",
          300: "#fdc32d",
          400: "#FDBD16"
        },
        'accent': {
          10: "#6D91FF",
          20: "#5E86FF",
          30: "#4E7AFF",
          40: "#3C6DFF",
          50: "#285EFF",
          100: "#134EFF",
          200: "#134CFF",
          300: "#1248FF",
          400: "#1040FF",
          500: "#0D37DA",
          600: "#0C33C8",
          700: "#0A2EB5",
          800: "#072590",
          900: "#06217D",
          950: "#041C6A",
        },
      }
    },
  },
  plugins: [],
}
export default config
