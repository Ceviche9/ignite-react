import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import Router from "next/router";

import { api } from '../services/api';

import { AuthContextProps, AuthProviderProps, SignInCredentials, UserProps } from "./protocols/AuthContextProtocols";

export const AuthContext = createContext({} as AuthContextProps);


export const useAuth = () => useContext(AuthContext);


export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  async function signIn({email, password}: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email, password
      })

      const {token, refreshToken, permissions, roles} = response.data

      setUser({
        email,
        permissions,
        roles
      })
  
      Router.push('/dashboard')

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}