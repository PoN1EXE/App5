import { AppRouter } from '../UI/AppRouter/AppRouter'
import { Navbar } from '../UI/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'

export const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter isAuth={isAuth} setIsAuth={setIsAuth} />
    </BrowserRouter>
  )
}
