import { Box, Typography } from '@mui/material';

import React from 'react';

export default function MainTitle() {
  return (
    <Box
      sx={{
        paddingTop: 4,
        paddingBottom: 6,
        marginBottom: 4,
        borderBottom: '1px solid #dadada',
      }}
    >
      <Typography variant="h1">CFP의</Typography>
      <Typography variant="h2" sx={{ marginBottom: 5 }}>
        직장인을 위한 세금 설계
        <br />
        “연말정산 세금 환급 점검”
      </Typography>
      <Typography>
        복잡핚 연말정산 혼자 알아보기 힘드시죠?
        <br />
        아래 자료를 등록해 주시면 절세 포인트를 상담해 드리겠습니다.
        <br />
        <br />
        1. 크몽에서 신청해 주세요
        <br />
        2. 2021년 원천징수영수증을 업로드해주세요
        <br />
        3. 점검 항목 정보를 입력해 주세요
        <br />
        4. 다음 페이지에서 입력완료 버튺을 눌러주세요
      </Typography>
    </Box>
  );
}
