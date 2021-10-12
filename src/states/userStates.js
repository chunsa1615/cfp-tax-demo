import { atom, selector } from 'recoil';

import { apiRequest } from '../utils';

export const userState = atom({
  key: 'UserState',
  default: null,
});

export const userKeyState = atom({
  key: 'userKeyState',
  default: window.localStorage.getItem('userKey'),
});

export const userSelector = selector({
  key: 'UserSelector',
  get: async ({ get }) => {
    const userId = get(userKeyState);
    if (!userId) return null;

    let response = {};

    if (process.env.REACT_APP_LOCALHOST) {
      response = await apiRequest(`/user/${userId}`, 'GET');
      if (!response) return null;
      return response;
    } else {
      response = await apiRequest(`/is_exist_key`, 'POST', {
        user_key: userId,
      });
      console.log(response);
      if (response.code < 0) return null;
      return response.data;
    }
  },
  set: ({ set }, user) => {
    console.log(user);
    set(userState, user);
  },
});
