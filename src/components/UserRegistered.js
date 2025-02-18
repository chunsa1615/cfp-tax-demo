import { Button, Container, Divider, Link, Typography } from '@mui/material';
import { GetKeyDialog, UploadForm } from '.';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userKeyState, userSelector } from '../states/userStates';

import models from '../models';
import { snackbarState } from '../states';
import { useHistory } from 'react-router-dom';

export default function UserRegistered() {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userSelector);
  const setSnackbar = useSetRecoilState(snackbarState);
  const [userKey, setUserKey] = useRecoilState(userKeyState);
  useEffect(() => {
    setSnackbar({ open: true, message: `반갑습니다 ${user.name}님` });

    if (!user.basic) {
      setUser({
        ...models.user,
      });
    }
  }, [user]);
  // console.log(user);
  return (
    <>
      <UploadForm
        user={user}
        disabled={false}
        buttonText="원천징수영수증 (최근 년도) 업로드"
        saveType="main"
      />
      <Button
        sx={{ marginTop: 3 }}
        size="large"
        variant="outlined"
        color="warning"
        onClick={() => history.push('edit')}
      >
        저 연말정산 잘 하고 있나요? (자료입력)
      </Button>
      <Divider sx={{ borderColor: '#ffffff' }} />
      <Divider />
      <Divider sx={{ borderColor: '#ffffff' }} />
      <Container>
        <GetKeyDialog
          buttonLabel="키 정보 확인"
          variable="키 정보 확인"
          inputLabel1="키 정보"
        />
        <Link
          href="#"
          color={'#838383'}
          sx={{ display: 'inline', margin: 1 }}
          onClick={() => {
            setUserKey(null);
            window.localStorage.removeItem('userKey');
            setSnackbar({ open: true, message: '로그아웃 완료' });
          }}
        >
          로그아웃
        </Link>
        <Divider sx={{ borderColor: '#ffffff' }} />
      </Container>
    </>
  );
}
