import { createTheme } from '@mui/material/styles';
import { Fjalla_One, Roboto } from 'next/font/google';

const fjallaOne = Fjalla_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#FDD835',
      light: '#FEEB9A',
      dark: '#CAA502',
    },
    secondary: {
      main: '#FFA726',
      light: '#FDD08C',
      dark: '#BF7200',
    },
    info: {
      main: '#42A5F5',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#BA68C8',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#242424',
      paper: '#464646',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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
