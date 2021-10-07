import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  ListItem,
  TextField,
} from '@mui/material';
import React, { forwardRef } from 'react';

import { DesktopDatePicker } from '@mui/lab';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function CustomFieldListType(props) {
  const { type, setFields, fields, currentField, label } = props;

  const fieldType = type => {
    switch (type) {
      case 'date':
        return (
          <DesktopDatePicker
            disableFuture
            label={label}
            // mask="____/__/__"
            openTo="year"
            // views={["year", "month", "day"]}
            value={fields[currentField]}
            onChange={newValue => {
              setFields({ ...fields, [currentField]: newValue });
            }}
            renderInput={params => (
              <TextField
                sx={{
                  width: '100%',
                  '& > div': { flexDirection: 'row-reverse' },
                }}
                {...params}
                InputProps={params.InputProps}
              />
            )}
          />
        );
      case 'string':
        return (
          <TextField
            label={label}
            type="text"
            value={fields[currentField]}
            onChange={e =>
              setFields({ ...fields, [currentField]: e.target.value })
            }
            fullWidth
          />
        );
      case 'won':
        return (
          <TextField
            label={label}
            type="text"
            value={fields[currentField]}
            onChange={e =>
              setFields({ ...fields, [currentField]: e.target.value })
            }
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            fullWidth
          />
        );
      case 'check':
        return (
          <FormControlLabel
            label={label}
            sx={{ pl: 1 }}
            control={
              <Checkbox
                checked={fields[currentField]}
                onChange={e =>
                  setFields({ ...fields, [currentField]: e.target.checked })
                }
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
        );
      case 'subCheck':
        return (
          <Box sx={{ pl: 4, mt: -2, width: '100%' }}>
            <Divider />
            <FormControlLabel
              label={label}
              sx={{ pl: 1 }}
              control={
                <Checkbox
                  checked={fields[currentField]}
                  onChange={e =>
                    setFields({
                      ...fields,
                      [currentField]: e.target.checked,
                    })
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
            />
          </Box>
        );
      default:
        break;
    }
  };

  return <ListItem sx={{ pl: 0, pr: 0 }}>{fieldType(type)}</ListItem>;
}

CustomFieldListType.propTypes = {
  type: PropTypes.string,
  setFields: PropTypes.func,
  // value: PropTypes.string,
  fields: PropTypes.object,
  currentField: PropTypes.string,
  label: PropTypes.string,
};
