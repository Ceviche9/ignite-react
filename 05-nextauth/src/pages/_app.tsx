import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/AuthContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;