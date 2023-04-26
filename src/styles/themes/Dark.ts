import { createTheme } from '@mui/material';
import {   grey, deepPurple } from '@mui/material/colors';

export const DarkTheme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSize: 16,
   
    h1: {
      fontWeight: 700,
      fontSize: '48px',
       color:grey[100]
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
       color:grey[100]
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.8rem',
       color:grey[100]
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.6rem',
       color:grey[100]
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.4rem',
      color:grey[100]
    },
    h6: {
      fontWeight: 400,
      fontSize: '2.2rem',
       color:grey[100]
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.6rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '1.4rem',
       color:grey[100]
    },
    caption: {
      fontWeight: 400,
      fontSize: '1.2rem',
       color:grey[100]
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.6rem',
       color:grey[100]
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1.4rem',
       color:grey[100]
    },
    button: {
      fontWeight: 600,
      fontSize: '1.6rem',
      textTransform: 'capitalize',
       color:grey[100]
    },
  },
  palette: {
    primary: {
      main: '#303134',
      dark: grey[900],
      light: grey[500],
      contrastText: grey[100],
    },
    secondary: {
      main: deepPurple[500],
      dark: deepPurple[400],
      light: deepPurple[300],
      contrastText: grey[100],
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }, 
    text: {
      primary: grey[100],
    },

  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          color: grey[100],
        },
      },
    },
  },
});