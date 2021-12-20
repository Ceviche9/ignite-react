import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { parseCookies } from "nookies"

export function WithSSRGuest<P>(fn: GetServerSideProps<P>) {

  // Essa é função que o Next irá executar quando o usuário acessar a página.
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    // Como estamos utilizando o parseCookies no servidor precisamos passar o contexto como primeiro parametro.
    const cookies = parseCookies(context)

    // Caso o usuário já tenha um token ele será redirecionado.
    if(cookies['nextauth.token']) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    }

    return await fn(context)
  }
}