import './App.scss'
import { useState } from 'react'
import { PostList } from '../PostList/PostList'
import { PostForm } from '../PostForm/PostForm'
import { PostConst } from '../PostConst/PostConst'
import { MySelect } from '../UI/select/MySelect'

export const App = () => {
  const [posts, setPosts] = useState(PostConst)
  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const createPostNew = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePostBtn = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className='app'>
      <PostForm createPost={createPostNew} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList removePost={removePostBtn} posts={posts} title='Список постов' />
      ) : (
        <h1>Постов нет!</h1>
      )}
    </div>
  )
}
