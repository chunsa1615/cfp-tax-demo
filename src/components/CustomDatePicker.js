import React, { forwardRef } from 'react';

import { DesktopDatePicker } from '@mui/lab';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export default function CustomDatePicker(props) {
  const { setFields, fields, currentField, label, helperText } = props;
  return (
    <DesktopDatePicker
      disableFuture
      label={label}
      // mask="____/__/__"
      openTo="year"
      // views={["year", "month", "day"]}
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
};
