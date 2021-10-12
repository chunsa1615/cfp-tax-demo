import { Add, ContactSupport } from '@mui/icons-material';
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
  FormControl,
  IconButton,
  InputLabel,
  List,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import React, { Suspense, useEffect, useState } from 'react';
import {
  basicSelectorOption1,
  basicSelectorOption2,
  basicSelectorOption3,
  mapToFields,
  mapToFieldsLabel,
} from '../models';
import { snackbarState, userState } from '../states';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { CustomFieldListType } from '.';
import CustomTooltip from './CustomTooltip';
import PropTypes from 'prop-types';
import { apiRequest } from '../utils';
import { userSelector } from '../states/userStates';

export default function CustomDrawerWithSelect(props) {
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
  const setUser = useSetRecoilState(userSelector);
  const currentUser = useRecoilValue(userState);
  const [snacks, setSnacks] = useRecoilState(snackbarState);
  const [openDialog, setOpenDialog] = useState(false);
  const [drawerState, setDrawerState] = useState(false);
  const [selector, setSelector] = useState('');
  const [addBtnDisable, setAddBtnDisable] = useState(true);
  const selectorOptions = () => {
    switch (fieldsName) {
      case 'b1':
        return basicSelectorOption1;
      case 'b2':
        return basicSelectorOption2;
      case 'b3':
        return basicSelectorOption3;
    }
  };
  // console.log(fields);
  useEffect(() => {
    if (selector !== '') {
      setFields(mapToFields(collectionName, fieldsName, selector));
      setAddBtnDisable(false);
    }
  }, [selector]);

  useEffect(() => {
    if (user[collectionName][fieldsName].length > 0) {
      setUser(user);
    }
    setSelector('');
    setFields({});
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
    console.log(currentUser);
    const response = await apiRequest(`/user/${user.id}`, 'PUT', currentUser);
    setDrawerState(false);
    setUser(currentUser);
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

  const handleSelectorChange = e => {
    setSelector(e.target.value);
  };

  const addFieldsList = () => {
    const userData = {
      ...currentUser,
      [collectionName]: {
        ...currentUser[collectionName],
        [fieldsName]: currentUser
          ? [...currentUser[collectionName][fieldsName], fields]
          : [fields],
      },
    };
    // let count = 1;
    // currentUser[collectionName][fieldsName].forEach(fields => {
    //   if (fields.type === selector) count++;
    // });
    // let lastIndex = userData[collectionName][fieldsName].length - 1;
    // userData[collectionName][fieldsName][lastIndex].type += count;

    setUser(userData);
    setFields({});
    setAddBtnDisable(true);
    setSelector('');
  };

  const list = () => (
    <List sx={{ pb: 8 }}>
      {mapToFieldsLabel(fieldsName, selector).map((e, index) => (
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
            <FormControl
              sx={{ display: 'flex', m: 1, width: 'auto', flexFlow: 'nowrap' }}
            >
              <InputLabel>선택</InputLabel>
              <Select
                fullWidth
                value={selector}
                onChange={handleSelectorChange}
                input={<OutlinedInput label={'선택'} />}
              >
                {selectorOptions().map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <Button
                disabled={addBtnDisable}
                onClick={addFieldsList}
                variant="contained"
                sx={{ minWidth: 48, ml: 1 }}
              >
                선택 항목 입력 완료 및 추가
                {/* <Add /> */}
              </Button>
            </FormControl>
            {titleDesc && <Typography>{titleDesc}</Typography>}
            {currentUser && (
              <Container sx={{ p: 1 }}>
                <Typography>추가된 항목</Typography>
                {currentUser[collectionName][fieldsName].map((e, i) => (
                  <CustomTooltip
                    key={i}
                    fieldsName={fieldsName}
                    item={e}
                    deleteItem={(e, i) => {
                      const newArr = [
                        ...currentUser[collectionName][fieldsName],
                      ];
                      newArr.splice(i, 1);
                      let userData = {
                        ...currentUser,
                        [collectionName]: {
                          ...currentUser[collectionName],
                          [fieldsName]: newArr,
                        },
                      };
                      setUser(userData);
                    }}
                  />
                ))}
              </Container>
            )}
            {Object.keys(fields).length === 0 && !fields.type ? <></> : list()}
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

CustomDrawerWithSelect.propTypes = {
  infoTop: PropTypes.string,
  tooltipLink: PropTypes.string,
  title: PropTypes.string,
  titleDesc: PropTypes.string,
  user: PropTypes.object,
  collectionName: PropTypes.string,
  fieldsName: PropTypes.string,
};
