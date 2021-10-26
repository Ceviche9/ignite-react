import { useSession, signIn } from 'next-auth/client'
import { SubscribeButtonProps } from '../../protocols/componentsProtocols'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'


import styles from './styles.module.scss'

export const SubscribeButton = ({priceId}: SubscribeButtonProps) => {
  const [session] = useSession()
  
  const handlesubscribe = async() => {
    if(!session) {
      signIn('github')
      return;
    }
    // Criação da checkout session
    try{
      const response = await api.post('/subscribe')

      const {sessionId} = response.data

      const stripe = await getStripeJs()

      stripe.redirectToCheckout({sessionId})


    }catch(err){
      alert(err.message)
    }
  }

  return(
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handlesubscribe}
    >
      Subscribe Now
    </button>
  )
}