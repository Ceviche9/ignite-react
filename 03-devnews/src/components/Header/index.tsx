import {SingInButton} from '../SingInButton'

import styles from './styles.module.scss'

export const Header = () => {
  return(
    <header className={styles.headerContainer} >
      <div className={styles.headerContent} >
        <h2>dev.news</h2>
        <nav>
          <a className={styles.active} href="">Home</a>
          <a href="">Posts</a>
        </nav>

        <SingInButton />
      </div>
    </header>
  )
}