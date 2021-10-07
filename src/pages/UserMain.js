import { Box, Container, Divider, Link, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { UserRegistered, UserUnRegistered } from '../components';
import { useRecoilState, useRecoilValue } from 'recoil';

import MainTitle from '../components/MainTitle';
import { apiRequest } from '../utils';
import { userStates } from '../states';

export default function UserMain() {
  const [user, setUser] = useRecoilState(userStates);

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Stack spacing={2}>
        <MainTitle />
        {/* TODO: userKey로 불러오기? */}
        {user.id ? <UserRegistered /> : <UserUnRegistered />}
        <Divider />
        <Box>
          <Link href="#">크몽에서 결제하기</Link>
        </Box>
      </Stack>
    </Container>
  );
}
