/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

interface AuthContextType {
  isAuth: boolean
  setIsAuth: (value: boolean) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
}

export const AuthProviderComponent = () => null

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('Ошибка авторизации')
  return context
}
