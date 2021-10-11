import { MainDialog, UploadForm } from '.';
import { snackbarState, userStates } from '../states';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userKeyState, userSelector } from '../states/userStates';

import { Button } from '@mui/material';
import React from 'react';
import { apiRequest } from '../utils';
import models from '../models';

export default function UserUnRegistered() {
  const [user, setUser] = useRecoilState(userSelector);
  const [userKey, setUserKey] = useRecoilState(userKeyState);
  const setSnackbar = useSetRecoilState(snackbarState);

  const signInWithKey = async userKey => {
    // local json-db는 id로 불러오기 가능
    // const response = await apiRequest(`/user/${userKey}`);
    setUserKey(userKey);
    window.localStorage.setItem('userKey', userKey);

    if (!user) setSnackbar({ open: true, message: '오류', severity: 'error' });
    // else setSnackbar({ open: true, message: `반갑습니다` });
  };

  const createUser = async (name, birthDate) => {
    try {
      const response = await apiRequest(`/user`, 'POST', {
        ...models.user,
        name,
        birthDate,
      });
      setUserKey(response.id);
      window.localStorage.setItem('userKey', response.id);
    } catch (error) {
      console.log(error);
      setSnackbar({ open: true, message: '에러 발생', severity: 'error' });
    }
  };

  return (
    <>
      <UploadForm disabled={true} />
      <MainDialog
        buttonLabel="시작하기"
        variable="사용자 정보 입력"
        description="이름+생년월일 6자리를 입력해주세요"
        inputLabel1="이름"
        inputLabel2="생년월일"
        handleDone={createUser}
      />
      <MainDialog
        buttonLabel="기존 키 입력"
        variable="기존 키 입력"
        description="발급 받은 키를 입력해주세요"
        inputLabel1="키 입력"
        handleDone={signInWithKey}
      />
      <Button disabled={true} size="large" variant="contained">
        입력완료 자료전송
      </Button>
    </>
  );
}
