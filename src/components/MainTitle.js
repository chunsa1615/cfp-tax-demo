import { Box, Typography } from "@mui/material";

import React from "react";

export default function MainTitle() {
  return (
    <Box>
      <Typography variant="h1" fontSize="400%">
        CFP의
      </Typography>
      <Typography variant="h2">
        직장인을 위한 세금 설계
        <br />
        “연말정산 세금 환급 점검”
      </Typography>
    </Box>
  );
}
