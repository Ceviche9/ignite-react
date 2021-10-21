import {GetServerSideProps} from 'next'
import Head from 'next/head'
import {SubscribeButton} from '../components/SubscribeButton'
import { HomeProps } from '../protocols/homeProtocols'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Dev.News</title>
      </Head>
      <main className={styles.contentContauner} >
        <section className={styles.hero} >
          <span>🤟  hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}


/* Para fazer uma chamada a API via SSR: Dentro de uma página do Next,
  deve-se criar uma função com o nome "GetServerSideProps" e importar a tipagem dela de dentro do Next
*/
export const getServerSideProps: GetServerSideProps = async () => {
  // Essa função não é executada no browser e sim dentro de um servidor Node dentro do Next.
  const price = await stripe.prices.retrieve("price_1JnA6DGDGQLqJ9x27l6UvKYb", {
    // para ter acesso a todas as informações do produto.
    expand: ["product"]
    // o expand não vai ser utilizado, só está ai para mostrar que é possivel pegar os dados do produto.
  })
  
  const product = {
    priceID: price.id,
    // O preço é salvo em centavos.
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: "USD",
    }).format(price.unit_amount / 100),

  }

  // O retorno precisa ser um objeto
  return {
    props: {
      product
    }
  }

} 
