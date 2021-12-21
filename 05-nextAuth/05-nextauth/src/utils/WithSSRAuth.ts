import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"
import { AuthTokenError } from '../services/errors/AuthTokenError';

export function WithSSRAuth<P>(fn: GetServerSideProps<P>) {

  // Essa é função que o Next irá executar quando o usuário acessar a página.
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    // Como estamos utilizando o parseCookies no servidor precisamos passar o contexto como primeiro parametro.
    const cookies = parseCookies(context)

    // Caso o usuário NÃO tenha um token.
    if(!cookies['nextauth.token']) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    try {
      // Para apenas executar a função que foi enviada como parametro.
      return await fn(context)
    } catch (err) {
      if(err instanceof AuthTokenError) {
        destroyCookie(context, 'nextauth.token')
        destroyCookie(context, 'nextauth.refreshToken')
  
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }

      }
    }

  }
}