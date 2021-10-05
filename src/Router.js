import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CustomAppBar, CustomSnackbar, Loading } from "./components";
import { EditData, UserMain } from "./pages";
import React, { Suspense, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import { apiRequest } from "./utils";
import ko from "date-fns/locale/ko";
import { userStates } from "./states";

const Router = () => {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
        <CustomAppBar />
        <CustomSnackbar />
        <Box sx={{ pt: 2 }}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/edit">
                <EditData />
              </Route>
              <Route exact path="/">
                <UserMain />
              </Route>
            </Switch>
          </Suspense>
        </Box>
      </LocalizationProvider>
    </BrowserRouter>
  );
};

export default Router;
