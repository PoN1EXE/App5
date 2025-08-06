import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <Link to='/about'>О сайте</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </div>
  )
}
