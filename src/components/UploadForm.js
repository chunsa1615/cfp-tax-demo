import { Button, FormControl, styled } from '@mui/material';
import React, { useState } from 'react';

import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';
import { UploadFile } from '@mui/icons-material';
import { snackbarState } from '../states';
import { useSetRecoilState } from 'recoil';

const Input = styled('input')({
  display: 'none',
});

export default function UploadForm({ disabled, buttonText }) {
  // const setMessage = useSetRecoilState(snackbarMessage);
  // const setOpen = useSetRecoilState(snackbarOpen);
  const setSnackbar = useSetRecoilState(snackbarState);
  const [loading, setLoading] = useState(false);
  return (
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
        if (e.target[0].files.length === 0) {
          // setMessage("Test");
          // setOpen(true);
          setSnackbar({
            open: true,
            message: '선택된 파일이 없습니다.',
            severity: 'error',
          });
          return;
        }
        setLoading(true);
        setTimeout(async () => {
          await setLoading(false);
        }, 2000);
        console.log(e);
      }}
    >
      <FormControl fullWidth>
        {!disabled && <input type="file" multiple name="" id="" />}
        <LoadingButton
          loading={loading}
          disabled={disabled}
          variant="contained"
          size="large"
          startIcon={<UploadFile />}
          loadingPosition="start"
          type="submit"
        >
          {buttonText}
        </LoadingButton>
      </FormControl>
    </form>
  );
}

UploadForm.propTypes = {
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
};
