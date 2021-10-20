import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import styles from './styles.module.scss'
 
export const SingInButton = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  return isUserLoggedIn ? (
    <button 
      className={styles.singInButton}
      type="button">
      <FaGithub color="#04d361" />
      Tundê Cavalcante
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) 
  : (
    <button 
      className={styles.singInButton}
      type="button">
      <FaGithub color="#eba417" />
      SingIn with GIthub  
  </button>
  )
}