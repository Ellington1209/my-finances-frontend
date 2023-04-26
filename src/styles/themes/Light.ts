import { createTheme } from '@mui/material';
import { blueGrey,  grey } from '@mui/material/colors';

export const LightTheme = createTheme({
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
       color:grey[900]
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
       color:grey[900]
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
       color:grey[900]
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.6rem',
       color:grey[900]
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.4rem',
      color:grey[900]
    },
    h6: {
      fontWeight: 500,
      fontSize: '2.2rem',
       color:grey[900]
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.6rem',
      color:grey[900]
    },
    body2: {
      fontWeight: 400,
      fontSize: '1.4rem',
       color:grey[900]
    },
    caption: {
      fontWeight: 400,
      fontSize: '1.2rem',
       color:grey[900]
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.6rem',
       color:grey[900]
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1.4rem',
       color:grey[900]
    },
    button: {
      fontWeight: 600,
      fontSize: '1.6rem',
      textTransform: 'capitalize',
       color:grey[900]
    },
  },
  palette: {
    primary: {
      main: grey[100],
      dark: grey[300],
      light: grey[500],
      contrastText: grey[900],
    },
    secondary: {
      main: blueGrey[500],
      dark: blueGrey[600],
      light: blueGrey[400],
      contrastText: '#ffffff',
    },
    background: {
      paper: grey[100],
      default: grey[200],
    }, 
    text: {
      primary: grey[700],
    },

  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          color: grey[700],
        },
      },
    },
  },
});