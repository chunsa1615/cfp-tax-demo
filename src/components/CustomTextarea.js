import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export default function CustomTextarea(props) {
  const { setFields, fields, currentField, label, helperText } = props;
  const [length, setLength] = useState(0);
  const maxLength = 500;
  return (
    <TextField
      label={label + ` (${length}/${maxLength})`}
      type="text"
      value={fields[currentField]}
      minRows={3}
      multiline={3}
      onChange={e => {
        if (length < maxLength) {
          setFields({ ...fields, [currentField]: e.target.value });
          setLength(e.target.value.length);
        }
      }}
      fullWidth
    />
  );
}
CustomTextarea.propTypes = {
  setFields: PropTypes.func,
  fields: PropTypes.object,
  currentField: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
};
