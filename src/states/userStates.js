import { atom, selector } from 'recoil';

import { apiRequest } from '../utils';
import models from '../models';

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

    if (process.env.REACT_APP_LOCALHOST === 'true') {
      response = await apiRequest(`/user/${userId}`, 'GET');
      if (!response) return null;
      return response;
    } else {
      response = await apiRequest(`/is_exist_key`, 'POST', {
        user_key: userId,
      });
      console.log(response);

      if (response.code < 0) return null;

      console.log(response.data);
      if (response.data.basic === null) {
        return {
          ...response.data,
          basic: models.user.basic,
          item: models.user.item,
        };
      } else {
        return {
          ...response.data,
          basic: JSON.parse(response.data.basic),
          item: JSON.parse(response.data.item),
        };
      }
      // return JSON.parse(response.data);
    }
  },
  set: ({ set }, user) => {
    console.log(user);
    set(userState, user);
  },
});
