import { createTheme } from '@mui/material/styles';
import { Fjalla_One } from 'next/font/google';

const fjallaOne = Fjalla_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

/*
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
*/

const theme = createTheme({
  palette: {
    primary: {
      main: '#FCD838',
      light: '#F9E639',
      dark: '#FBCE06',
    },
    secondary: {
      main: '#F8A11F',
      light: '#F9B248',
      dark: '#DD8707',
    },
    info: {
      main: '#38FCD8',
    },
    success: {
      main: '#BEFC38',
    },
    warning: {
      main: '#D838FC',
    },
    error: {
      main: '#FC7638',
    },
    background: {
      default: '#292b2e', //'#03050d',
      paper: '#212121', // '#060a1a',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#CCCCCC',
    },
  },
  typography: {
    fontFamily: fjallaOne.style.fontFamily,
    h1: {
      fontFamily: fjallaOne.style.fontFamily,
    },
    h2: {
      fontFamily: fjallaOne.style.fontFamily,
    },
    h3: {
      fontFamily: fjallaOne.style.fontFamily,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2',
        },
      },
    },
  },
});

export default theme;
