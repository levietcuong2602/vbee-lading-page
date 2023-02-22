module.exports = {
  purge: ['./src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FC6634',
        secondary: {
          100: 'rgba(252, 102, 52, 0.65);',
          200: '#FE506A',
          300: '#FFF9F7',
        },
        gray: {
          0: '#F8F8F8',
          1: '#6E6B7B',
          2: ' #F3F2F7',
        },
        black: '#242424',
        'semi-black': '#392C37',
      },
      fontFamily: {
        sfd: '"SF Pro Display", sans-serif',
      },
      spacing: {
        338: '21.125rem',
        370: '23.125rem',
        416: '26rem',
        448: '28rem',
        500: '31.25rem',
        560: '35rem',
        600: '40rem',
        768: '48rem',
        864: '54rem',
        960: '60rem',
        1440: '90rem',
        7.5: '30px',
      },
      backgroundImage: {
        case: 'linear-gradient( 180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 58.21%)',
        'primary-to-red':
          'linear-gradient(140.45deg, #FC6634 27.39%, #FE506A 72.61%);',
        section1:
          ' linear-gradient(269.96deg, #FE506A -22.64%, #FF4000 77.29%);',
        section2: 'linear-gradient(231.48deg, #FE506A 0%, #FF4000 93.54%);',
        section3: 'linear-gradient(232.36deg, #FE506A 0%, #FF4000 94.85%);',
      },
      fontSize: {
        52: '3.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
