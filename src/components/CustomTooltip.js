import { Box, Button, ClickAwayListener, Tooltip } from '@mui/material';
import React, { useState } from 'react';

import { Close } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { mapToFieldsLabel } from '../models';

export default function CustomTooltip({ item, deleteItem, fieldsName }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  console.log(item);

  const labels = mapToFieldsLabel(fieldsName, item.type);
  labels.pop();

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <>
            {labels.map((field, i) => {
              if (field.type === 'none') return;

              return (
                <Box sx={{ m: 0 }} key={i}>
                  {`${field.label} ${item[
                    `field${field.fieldIndex}`
                  ].toString()}`}
                </Box>
              );
            })}
          </>
        }
      >
        <Box sx={{ display: 'inline-block', mr: 1, mb: 1 }}>
          <Button variant="outlined" onClick={handleTooltipOpen}>
            {item.type}
          </Button>
          <Button sx={{ minWidth: 32, p: 0 }} onClick={deleteItem}>
            <Close />
          </Button>
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
}

CustomTooltip.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
  fieldsName: PropTypes.string,
};
