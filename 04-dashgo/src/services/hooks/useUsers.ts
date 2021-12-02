import { useQuery } from "react-query"
import { api } from "../api"

type UserProps = {
  id: string
  name: string
  email: string
  createdAt: string
}

async function getUsers(): Promise<UserProps[]> {
  const { data } = await api.get('/users')

  const users = data.users.map(user => {
    return{
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  
  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    // Tempo que esses dados não precisão ser recarregados
    staleTime: 1000 * 5 // 5 segundos
  })
}