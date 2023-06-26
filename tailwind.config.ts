import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      gradient_deep_blue: `linear-gradient(to right, #6a11cb 0%, #2575fc 100%)`,
      gradient_green: `linear-gradient(to right, #43e97b 0%, #38f9d7 100%)`,
      gradient_purple: `linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)`,
      gradient_orange: `linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)`,
    },
    colors: {
      white: '#ffffff',
      black: '#333333',
      transparent: 'transparent',
      purple: {
        100: '#F7EDFE',
        200: '#E0BDFB',
        300: '#C58DF0',
        400: '#AC5FE6',
        500: '#7C2BB8',
      },
      blue: {
        50: '#E0F3FF',
        100: '#BDE4FF',
        200: '#80CCFF',
        300: '#3DB1FF',
        400: '#0096FA',
        500: '#006FBA',
      },
      deepBlue: {
        50: '#E0E7FA',
        100: '#C1D0F6',
        200: '#82A0ED',
        300: '#4875E5',
        400: '#1D4EC8',
        500: '#14358A',
      },
      neutral: {
        50: '#D3DFFD',
        100: '#ACC3FB',
        200: '#5583F7',
        300: '#0C4AE9',
        400: '#CDD0D8',
        500: '#68718B',
      },
      yellow: {
        50: '#FBF4EA',
        100: '#F6E9D5',
        200: '#EED3AA',
        300: '#E5BD80',
        400: '#DCA656',
        500: '#D4912C',
      },
      red: {
        50: '#FBE7E5',
        100: '#F6D0CA',
        200: '#EEA096',
        300: '#E57161',
        400: '#DC412D',
        500: '#AF2E1D',
      },
      green: {
        50: '#DBFFEA',
        100: '#B8FFD5',
        200: '#70FFAC',
        300: '#2EFF85',
        400: '#00E660',
        500: '#009E42',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
} satisfies Config
