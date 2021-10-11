import React, { forwardRef } from 'react';

import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="₩ "
    />
  );
});

NumberFormatCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default function CustomTextFieldWon(props) {
  const { setFields, fields, currentField, label, helperText } = props;

  return (
    <TextField
      label={label}
      type="text"
      value={fields[currentField]}
      onChange={e => setFields({ ...fields, [currentField]: e.target.value })}
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
      fullWidth
    />
  );
}

CustomTextFieldWon.propTypes = {
  setFields: PropTypes.func,
  // value: PropTypes.string,
  fields: PropTypes.object,
  currentField: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
};
