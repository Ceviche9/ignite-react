import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { setCookie, parseCookies, destroyCookie} from "nookies"

import Router from "next/router";
import { api } from '../services/apiClient';

import { AuthContextProps, AuthProviderProps, SignInCredentials, UserProps } from "./protocols/AuthContextProtocols";

export const AuthContext = createContext({} as AuthContextProps);

let authChannel: BroadcastChannel

export const useAuth = () => useContext(AuthContext);

export function signOut()  { 
  // Caso tenha algum erro com o token.
  destroyCookie(undefined, 'nextauth.token')
  destroyCookie(undefined, 'nextauth.refreshToken')

  authChannel.postMessage('signOut')

  Router.push('/')
}


export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  // O useEffect só roda do lado do browser e o authChannel também.
  // https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut()
          break
        default: 
          break
      }
    }
  }, [])


  // Para recarregar as informações do usuário quando recarregar a página.
  useEffect(() => {
    // Para pegar o token armazenado dentro dos cookies.
    const {'nextauth.token': token} = parseCookies()

    if(token) {
      api.get('/me').then(response => {
        const {email, permissions, roles} = response.data

        setUser({
          email,
          permissions,
          roles
        })
      }).catch(() => {
        signOut()
      })
    }

  }, [])

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

      // Se o usuário recarregar a tela, essas informações serão perdidas.
      setUser({
        email,
        permissions,
        roles
      })

      // Atualizando o valor do token
      api.defaults.headers['Authorization'] = `Bearer ${token}`
  
      Router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}