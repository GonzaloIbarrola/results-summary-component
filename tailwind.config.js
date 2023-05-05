/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gradientColorStops: {
      56 : '56%'
    },
    fontFamily: {
      'sans' : ['Hanken Grotesk', 'sans-serif']
    },
    fontSize: {
      'HeadingXL' : ['72px', {
        fontWeight: '800',
        lineHeight: '72px'
      }],
      'HeadingL' : ['32px', {
        fontWeight: '700',
        lineHeight: '42px'
      }],
      'HeadingM' : ['24px', {
        fontWeight: '700',
        lineHeight: '31px'
      }],
      'BodyBold' : ['18px', {
        fontWeight: '700',
        lineHeight: '23px'
      }],
      'Body' : ['18px', {
        fontWeight: '500',
        lineHeight: '23px'
      }],
    },
    colors: {
      'Yellow' : '#FFB21E',
      'Blue' : '#1125D6',
      'Green' : '#00BB8F',
      'Red' : '#FF5555',
      'DarkNavy' : '#303B59',
      'LightBlue' : '#CAC9FF',
      'VeryLightBlue' : '#ECF2FF',
      'White' : '#FFFFFF'
    },
    boxShadow: {
      '1' : '0px 30px 60px rgba(61, 108, 236, 0.15)'
    },
    extend: {},
  },
  plugins: [],
}

