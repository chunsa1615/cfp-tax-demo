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
} from "@mui/material";
import React, { useState } from "react";

import PropTypes from "prop-types";

// MainDialog
export default function MainDialog(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [text, setText] = useState("");

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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.buttonLabel}
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.variable}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: 1 }}>
            {props.description}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={e => setText(e.target.value)}
            label={props.inputLabel1}
            type="text"
            fullWidth
          />
          {props.inputLabel2 && (
            <TextField
              margin="dense"
              onChange={e => setBirthDate(e.target.value)}
              label={props.inputLabel2}
              type="text"
              fullWidth
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleDone} color="primary">
            완료
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
};
