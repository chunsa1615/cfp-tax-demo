import { Button } from '@mui/material';
import React from 'react';
import { UploadForm } from '.';
import { useHistory } from 'react-router-dom';

export default function UserRegistered() {
  const history = useHistory();
  return (
    <>
      <UploadForm
        disabled={false}
        buttonText="최근 년도(2020년) 원천징수영수증 업로드"
      />

      <Button
        size="large"
        variant="outlined"
        onClick={() => history.push('edit')}
      >
        저 연말정산 잘 하고 있나요? (자료입력)
      </Button>
      <Button size="large" variant="contained">
        입력완료 자료전송
      </Button>
    </>
  );
}
