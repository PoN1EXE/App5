import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { MyButton } from '../button/MyButton'
import { useAuth } from '../../../context'

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth()

  const handleLogout = () => {
    setIsAuth(false)
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <Link to='/about'>О сайте</Link>
        <Link to='/posts'>Посты</Link>
        {isAuth && <MyButton onClick={handleLogout}>Выйти</MyButton>}
      </div>
    </div>
  )
}
