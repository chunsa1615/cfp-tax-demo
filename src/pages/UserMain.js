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

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Stack spacing={2}>
        <MainTitle />
        {/* TODO: userKey로 불러오기? */}
        {user && (user.id || user.user_key) ? (
          <UserRegistered />
        ) : (
          <UserUnRegistered />
        )}
        <Divider />
        <Box>
          <Link color="#ED6C02" href="#">
            크몽에서 결제하기
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
