import { ReactNode } from "react"

export type UserProps = {
  email: string
  permissions: string[]
  roles: string[]
}

export type SignInCredentials = {
  email: string;
  password: string;
}

export type AuthContextProps = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: UserProps;
  isAuthenticated: boolean;
}

export type AuthProviderProps = {
  children: ReactNode;
}
