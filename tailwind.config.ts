import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(85 106 243)',
        'primary-light': 'rgb(85 243 222)',
        'primary-dark': 'rgb(85 185 243)'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")]
}
export default config
