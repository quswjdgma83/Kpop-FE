import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#191919',
        basic: '#FFFFFF',
        highlight: '#1FFBFB',
        inactive: 'rgba(255, 255, 255, 0.58)',
        black: '#000000'
      },
      width: {
        desktop: '1280px'
      }
    },
  },
  plugins: [nextui()],
}
export default config
