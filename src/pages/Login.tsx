import { MyInput } from '../components/UI/input/MyInput'
import { MyButton } from '../components/UI/button/MyButton'

export const Login = ({ setIsAuth }: { setIsAuth: (v: boolean) => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuth(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>страница для логина</h1>
      <MyInput type='text' placeholder='Введите логин' />
      <MyInput type='password' placeholder='Введите пароль' />
      <MyButton type='submit'>Войти</MyButton>
    </form>
  )
}
