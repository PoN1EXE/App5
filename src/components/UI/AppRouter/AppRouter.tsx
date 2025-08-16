import { Routes, Route } from 'react-router-dom'
import { About } from '../../../pages/About'
import { Posts } from '../../../pages/Posts'
import { NotFoundPage } from '../../../pages/NotFoundPage'
import { PostIdPage } from '../../../pages/PostIdPage'
import style from './AppRouter.module.scss'

export const AppRouter = () => {
  return (
    <div className={style.appRouter}>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostIdPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
