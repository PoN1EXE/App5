import './App.scss'
import { useMemo, useState } from 'react'
import { PostList } from '../UI/PostList/PostList'
import { PostForm } from '../UI/PostForm/PostForm'
import { postsConst } from '../../constants'
import { PostFilter } from '../UI/PostFilter'
import type { Post } from '../types/Post'

interface Filter {
  sort: string
  query: string
}

export const App = () => {
  const [posts, setPosts] = useState<Post[]>(postsConst)
  const [filter, setFilter] = useState<Filter>({ sort: '', query: '' })

  const sortedAndSearchedPosts = useMemo(() => {
    const sorted = filter.sort ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) : posts
    return sorted.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.sort, filter.query, posts])

  const createPostNew = (newPost: Post) => {
    setPosts([...posts, newPost])
  }

  const removePostBtn = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className='app'>
      <PostForm createPost={createPostNew} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList removePost={removePostBtn} posts={sortedAndSearchedPosts} title='Список постов' />
      ) : (
        <h1>Постов нет!</h1>
      )}
    </div>
  )
}
