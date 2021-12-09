import {
  createContext,
  ReactNode,
  useContext,
} from "react";

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
  async function signIn(credentials: SignInCredentials) {
    console.log(credentials)
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