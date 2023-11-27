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
        iris: '#5D5FEF',
        "white-gray": '#F3F3F3',
        black: "#111111",
        gray: "#C9C9C9",
        yellow: '#FBC02D'
      },
      fontFamily: {
        sans: ['var(--font-heebo)'],
        heading: ['var(--font-exo_2)']
      },
      gridTemplateColumns: {
        layout: '200px minmax(auto, 1fr)',
        "products-show": 'repeat(2, minmax(0, 400px))',
        products: 'repeat(auto-fit, minmax(0, 350px))'
      },
      gridTemplateRows : {
        layout: 'min-content minmax(0, 1fr) auto',
        "products-show": 'repeat(auto-fit, minmax(0, auto))',
      },
      animation: {
        'expand-right': 'expand .6s ease-out 0s 1 forwards',
        'expand-bottom': 'expand-bottom .3s ease-out 0s 1 forwards',
        'expand-top': 'expand-top .3s ease-out 0s 1 forwards',
      },
      keyframes: {
        'expand': {
          '0%': { width: '0px', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        'expand-bottom': {
          '0%': {  padding: '0px', display: 'none', opacity: '0' },
          '100%': {   padding: '32px' , display: 'flex', opacity: '1' },
          
        },
        'expand-top': {
          '0%': {  display: 'flex', padding: '32px', opacity: '1'  },
          '100%': {  display: 'none', padding: '0px', opacity: '0'  },
        }

      }
    },
  },
  plugins: [],
}
export default config
