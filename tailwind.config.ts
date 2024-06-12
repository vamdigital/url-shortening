import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        'max-mobile': { max: '1023px' }
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '375px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1440px'
        }
      },
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        red: 'hsl(0, 87%, 67%)',
        'd-violet': 'hsl(257, 27%, 26%)',
        'bg-gray': 'hsl(230,25%, 95%)',
        'l-gray': 'hsl(0, 0%, 75%)',
        'g-violet': 'hsl(257, 7%, 63%)',
        'v-d-blue': 'hsl(255, 11%, 22%)',
        'v-d-violet': 'hsl(260, 8%, 14%)'
      }
    }
  },
  plugins: []
}
export default config
