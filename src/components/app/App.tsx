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
import { useFetching } from '../hooks/useFetching'
import { getPageCount, getPagesArray } from '../utils/pages'

export const App = () => {
  const [posts, setPosts] = useState<Post[]>(postsConst)
  const { filter, setFilter, sortedAndSearchedPosts } = useFilteredPosts(posts)
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  let pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  const changePage = (page) => {
    setPage(p)
    fetchPosts()
  }

  const createPostNew = (newPost: Post) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePostBtn = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
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
      {postError && <h1>Ошибка! ${postError}</h1>}
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <PostList removePost={removePostBtn} posts={sortedAndSearchedPosts} title='Список постов' />
      )}
      <div style={{ marginTop: 30 }}>
        {pagesArray.map((p) => (
          <MyButton onClick={() => changePage(p)}>{p}</MyButton>
        ))}
      </div>
    </div>
  )
}
