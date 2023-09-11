/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'tilda-sans': ['TildaSans', 'Arial', 'sans-serif'],
        'druk': ['DrukTextWideTT', 'Arial', 'sans-serif'],
      },
      colors: {
        'main': '#fff',
        'sub': '#000',
        'gray': '#adabb2',
        'spacegray': '#adabb2',
        'brightgray': '#ecedef',
        'slightgray': '#646269',
        'lightgray': '#fcfcf9',
        'darkgray': '#2e2e2e',
        'blindgray': '#525252',
        'nightgray': '#4a4d54',
        'sable': '#0d0d0d',
        'sablelight': '#111214',
        'spacesable': '#1b1d21',
        'easysable': '#262626',
        'night': '#2b2b2b'
      },
      borderRadius: {
        '4xl': '30px'
      },
      boxShadow: {
        'ms': 'inset 0 0 0 1000px rgba(0,0,0,.5)'
      },
      animation: {
        'scale': 'scale 3s linear infinite',
        'scale1': 'scale 2s linear infinite',
        'scale2': 'scale 2.5s linear infinite',
        'pulsing': 'pulsing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'scale': {
          '0%, 70%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.5)' }
        },
        'scale1': {
          '0%, 70%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.4)' }
        },
        'scale2': {
          '0%, 70%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.3)' }
        },
        'pulsing': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      fontSize: {
        'little': '11px',
        'midlit': '12px',
        'mids': '13px',
        'fourt': '14px',
        'sl': '15px',
        'smj': '18px',
        'seplight': '20px',
        'middlelight': '24px',
        'middle': '26px',
        'middlebold': '28px',
        'drunk': '30px',
        'druky': '34px',
        'sperm': '36px',
        'nuller': '38px',
        'melody': '50px',
        'melodys': '52px',
        'extramelody': '58px',
        'big': '80px',
        'giant': '98px'
      },
      screens: {
        'sl': { 'max': '1230px' },
        'ls': { 'max': '1200px' },
        'rsm': { 'max': '1000px' },
        'cl': { 'max': '704px' },
        'ms': { 'max': '660px' },
        'cm': { 'max': '604px' },
        'cms': { 'max': '560px' },
        'mds': { 'max': '479px' },
        'sr': { 'max': '380px' },
        'ssm': { 'max': '360px' },
        'ssr': { 'max': '320px' }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
