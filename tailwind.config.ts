import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { 
      fontFamily: {
      'times': ['Times New Roman', 'serif']
    },
    colors: {
      'primary-purple': '#9191FF',
      'dark-blue': '#000F26',
      'light-blue': '#B4DBFF',
      'lightest-blue' : '#DFF0FF',
      'purple-blue' : '#3535FF'
    },
    animation: {
      'float': 'float 2s infinite',
    },
    height: {
      'sm-card-height': '615px',
      'mobile-height' : '520px',
      'md-card-height':'490px',
      'lg-card-height': '535px'
    }
  },
  },
  plugins: [],
}
export default config
