import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#191919',
        component: '#232323',
        highlight: '#1FFBFB',
        inactive: 'rgba(255, 255, 255, 0.58)',
      },
      width: {
        desktop: '1280px'
      },
      minWidth: {
        desktop: '1280px'
      }
    },
  },
  plugins: [nextui()],
}
export default config
