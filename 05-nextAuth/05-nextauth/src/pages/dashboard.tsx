import { useContext, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { api } from '../services/apiClient';
import { GetServerSideProps } from 'next';
import { WithSSRAuth } from '../utils/WithSSRAuth';
import { setUpAPIClient } from '../services/api';
import { Can } from '../components/Can';

export default function Dashboard() {
  const {user, signOut} = useContext(AuthContext)
  
  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }, [])

  return(
    <>
      <h1>Dashboard: {user?.email}</h1>
      <button type="button" onClick={signOut}>Sair</button>

      <Can permissions={['metrics.list']}>
        <div>
          Métricas
        </div>
      </Can>
    </>
  )
}


export const getServerSideProps : GetServerSideProps = WithSSRAuth(async (context) => {
  const api = setUpAPIClient(context)

  const response = await api.get('/me')
  console.log(response.data)
  

  return {
    props: {}
  }
})