import {GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
        {/* O Next avisa para que seja utilizado o componente Image */}
        <Image 
          src="/images/avatar.svg" 
          alt="Girl coding"
          height={621}
          width={436}
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const priceList = await stripe.prices.list({limit: 3})

  console.log("Lista de preços", priceList)
  console.log("Array de preços", priceList.data)

  const price = await stripe.prices.retrieve("price_1JnA6DGDGQLqJ9x27l6UvKYb", {
    expand: ["product"]
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
    },
    // Quanto tempo em minutos essa página será mantida. (sem ter que ser reconstruida)
    revalidate: 60 * 60 * 24, // 24 horas
  }

} 
