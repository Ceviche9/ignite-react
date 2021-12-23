import { GetServerSideProps } from 'next';
import { WithSSRAuth } from '../utils/WithSSRAuth';
import { setUpAPIClient } from '../services/api';

import decode from "jwt-decode"

export default function Metrics() {

  return(
    <>
      <h1>Metrics</h1>
    </>
  )
}


export const getServerSideProps : GetServerSideProps = WithSSRAuth(async (context) => {
  const api = setUpAPIClient(context)
  const response = await api.get('/me')

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator'], 
})