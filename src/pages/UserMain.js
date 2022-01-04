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
        <Box>
          <Link
            color="#3c2d00"
            href="#"
            sx={{
              padding: [1],
              background: '#ffca28',
              display: 'block',
              fontWeight: 'bold',
              textDecoration: 'none',
              marginBottom: 3,
            }}
          >
            크몽에서 결제하기
          </Link>
        </Box>
        {/* TODO: userKey로 불러오기? */}
        {user && (user.id || user.user_key) ? (
          <UserRegistered />
        ) : (
          <UserUnRegistered />
        )}
        <Stack spacing={2} direction={'row'} sx={{ justifyContent: 'center' }}>
          <a
            style={{
              cursor: 'pointer',
              margin: '5px',
              display: 'inline-block',
            }}
            onClick={e => {
              window.Kakao.Link.sendCustom({
                templateId: 63019,
                templateArgs: {
                  title: '제목 영역입니다.',
                  description: '설명 영역입니다.',
                },
              });
            }}
          >
            <img
              style={{ display: 'block' }}
              src={
                'https://soletech.co.kr/wp-content/plugins/cosmosfarm-share-buttons/layout/default/images/icon-kakaotalk.png'
              }
              alt="카카오톡"
              title="카카오톡"
              width={'32px'}
            />
          </a>
          <a
            style={{
              cursor: 'pointer',
              margin: '5px',
              display: 'inline-block',
              width: '32px',
              heigth: '32px',
              lineHeight: '32px',
              fontWeight: 'bold',
              fontSize: '10px',
              backgroundColor: '#dadada',
            }}
            onClick={e => {
              const t = document.createElement('textarea');
              document.body.appendChild(t);
              t.value = 'https://soletech.co.kr/app';
              t.select();
              document.execCommand('copy');
              document.body.removeChild(t);
              alert('링크가 복사되었습니다.');
            }}
          >
            URL
          </a>
        </Stack>
        <Box>sole.one.tech@gmail.com</Box>
      </Stack>
    </Container>
  );
}
