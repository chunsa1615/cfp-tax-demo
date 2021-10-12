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
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { DesktopDatePicker } from '@mui/lab';
import PropTypes from 'prop-types';

// MainDialog
export default function MainDialog(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [text, setText] = useState('');

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDone = () => {
    props.handleDone(text, birthDate);
    setOpenDialog(false);
  };

  return (
    <>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        {props.buttonLabel}
      </Button>
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
              autoFocus
              margin="dense"
              onChange={e => setText(e.target.value)}
              label={props.inputLabel1}
              type="text"
              fullWidth
            />
          )}
          {props.inputLabel2 && (
            <DesktopDatePicker
              disableMaskedInput
              disableFuture
              label={props.inputLabel2}
              // mask="____/__/__"
              openTo="year"
              // views={["year", "month", "day"]}
              value={birthDate}
              onChange={newValue => {
                newValue
                  ? setBirthDate(newValue.toISOString().split('T')[0])
                  : '';
              }}
              renderInput={params => (
                <TextField
                  sx={{
                    width: '100%',
                    // '& > div': { flexDirection: 'row-reverse' },
                    mt: 1,
                  }}
                  {...params}
                  InputProps={params.InputProps}
                />
              )}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleDone} color="primary">
            {props.doneLabel ? props.doneLabel : '완료'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

MainDialog.propTypes = {
  buttonLabel: PropTypes.string,
  inputLabel1: PropTypes.string,
  inputLabel2: PropTypes.string,
  variable: PropTypes.string,
  description: PropTypes.string,
  handleDone: PropTypes.func,
  doneLabel: PropTypes.string,
};
