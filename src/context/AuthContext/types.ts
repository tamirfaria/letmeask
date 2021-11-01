import { ReactNode } from "react"

export type UserPropsType = {
  id: string;
  name: string;
  avatar: string
}

export type AuthContextPropsType = {
  user: UserPropsType | undefined;
  signInWithGoogle: () => Promise<void>;
}

export type AuthContextProviderPropsType = {
  children: ReactNode;
}