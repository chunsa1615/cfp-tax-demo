import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { UploadForm } from '.';
import models from '../models';
import { snackbarState } from '../states';
import { useHistory } from 'react-router-dom';
import { userSelector } from '../states/userStates';

export default function UserRegistered() {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userSelector);
  const setSnackbar = useSetRecoilState(snackbarState);
  useEffect(() => {
    setSnackbar({ open: true, message: `반갑습니다 ${user.name}님` });

    if (!user.basic) {
      setUser({
        ...models.user,
      });
    }
  }, [user]);
  console.log(user);
  return (
    <>
      <UploadForm
        disabled={false}
        buttonText="원천징수영수증 (최근 년도) 업로드"
        saveType="main"
      />

      <Button
        size="large"
        variant="outlined"
        color="warning"
        onClick={() => history.push('edit')}
      >
        저 연말정산 잘 하고 있나요? (자료입력)
      </Button>
      <Button size="large" variant="contained" color="warning">
        입력완료 자료전송
      </Button>
    </>
  );
}
