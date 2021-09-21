import { atom } from "recoil";

export default atom({
  key: "UserState",
  default: {
    id: "",
    name: "",
    userKey: "",
    birthDate: "",
  },
});
