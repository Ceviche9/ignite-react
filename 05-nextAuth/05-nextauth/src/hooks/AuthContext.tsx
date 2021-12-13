import {
  createContext,
  useContext,
  useState,
} from "react";

import {setCookie} from "nookies"

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

      // UTILIZANDO O NOOKIE PARA ARMAZENAR INFORMAÇÕES NOS COOKIES =>
      // I -  Como estamos executando essa função no browser o primeiro parametro da função é undefined.
      // II - O segundo parametro é o nome o cookie
      // III - O terceiro é o valor.
      // IV - No quarto parametro algumas opções podem ser configuradas.
      setCookie(undefined, 'nextauth.token', token, {
        // Tempo que essa informação ficará armazena.
        maxAge: 60 * 60 * 24 * 30, // 1 mês
        // PAra indicar quais caminhos terão acesso a esse cookie
        path: '/' // Informando que qualquer rota pode ter acesso.
      })
      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

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