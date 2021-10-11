import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export default function CustomTextarea(props) {
  const { setFields, fields, currentField, label, helperText } = props;
  const [length, setLength] = useState(0);
  return (
    <TextField
      label={label + ` (${length}/500)`}
      type="text"
      value={fields[currentField]}
      minRows={3}
      multiline={3}
      onChange={e => {
        setFields({ ...fields, [currentField]: e.target.value });
        setLength(e.target.value.length);
      }}
      fullWidth
    />
  );
}
CustomTextarea.propTypes = {
  setFields: PropTypes.func,
  // value: PropTypes.string,
  fields: PropTypes.object,
  currentField: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
};
