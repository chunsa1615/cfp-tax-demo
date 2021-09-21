import {
  Box,
  Container,
  Drawer,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Options,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, DesktopDatePicker, MobileDatePicker } from "@mui/lab";
import { Mail as MailIcon, MoveToInbox, Today } from "@mui/icons-material";
import React, { Suspense, useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { apiRequest } from "../utils/api";
import ko from "date-fns/locale/ko";
import { snackbarState } from "../states";
import { useRecoilState } from "recoil";

export default function EditData() {
  return (
    <Container>
      <Typography>Edit Data</Typography>
      <SwipeableTemporaryDrawer />
    </Container>
  );
}

function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [value, setValue] = useState(new Date());

  const [snacks, setSnacks] = useRecoilState(snackbarState);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleRequest = async () => {
    // const response = await apiRequest("/items", "POST", {});
    // console.log(toggleDrawer);

    setState({ ...state, bottom: false });
    setSnacks({ open: true, message: "Snackbar Test", severity: "success" });
  };
  const localeMap = {
    ko: ko,
  };

  const list = anchor => (
    <Container
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "100%" : 250,
        minHeight: "95vh",
        pt: 2,
        pb: 5,
        borderRadius: 15,
      }}
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      role="presentation"
    >
      <Stack spacing={2}>
        <DesktopDatePicker
          disableFuture
          label="출생년도"
          // mask="____/__/__"
          openTo="year"
          // views={["year", "month", "day"]}
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => (
            <TextField
              sx={{ width: "100%" }}
              {...params}
              InputProps={params.InputProps}
            />
          )}
        />
        <FormControl variant="standard" fullWidth>
          <TextField
            label="출생년도"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Today />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <List sx={{ pb: 5 }}>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <MoveToInbox /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  );

  return (
    <Box>
      <Button onClick={toggleDrawer("bottom", true)}>직계존속</Button>
      <Drawer
        sx={{
          width: ["100%", "100%", 640],
          margin: "0 auto",
          "& > div": {
            width: "inherit",
            margin: "0 auto",
          },
        }}
        anchor={"bottom"}
        open={state["bottom"]}
        // onOpen={toggleDrawer("bottom", true)}
        onClose={toggleDrawer("bottom", false)}
      >
        <Suspense>{list("bottom")}</Suspense>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            display: "flex",
            width: "inherit",
          }}
        >
          <Button sx={{ flex: 1, bgcolor: "white" }} variant="outlined">
            취소
          </Button>
          <Button
            sx={{ flex: 1 }}
            variant="contained"
            onClick={() => handleRequest()}
          >
            저장
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
