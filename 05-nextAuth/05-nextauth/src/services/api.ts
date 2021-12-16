import axios, {AxiosError} from "axios"
import {parseCookies, setCookie} from "nookies"

type FailedRequestQueueProps = {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
};

let cookies = parseCookies()
let isRefreshing = false
let failedRequestQueue = Array<FailedRequestQueueProps>()

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies['nextauth.token']}`
  }
})

// Para interceptar uma resposta do back-end.
// O primeiro parametro é qual função deve ser executada caso a resposta seja um sucesso.
// O segundo é caso tenha um erro na resposta. 
api.interceptors.response.use(response => {
  return response
}, (error: AxiosError) => {
  if(error.response.status === 401) {
    if(error.response.data?.code === 'token.expired'){
      // - Renovar token -
      cookies = parseCookies() // Atualizando os cookies

      const {'nextauth.refreshToken': refreshToken} = cookies
      const originalConfig = error.config //Todas as informações para repetir uma requisição para o back-ed.
      // originalConfig = rota/parametros/callback

      if(!isRefreshing) {
        isRefreshing = true

        api.post('/refresh', {
          refreshToken
        }).then(response => {
          const { token } = response.data

          setCookie(undefined, 'nextauth.token', token, {
            maxAge: 60 * 60 * 24 * 30, // 1 mês
            path: '/'
          })
    
          setCookie(undefined, 'nextauth.refreshToken', response.data.refreshToken  , {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
          })

          api.defaults.headers['Authorization'] = `Bearer ${token}`

          failedRequestQueue.forEach(request => request.onSuccess(token))
          failedRequestQueue = []
        }).catch(err => {
          failedRequestQueue.forEach(request => request.onFailure(err))
          failedRequestQueue = []
        }).finally(() => {
          isRefreshing = false
        })
      }

      // A unica forma e fazer um código assincrono entro do axios é retornando uma Promise.
      return new Promise((resolve, reject) => {
        failedRequestQueue.push({
          onSuccess: (token) => {
            // Trocano o antigo token pelo o novo.
            originalConfig.headers['Authorization'] = `Bearer ${token}`

            // Fazendo novamente uma chamada a api.
            resolve(api(originalConfig)) // O axios itá aguardar que esse código seja executado.
          },
          onFailure: (err: AxiosError) => {
            reject(err)
          },
        })

      })

    } else {
      // deslogar usuário

    }
  }

})