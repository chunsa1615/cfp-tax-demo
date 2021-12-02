import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, cyan, green, grey, teal, yellow } from '@mui/material/colors';

import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import React from 'react';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
  palette: {
    primary: {
      main: amber[400],
      contrastText: '#3c2d00',
    },
    secondary: {
      main: '#ffde82',
    },
    button: {
      main: yellow[800],
      contrastText: '#3c2d00',
      boxShadow: 0,
      '&hover:': {
        backgroundColor: amber[400],
        color: '#3c2d00',
      },
    },
    background: {
      default: '#fafafa',
      appBar: '#ffc803',
      // contrastText: grey[700],
      // paper: yellow[100],
    },
    text: {
      //   primary: cyan[400],
      //   secondary: cyan[100],
      appBar: '#3c2d00',
    },
  },
  typography: {
    h1: 40,
    h2: 36,
    h3: 32,
    h4: 28,
    h5: 24,
    h6: 20,
  },
});

export default function ThemeWrapper(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: ['100%', '100%', 640],
          margin: ['0 auto', '0 auto', '0 auto'],
          boxShadow: 3,
          minHeight: '100vh',
          overflowY: 'hidden',
          background: 'white',
          // bgcolor: "white",
        }}
      >
        <CssBaseline />
        {props.children}
      </Box>
    </ThemeProvider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.element,
};
