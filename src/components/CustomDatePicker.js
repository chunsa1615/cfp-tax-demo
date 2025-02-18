import { DesktopDatePicker, DatePicker } from '@mui/lab';
import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export default function CustomDatePicker(props) {
  const { setFields, fields, currentField, label, helperText } = props;
  return (
    <DatePicker
      disableFuture
      label={label}
      inputFormat={'yyyy-MM-dd'}
      format={'yyyy년 MM월 DD일'}
      mask={'____/__/__'}
      openTo="year"
      views={['year', 'month', 'day']}
      value={
        fields[currentField] === ''
          ? new Date()
          : new Date(fields[currentField])
      }
      onChange={newValue => {
        setFields({
          ...fields,
          [currentField]: newValue.toISOString().split('T')[0],
        });
      }}
      renderInput={params => (
        <TextField
          sx={{
            width: '100%',
            // '& > div': { flexDirection: 'row-reverse' },
          }}
          {...params}
          InputProps={params.InputProps}
          helperText={helperText}
        />
      )}
    />
  );
}

CustomDatePicker.propTypes = {
  setFields: PropTypes.func,
  fields: PropTypes.object,
  currentField: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  inputFormat: PropTypes.string,
  format: PropTypes.string,
};
