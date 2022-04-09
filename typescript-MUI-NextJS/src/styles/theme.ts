import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

// Create a theme instance.
let theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fac846',
      light: '#fffb78',
      dark: '#c39805',
      contrastText: '#000',
    },
    secondary: {
      main: '#0a321e',
      light: '#355c45',
      dark: '#000d00',
      contrastText: '#FFF',
    },
  },

  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '-1px',
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '21px',
      fontWeight: 'bold',
      letterSpacing: '-1px',
      lineHeight: 1.5,
    },
    h3: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 1.5,
    },

    subtitle1: {
      fontSize: '17px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 1.375,
    },
    subtitle2: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 'bolder',
      lineHeight: 1.0625,
    },

    body1: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 1.4,
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: 'rgba(0, 0, 0, 0.70)',
            backgroundColor: 'rgba(0, 0, 0, 0.40)',
          },
        },
      ],
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#001a00',
          },
        },
        sizeLarge: {
          textTransform: 'initial',
          padding: '4px 16px',
          fontWeight: 'bold',
          lineHeight: '32px',
          whiteSpace: 'nowrap',
          maxHeight: '40px',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

if (theme && theme.components) {
  theme.components = {
    MuiButton: {
      ...theme.components.MuiButton,
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: theme.palette.primary.main,
          },
        },
      ],
    },
  };
}

export default theme;
