import './App.scss'
import { useState } from 'react'
import { PostList } from '../PostList/PostList'
import { PostForm } from '../PostForm/PostForm'
import { PostConst } from '../PostConst/PostConst'

export const App = () => {
  const [posts, setPosts] = useState(PostConst)

  const createPostNew = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePostBtn = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className='app'>
      <PostForm createPost={createPostNew} />
      {posts.length ? (
        <PostList removePost={removePostBtn} posts={posts} title='Список постов' />
      ) : (
        <h1>Постов нет!</h1>
      )}
    </div>
  )
}
