import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFoundPage } from '../../../pages/NotFoundPage'
import style from './AppRouter.module.scss'
import { publicRoutes, privateRoutes } from '../../../router/routes'

interface AppRouterProps {
  isAuth: boolean
  setIsAuth: (value: boolean) => void
}

export const AppRouter = ({ isAuth, setIsAuth }: AppRouterProps) => {
  return (
    <div className={style.appRouter}>
      <Routes>
        {privateRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={isAuth ? <Component /> : <Navigate to='/login' replace />} />
        ))}

        {publicRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={!isAuth ? <Component setIsAuth={setIsAuth} /> : <Navigate to='/posts' replace />}
          />
        ))}

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
