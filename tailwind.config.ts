import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xl: '3.5rem'
      },
      colors: {
        blueBlack: '#101a20',
        customBlue: '#5bd4ff',
        customWhite: '#f6f8fa',
        slate: '#d9e1e8'
      },
      screens: {
        sm: '730px',
        md: '833px'
      }
    },
  },
  plugins: [],
}
export default config
