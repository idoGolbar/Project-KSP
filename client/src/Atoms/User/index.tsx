import { atom } from "recoil";
export interface UserInfo {
  name: string;
  role: boolean;
  email: string;
}
export const user = atom<UserInfo>({
  key: "User",
  default: { name: "", email: "", role: false },
});
