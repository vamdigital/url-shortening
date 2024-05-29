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
      container: {
        center: true,
        screens: {
          sm: '375px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1440px'
        }
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        // sans: ['var(--font-geist-sans)'],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
        // mono: ['var(--font-geist-mono)']
      }
    }
  },
  plugins: []
}
export default config
