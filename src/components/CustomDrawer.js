import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ContactSupport, Mail, MoveToInbox } from '@mui/icons-material';
import React, { Suspense, useEffect, useState } from 'react';
import { snackbarState, userStates } from '../states';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { CustomFieldListType } from '.';
import { DesktopDatePicker } from '@mui/lab';
import PropTypes from 'prop-types';
import { apiRequest } from '../utils';
import { mapToFieldList } from '../models';

export default function CustomDrawer(props) {
  const {
    infoTop,
    tooltipLink,
    title,
    titleDesc,
    fieldsName,
    collectionName,
    user,
  } = props;
  const [date, setDate] = useState(new Date());
  const [fields, setFields] = useState({});
  // console.log(fields);
  const setUser = useSetRecoilState(userStates);
  const [snacks, setSnacks] = useRecoilState(snackbarState);
  const [openDialog, setOpenDialog] = useState(false);
  const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    // if (user[collectionName][fieldsName])
    //   setFields(mapToFieldList(collectionName, fieldsName));
  }, []);
  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerState(open);
  };

  const handleRequest = async () => {
    let userData = {};
    // TODO: WithSelect 컴포넌트 분리하기.
    // if (Array.isArray(user[collectionName][fieldsName])) {
    //   userData = {
    //     ...user,
    //     [collectionName]: {
    //       ...user[collectionName],
    //       [fieldsName]: user[collectionName][fieldsName].push(fields),
    //     },
    //   };
    // } else {
    userData = {
      ...user,
      [collectionName]: {
        ...user[collectionName],
        [fieldsName]: {
          ...fields,
        },
      },
    };
    // }

    const response = await apiRequest(`/user/${user.id}`, 'PUT', userData);
    setDrawerState(false);
    setUser(userData);
    setSnacks({ open: true, message: '저장되었습니다.', severity: 'success' });
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogDone = () => {
    setDrawerState(false);
    setOpenDialog(false);
  };

  const list = () => (
    <List sx={{ pb: 5 }}>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <CustomFieldListType
        type="date"
        setFields={setFields}
        fields={fields}
        currentField="field1"
        label="출생"
      />
      <CustomFieldListType
        type="string"
        setFields={setFields}
        fields={fields}
        currentField="field2"
        label="스트링"
      />
      <CustomFieldListType
        type="won"
        setFields={setFields}
        fields={fields}
        currentField="field6"
        label="원화"
      />
      <CustomFieldListType
        type="check"
        setFields={setFields}
        fields={fields}
        currentField="field3"
        label="체크박스"
      />
      <CustomFieldListType
        type="subCheck"
        setFields={setFields}
        fields={fields}
        currentField="field4"
        label="그룹 체크박스"
      />
      <CustomFieldListType
        type="subCheck"
        setFields={setFields}
        fields={fields}
        currentField="field5"
        label="그룹 체크박스"
      />
    </List>
  );

  return (
    <Box>
      <Button
        size="large"
        fullWidth
        variant="outlined"
        onClick={toggleDrawer(true)}
      >
        {title}
      </Button>
      <Drawer
        sx={{
          width: ['100%', '100%', 640],
          margin: '0 auto',
          '& > div': {
            width: 'inherit',
            margin: '0 auto',
          },
          '& > .MuiDrawer-paper ': { borderRadius: 3 },
        }}
        anchor={'bottom'}
        open={drawerState}
        onClose={handleDialogOpen}
      >
        <Suspense>
          <Container
            sx={{
              width: '100%',
              minHeight: '95vh',
              pt: 2,
              pb: 5,
            }}
            role="presentation"
          >
            <Box sx={{ display: 'flex' }}>
              <Typography>{infoTop}</Typography>
              <IconButton
                color="primary"
                component="span"
                onClick={() => {
                  window.open(tooltipLink, '_blank');
                }}
              >
                <ContactSupport />
              </IconButton>
            </Box>
            <Typography
              sx={{
                bgcolor: 'background.appBar',
                borderRadius: 10,
                p: 1,
                mt: 2,
                mb: 2,
                textAlign: 'center',
              }}
              variant="h3"
              inlist
            >
              {title}
            </Typography>
            {titleDesc && <Typography>{titleDesc}</Typography>}
            {list()}
          </Container>
        </Suspense>
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            display: 'flex',
            width: 'inherit',
          }}
        >
          <Button
            sx={{ flex: 1, bgcolor: 'white' }}
            variant="outlined"
            onClick={handleDialogOpen}
          >
            취소
          </Button>
          <Button sx={{ flex: 1 }} variant="contained" onClick={handleRequest}>
            저장
          </Button>
        </Box>
      </Drawer>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">정말 닫으시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: 1 }}>
            입력된 내용이 저장되지 않습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            계속 입력
          </Button>
          <Button onClick={handleDialogDone} color="primary">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

CustomDrawer.propTypes = {
  infoTop: PropTypes.string,
  tooltipLink: PropTypes.string,
  title: PropTypes.string,
  titleDesc: PropTypes.string,
  user: PropTypes.object,
  // otherItems: PropTypes.object,
  collectionName: PropTypes.string,
  fieldsName: PropTypes.string,
  // fields: PropTypes.object,
  // saveUserData: PropTypes.func,
};
