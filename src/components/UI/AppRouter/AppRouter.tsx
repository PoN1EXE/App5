import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFoundPage } from '../../../pages/NotFoundPage'
import { publicRoutes, privateRoutes } from '../../../router/routes'
import { useAuth } from '../../../context'

export const AppRouter = () => {
  const { isAuth } = useAuth()

  return (
    <Routes>
      {privateRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={isAuth ? <Component /> : <Navigate to='/login' replace />} />
      ))}

      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={!isAuth ? <Component /> : <Navigate to='/posts' replace />} />
      ))}

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
