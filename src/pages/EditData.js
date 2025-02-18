import Box from '@mui/material/Box';
import { Button, Container, Divider, Stack, Typography } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { CustomDrawer, MainDialog } from '../components';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userSelector, userState } from '../states/userStates';
import { makeStyles } from '@mui/styles';
import CustomDrawerWithSelect from '../components/CustomDrawerWithSelect';

const useStyles = makeStyles(() => ({
  titleWrapper: {
    textAlign: 'center',
    borderRadius: '15px',
    background: '#fff9ea',
  },
  title: {
    lineHeight: 2,
  },
  divider: {
    marginTop: 45,
  },
}));

export default function EditData() {
  let [user, setUser] = useRecoilState(userSelector);
  const classes = useStyles();

  return (
    <Container>
      <Stack spacing={2} sx={{ pb: 5 }}>
        <Box pt={6} pb={6} className={classes.titleWrapper}>
          <SentimentSatisfiedAltIcon
            color="warning"
            sx={{ fontSize: 120, marginBottom: 3 }}
          />
          <Typography className={classes.title}>
            소득공제를 잘 받고 있는지 궁금한 항목의 ‘2020’년도 정보를 꼼꼼하게
            입력해주세요☺️
          </Typography>
          <Typography className={classes.title}>
            소득 없는 가족이 아픈 경우 나이를 불문하고 정보 입력
          </Typography>
          <Typography className={classes.title}>
            이미 공제 받은 가족이 아픈 경우 지병명 입력
          </Typography>
        </Box>

        <Divider>I. 기본 공제 점검</Divider>
        <CustomDrawerWithSelect
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222419643663"
          title="① 직계존속"
          // titleDesc="▶ 전용 85㎡ 이하 전세 대출 보유 근로자만 입력해주세요"
          collectionName="basic"
          fieldsName="b1"
          user={user}
        />
        <CustomDrawerWithSelect
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222419643663"
          title=" ② 자녀, 위탁아동, 입양자"
          // titleDesc="▶ 전용 85㎡ 이하 전세 대출 보유 근로자만 입력해주세요"
          collectionName="basic"
          fieldsName="b2"
          user={user}
        />
        <CustomDrawerWithSelect
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222419643663"
          title="③ 형제자매, 기초수급자"
          // titleDesc="▶ 전용 85㎡ 이하 전세 대출 보유 근로자만 입력해주세요"
          collectionName="basic"
          fieldsName="b3"
          user={user}
        />

        <Divider sx={{ marginTop: '45px !important' }}>
          II. 항목 공제 점검
        </Divider>

        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222428819955"
          title="④ 전세자금대출"
          titleDesc="▶ 전용 85㎡ 이하 전세 대출 보유 근로자만 입력해주세요"
          collectionName="item"
          fieldsName="i1"
          user={user}
        />
        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222428825519"
          title="⑤ 주택담보대출"
          titleDesc="▶ 2015년 이후 취득 및 취득일 기준 기준시가 5억이하  주택의 대출 보유 근로자만 입력해 주세요"
          collectionName="item"
          fieldsName="i2"
          user={user}
        />
        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222436015492"
          title="⑥ 주택청약종합저축"
          // titleDesc="▶ 2015년 이후 취득 및 취득일 기준 기준시가 5억이하  주택의 대출 보유 근로자만 입력해 주세요"
          collectionName="item"
          fieldsName="i3"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 사용 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222444942623"
          title="⑦ 신용카드"
          titleDesc="▶ 소득별 공제 한도가 남아 있으면 입력해주세요"
          collectionName="item"
          fieldsName="i4"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 의료비 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222453330124"
          title="⑧ 의료비"
          titleDesc="▶ 기본 공제 점검시 이미 입력한 의료비는 제외하고 입력해 주세요"
          collectionName="item"
          fieldsName="i5"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 교육비 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222460762838"
          title="⑨ 교육비"
          titleDesc="▶ 공제 신청하지 않은 교육비를 입력해 주세요(나이 제한 없음)"
          collectionName="item"
          fieldsName="i6"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 기부 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222461043365"
          title="⑩ 기부금"
          titleDesc="▶ 공제 신청하지 않은 기부금을 입력해 주세요(나이 제한 없음)"
          collectionName="item"
          fieldsName="i7"
          user={user}
        />
        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222453199507"
          title="⑪ 월세액"
          // titleDesc="▶ 공제 신청하지 않은 기부금을 입력해 주세요(나이 제한 없음)"
          collectionName="item"
          fieldsName="i8"
          user={user}
        />
        <MainDialog
          buttonLabel="⑫ IRP/연금저축"
          description="본 항목은 누락 확률 낮습니다. 
          아래 블로그를 참조하여
         셀프 점검해보세요"
          doneLabel="블로그 보기"
          handleDone={() =>
            window.open(
              'https://blog.naver.com/soleonetech/222445016404',
              '_blank',
            )
          }
        />
        <Divider sx={{ marginTop: '45px !important' }}>
          III. 맞벌이 점검
        </Divider>
        <CustomDrawer
          infoTop="[정보 업로드]"
          tooltipLink="https://blog.naver.com/soleonetech/222487599050"
          title="⑬ 맞벌이"
          // titleDesc="▶ 공제 신청하지 않은 기부금을 입력해 주세요(나이 제한 없음)"
          collectionName="item"
          fieldsName="i9"
          user={user}
        />
      </Stack>
    </Container>
  );
}
