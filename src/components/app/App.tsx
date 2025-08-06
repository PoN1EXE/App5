import { About } from '../../pages/About'
import { Posts } from '../../pages/Posts'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}
