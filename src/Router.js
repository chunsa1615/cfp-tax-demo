import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CustomAppBar, CustomSnackbar, Loading } from './components';
import { EditData, UserMain } from './pages';
import React, { Suspense, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import { apiRequest } from './utils';
import ko from 'date-fns/locale/ko';
import { userStates } from './states';

const Router = () => {
  const [user, setUser] = useRecoilState(userStates);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      // TODO: user.userKey로 불러오기
      if (user.id) {
        setLoading(true);
        try {
          const response = await apiRequest(`/user/${user.id}`, 'GET');
          setUser(response);
        } catch (error) {
          setUser({});
        }
        setLoading(false);
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
        <CustomAppBar />
        <CustomSnackbar />
        {loading ? (
          <Loading />
        ) : (
          <Box sx={{ pt: 2 }}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/edit">{user.id ? <EditData /> : <></>}</Route>
                <Route exact path="/">
                  <UserMain />
                </Route>
              </Switch>
            </Suspense>
          </Box>
        )}
      </LocalizationProvider>
    </BrowserRouter>
  );
};

export default Router;
