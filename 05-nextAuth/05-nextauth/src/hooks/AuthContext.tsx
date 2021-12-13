import {
  createContext,
  ReactNode,
  useContext,
} from "react";

import { api } from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);


export const useAuth = () => useContext(AuthContext);


export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false
  async function signIn({email, password}: SignInCredentials) {

    try {
      const response = await api.post('sessions', {
        email, password
      })
  
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}