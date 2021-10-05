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
  const [user, setUser] = useRecoilState(userStates);

  const signInWithKey = async userKey => {
    try {
      // local json-db는 id로 불러오기 가능
      const response = await apiRequest(`/user/${userKey}`);
      setUser(response);
      console.log("sign in success");
    } catch (error) {
      console.log(error);
    }
  };

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
