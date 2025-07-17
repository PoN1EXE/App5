import './App.scss'
import { useState } from 'react'
import { PostItem } from '../PostItem/PostItem'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'TSX', body: 'Description' },
    { id: 2, title: 'TSX 2', body: 'Description' },
    { id: 3, title: 'TSX 3', body: 'Description' },
    { id: 4, title: 'TSX 4', body: 'Description' },
  ])

  return (
    <div className='app'>
      <h1>Список постов</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}
