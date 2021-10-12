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
  Typography,
} from '@mui/material';
import { ContactSupport, Mail, MoveToInbox } from '@mui/icons-material';
import React, { Suspense, useEffect, useState } from 'react';
import { mapToFields, mapToFieldsLabel } from '../models';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userSelector, userState } from '../states/userStates';

import { CustomFieldListType } from '.';
import PropTypes from 'prop-types';
import { apiRequest } from '../utils';
import { snackbarState } from '../states';

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
  const [fields, setFields] = useState({});
  const setUser = useSetRecoilState(userState);
  const [snacks, setSnacks] = useRecoilState(snackbarState);
  const [openDialog, setOpenDialog] = useState(false);
  const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    user[collectionName][fieldsName].isModified
      ? setFields(user[collectionName][fieldsName])
      : setFields(mapToFields(collectionName, fieldsName));
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
    const userData = {
      ...user,
      [collectionName]: {
        ...user[collectionName],
        [fieldsName]: {
          ...fields,
          isModified: true,
        },
      },
    };

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
    <List sx={{ pb: 8 }}>
      {mapToFieldsLabel(fieldsName).map((e, index) => (
        <CustomFieldListType
          key={index}
          type={e.type}
          setFields={setFields}
          fields={fields}
          currentField={`field${e.fieldIndex}`}
          label={e.label}
        />
      ))}
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
              height: '95vh',
              pt: 2,
            }}
            role="presentation"
          >
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ lineHeight: [1.5, 1.5, '40px'] }}>
                {infoTop}
              </Typography>
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
            sx={{ flex: 1 }}
            onClick={handleDialogOpen}
            variant="contained"
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
  collectionName: PropTypes.string,
  fieldsName: PropTypes.string,
};
