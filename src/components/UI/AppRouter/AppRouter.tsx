import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from '../../../pages/NotFoundPage'
import style from './AppRouter.module.scss'
import { routes } from '../../../router/routes'

export const AppRouter = () => {
  return (
    <div className={style.appRouter}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
