/* eslint-disable prettier/prettier */

import { atom } from 'recoil';

export default atom({
  key: 'FileState',
  default: {
    main: [],
    partner: [],
  },
});
