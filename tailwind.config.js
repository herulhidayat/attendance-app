/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    require('flowbite-react/tailwind').content()
  ],
  theme: {
    extend: {
      colors: {
        black: '#1E222A',
        primary: '#F82C17',
        secondary: '#9C2417',
        muted: '#B0B0B0',
        cyan: {
          50:  '#FFE5E2',
          100: '#FFBCB6',
          200: '#FF938A',
          300: '#FF6B5E',
          400: '#FF4232',
          500: '#F82C17',
          600: '#C32113',
          700: '#8F180F',
          800: '#5B0F0A',
          900: '#270504'
        }
      },
      gap: {
        '0': 0,
        '1': '0.28571rem', // 4px
        '2': '0.35714rem', // 5px
        '3': '0.57143rem', // 8px
        '4': '0.71429rem', // 10px
        '5': '0.85714rem', // 12px
        '6': '1.14286rem', // 16px
        '7': '1.21429rem', // 18px
        '8': '1.42857rem', // 20px
        '9': '1.71429rem', // 24px
        '10': '2.28571rem', // 32px
        '11': '2.71429rem', // 40px
        '12': '2.85714rem', // 44px
      }
    },
    fontSize: {
      '0': 0,
      '1': '0.28571rem', // 4px
      '2': '0.35714rem', // 5px
      '3': '0.57143rem', // 8px
      '4': '0.71429rem', // 10px
      '5': '0.85714rem', // 12px
      '6': '1.14286rem', // 16px
      '7': '1.21429rem', // 18px
      '8': '1.42857rem', // 20px
      '9': '1.71429rem', // 24px
      '10': '2.28571rem', // 32px
      '11': '2.71429rem', // 40px
      '12': '2.85714rem', // 44px
      '13': '3.14286rem', // 48px
      '14': '3.71429rem', // 56px
      '15': '4.28571rem', // 80px
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-react/tailwind').plugin(),
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

