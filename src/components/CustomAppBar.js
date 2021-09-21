import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useRecoilValue } from "recoil";
import { userStates } from "../states";

export default function CustomAppBar() {
  const user = useRecoilValue(userStates);
  const history = useHistory();
  const location = useLocation();

  return (
    <AppBar
      sx={{
        background: theme => theme.palette.background.appBar,
        color: theme => theme.palette.text.appBar,
      }}
      position="static"
    >
      <Toolbar>
        {location.pathname === "/" ? (
          <></>
        ) : (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={() => history.goBack()}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: 18,
            ml: () => (location.pathname === "/" ? 0 : -6),
          }}
        >
          연말정산 세금 환급 점검
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
