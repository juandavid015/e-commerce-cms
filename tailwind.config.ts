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
        gray: "#C9C9C9"
      },
      fontFamily: {
        sans: ['var(--font-heebo)'],
        heading: ['var(--font-exo_2)']
      },
      gridTemplateColumns: {
        layout: '200px auto',
        "products-show": 'repeat(2, minmax(0, 400px))',
      },
      gridTemplateRows : {
        layout: 'minmax(0, 1fr) auto',
        "products-show": 'repeat(auto-fit, minmax(0, auto))',
      }
    },
  },
  plugins: [],
}
export default config
