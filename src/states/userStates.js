import { atom } from 'recoil';

export default atom({
  key: 'UserState',
  default: {
    // TODO: userKey에서 불러오기
    id: window.localStorage.getItem('userKey'),
    name: '',
    userKey: '',
    birthDate: '',
  },
});
