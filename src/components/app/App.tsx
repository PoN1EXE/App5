import './App.scss'
import { useState, useEffect } from 'react'
import { PostList } from '../UI/PostList/PostList'
import { PostForm } from '../UI/PostForm/PostForm'
import { postsConst } from '../../constants'
import { PostFilter } from '../UI/PostFilter'
import { useFilteredPosts } from '../hooks/useFilteredPosts'
import type { Post } from '../types/Post'
import { MyModal } from '../UI/MyModal/MyModal'
import { MyButton } from '../UI/button/MyButton'
import PostService from '../../API/PostService'
import { Loader } from '../UI/Loader/Loader'

export const App = () => {
  const [posts, setPosts] = useState<Post[]>(postsConst)
  const { filter, setFilter, sortedAndSearchedPosts } = useFilteredPosts(posts)
  const [modal, setModal] = useState(false)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPostNew = (newPost: Post) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePostBtn = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoading(false)
    }, 1000)
  }

  return (
    <div className='app'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPostNew} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <PostList removePost={removePostBtn} posts={sortedAndSearchedPosts} title='Список постов' />
      )}
    </div>
  )
}
