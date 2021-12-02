import { Box, Typography } from '@mui/material';

import React from 'react';

export default function MainTitle() {
  return (
    <Box
      sx={{
        paddingTop: 4,
        paddingBottom: 6,
        marginBottom: 4,
        borderBottom: '1px solid #dadada',
      }}
    >
      <Typography variant="h1">CFP의</Typography>
      <Typography variant="h2">
        직장인을 위한 세금 설계
        <br />
        “연말정산 세금 환급 점검”
      </Typography>
    </Box>
  );
}
