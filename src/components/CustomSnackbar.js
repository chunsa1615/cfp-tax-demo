import { Alert, Box, IconButton, Slide, Snackbar } from '@mui/material';

import { Close as CloseIcon } from '@mui/icons-material';
import React from 'react';
import { snackbarState } from '../states';
import { useRecoilState } from 'recoil';

export default function CustomSnackbar() {
  const [snackbar, setSnackbar] = useRecoilState(snackbarState);
  const { open, message, severity } = snackbar;
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setSnackbar({ ...snackbar, open: false })}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Box sx={{ width: ['95%', '95%', 620], margin: '0 auto' }}>
      <Snackbar
        sx={{ width: 'inherit', margin: '0 auto' }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        action={action}
      >
        <Alert severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
