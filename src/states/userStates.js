import { atom } from "recoil";

export default atom({
  key: "UserState",
  default: {
    id: window.localStorage.getItem("userKey"),
    name: "",
    userKey: "",
    birthDate: "",
  },
});
