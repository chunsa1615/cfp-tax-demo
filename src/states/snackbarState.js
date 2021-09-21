/* eslint-disable prettier/prettier */

import { atom } from "recoil";

export default atom({
  key: "SnackbarState",
  default: {
    open: false,
    message: "",
    severity: null,
  },
});
