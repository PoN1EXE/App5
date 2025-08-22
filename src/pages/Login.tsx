import { MyInput } from '../components/UI/input/MyInput'
import { MyButton } from '../components/UI/button/MyButton'
import { useAuth } from '../context'

export const Login = () => {
  const { setIsAuth } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuth(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Страница для логина</h1>
      <MyInput type='text' placeholder='Введите логин' />
      <MyInput type='password' placeholder='Введите пароль' />
      <MyButton type='submit'>Войти</MyButton>
    </form>
  )
}
