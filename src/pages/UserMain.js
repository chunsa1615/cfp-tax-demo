import { Box, Container, Divider, Link, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { UserRegistered, UserUnRegistered } from '../components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import MainTitle from '../components/MainTitle';
import { apiRequest } from '../utils';
import { snackbarState } from '../states';
import { userSelector } from '../states/userStates';

// import {  } from '../states';

export default function UserMain() {
  const [user, setUser] = useRecoilState(userSelector);
  const setSnackbar = useSetRecoilState(snackbarState);

  useEffect(() => {
    // if (!user) setSnackbar({ open: true, message: '오류', severity: 'error' });
    // if (user) setSnackbar({ open: true, message: '성공' });
  }, [user]);
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Stack spacing={2}>
        <MainTitle />
        {/* TODO: userKey로 불러오기? */}
        {user && user.id ? <UserRegistered /> : <UserUnRegistered />}
        <Divider />
        <Box>
          <Link href="#">크몽에서 결제하기</Link>
        </Box>
      </Stack>
    </Container>
  );
}
