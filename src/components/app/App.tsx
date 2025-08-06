import { AppRouter } from '../UI/AppRouter/AppRouter'
import { Navbar } from '../UI/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}
