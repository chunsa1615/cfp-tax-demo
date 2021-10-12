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
      main: teal[900],
      contrastText: 'white',
    },
    secondary: {
      main: green[400],
    },
    button: {
      main: yellow[800],
    },
    background: {
      default: yellow[50],
      appBar: yellow['A700'],
      // contrastText: grey[700],
      // paper: yellow[100],
    },
    text: {
      //   primary: cyan[400],
      //   secondary: cyan[100],
      appBar: '#424242',
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
          margin: ['0 auto', '0 auto', 0],
          marginLeft: ['inherit', 'inherit', 'calc(50vw - 320px)'],
          borderLeft: [0, 0, '1px solid #bbb'],
          borderRight: [0, 0, '1px solid #bbb'],
          minHeight: '100vh',
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
