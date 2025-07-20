import './App.scss'
import { useState } from 'react'
import { PostList } from '../PostList/PostList'
import { PostForm } from '../PostForm/PostForm'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'TSX', body: 'Description' },
    { id: 2, title: 'TSX 2', body: 'Description' },
    { id: 3, title: 'TSX 3', body: 'Description' },
    { id: 4, title: 'TSX 4', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className='app'>
      <PostForm create={createPost} />
      <PostList posts={posts} title='Список постов' />
    </div>
  )
}
