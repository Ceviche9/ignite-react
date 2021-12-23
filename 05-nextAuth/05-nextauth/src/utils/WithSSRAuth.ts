import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"
import { AuthTokenError } from '../services/errors/AuthTokenError';
import decode from 'jwt-decode';
import { ValidatePermissions } from "./ValidatePermissions";

type WithSSRAuthOptionsProps = {
  permissions?: string[]
  roles?: string[]
}

export function WithSSRAuth<P>(fn: GetServerSideProps<P>, options?: WithSSRAuthOptionsProps) {

  // Essa é função que o Next irá executar quando o usuário acessar a página.
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    // Como estamos utilizando o parseCookies no servidor precisamos passar o contexto como primeiro parametro.
    const cookies = parseCookies(context)
    const token = cookies['nextauth.token']

    // Caso o usuário NÃO tenha um token.
    if(!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    // Caso o usuário esteja entrando em uma página que precisa de certas permissões para entrar.
    if (options) {
      // Para decodificar o token.
      const user = decode<{permissions: string[], roles: string[]}>(token) // dados do usuário.
      const {permissions, roles} = options
      const userHasValidPermission = ValidatePermissions({user, permissions, roles})

      if (!userHasValidPermission) {
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false
          }
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