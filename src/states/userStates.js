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

    const response = await apiRequest(`/user/${userId}`, 'GET');
    if (!response) return null;

    return response;
  },
  set: ({ set }, user) => {
    console.log(user);
    set(userState, user);
  },
});
