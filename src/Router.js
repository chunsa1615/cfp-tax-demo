import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CustomAppBar, CustomSnackbar, Loading } from './components';
import { EditData, UserMain } from './pages';
import React, { Suspense } from 'react';
import { userSelector, userState } from './states/userStates';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import ko from 'date-fns/locale/ko';
import { useRecoilState } from 'recoil';

const Router = () => {
  const [user, setUser] = useRecoilState(userSelector);

  return (
    <BrowserRouter basename="/app">
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
        <CustomAppBar />
        <CustomSnackbar />
        <Suspense fallback={<Loading />}>
          <Box sx={{ pt: 2 }}>
            <Switch>
              <Route path="/edit">{user ? <EditData /> : <></>}</Route>
              <Route exact path="/">
                <UserMain />
              </Route>
            </Switch>
          </Box>
        </Suspense>
      </LocalizationProvider>
    </BrowserRouter>
  );
};

export default Router;
