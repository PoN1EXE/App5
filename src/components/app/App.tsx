import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../UI/Navbar/Navbar'
import { AppRouter } from '../UI/AppRouter/AppRouter'
import { AuthProvider } from '../../context'
import './App.scss'

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}
