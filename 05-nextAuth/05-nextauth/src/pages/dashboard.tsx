import { useContext, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { api } from '../services/apiClient';
import { GetServerSideProps } from 'next';
import { WithSSRAuth } from '../utils/WithSSRAuth';
import { setUpAPIClient } from '../services/api';

export default function Dashboard() {
  const {user} = useContext(AuthContext)


  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }, [])

  return(
    <h1>Dashboard: {user?.email}</h1>
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