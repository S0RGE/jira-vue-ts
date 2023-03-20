import { UniqueId } from "../types";
export type UserName = string;
export type Email = string;

export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
}