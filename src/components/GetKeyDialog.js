import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Input,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { DesktopDatePicker, MobileDatePicker } from '@mui/lab';
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { snackbarState } from '../states';
import { useSetRecoilState } from 'recoil';

export default function GetKeyDialog(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [text, setText] = useState('');
  const [userKey, setUserKey] = useState('');
  const setSnackbar = useSetRecoilState(snackbarState);
  const [isCopyDone, setCopyDone] = useState('');
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDone = () => {
    // props.handleDone(text, birthDate);
    setOpenDialog(false);
  };

  useEffect(() => {
    setUserKey(window.localStorage.getItem('userKey'));
  }, []);

  return (
    <>
      <Link
        href="#"
        color={'#838383'}
        onClick={handleClickOpen}
        sx={{ display: 'inline', margin: 1 }}
      >
        {props.buttonLabel}
      </Link>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.variable}</DialogTitle>
        <DialogContent sx={{ pb: 4 }}>
          <DialogContentText sx={{ marginBottom: 1 }}>
            {props.description}
          </DialogContentText>
          {props.inputLabel1 && (
            <TextField
              margin="dense"
              readOnly
              value={userKey}
              onFocus={e => {
                e.currentTarget.select();
                navigator.clipboard.writeText(userKey);
                setCopyDone('복사됨');
              }}
              // onChange={e => setText(e.target.value)}
              label={props.inputLabel1}
              type="text"
              fullWidth
              helperText={isCopyDone}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

GetKeyDialog.propTypes = {
  buttonLabel: PropTypes.string,
  inputLabel1: PropTypes.string,
  inputLabel2: PropTypes.string,
  variable: PropTypes.string,
  description: PropTypes.string,
  handleDone: PropTypes.func,
  doneLabel: PropTypes.string,
};
