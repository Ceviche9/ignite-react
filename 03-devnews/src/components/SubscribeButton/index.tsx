import { SubscribeButtonProps } from '../../protocols/componentsProtocols'
import styles from './styles.module.scss'

export const SubscribeButton = ({priceId}: SubscribeButtonProps) => {
  return(
    <button
      className={styles.subscribeButton}
      type="button"
    >
      Subscribe Now
    </button>
  )
}