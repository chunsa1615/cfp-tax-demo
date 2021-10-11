import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  ListItem,
  TextField,
} from '@mui/material';

import CustomDatePicker from './CustomDatePicker';
import CustomTextFieldWon from './CustomTextFieldWon';
import CustomTextarea from './CustomTextarea';
import PropTypes from 'prop-types';
import React from 'react';

export default function CustomFieldListType(props) {
  const { type, setFields, fields, currentField, label, helperText } = props;

  const fieldType = type => {
    switch (type) {
      case 'date':
        return (
          <CustomDatePicker
            setFields={setFields}
            fields={fields}
            currentField={currentField}
            label={label}
            helperText={helperText}
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
      case 'textarea':
        return (
          <CustomTextarea
            setFields={setFields}
            fields={fields}
            currentField={currentField}
            label={label}
            helperText={helperText}
          />
        );
      case 'number':
        return (
          <TextField
            label={label}
            type="number"
            value={fields[currentField]}
            onChange={e =>
              setFields({ ...fields, [currentField]: e.target.value })
            }
            fullWidth
          />
        );
      case 'won':
        return (
          <CustomTextFieldWon
            setFields={setFields}
            fields={fields}
            currentField={currentField}
            label={label}
            helperText={helperText}
          />
        );
      case 'check':
        return (
          <Box>
            <FormControlLabel
              label={label}
              sx={{ pl: 1 }}
              control={
                <Checkbox
                  checked={fields[currentField]}
                  onChange={e =>
                    setFields({ ...fields, [currentField]: e.target.checked })
                  }
                />
              }
            />
          </Box>
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
  helperText: PropTypes.string,
};
