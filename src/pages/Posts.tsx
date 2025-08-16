import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom' // ← добавляем
import { PostList } from '../components/UI/PostList/PostList'
import { PostForm } from '../components/UI/PostForm/PostForm'
import { postsConst } from '../constants'
import { PostFilter } from '../components/UI/PostFilter'
import { useFilteredPosts } from '../components/hooks/useFilteredPosts'
import type { Post } from '../components/types/Post'
import { MyModal } from '../components/UI/MyModal/MyModal'
import PostService from '../API/PostService'
import { Loader } from '../components/UI/Loader/Loader'
import { useFetching } from '../components/hooks/useFetching'
import { getPageCount } from '../components/utils/pages'
import { Pagination } from '../components/UI/pagination/Pagination'
import { MyButton } from './../components/UI/button/MyButton'
import style from './Posts.module.scss'

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>(postsConst)
  const { filter, setFilter, sortedAndSearchedPosts } = useFilteredPosts(posts)
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const { data, total } = await PostService.getAll(limit, page)
    setPosts(data)
    setTotalPages(getPageCount(total, limit))
  }, [limit, page])

  useEffect(() => {
    fetchPosts()
  }, [limit, page])

  const changePage = (page) => {
    setPage(page)
  }

  const createPostNew = (newPost: Post) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className={style.app}>
      <MyButton className={style.myButton} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPostNew} />
      </MyModal>
      <hr className={style.hr} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Ошибка! {postError}</h1>}
      {isPostsLoading ? (
        <div className={style.postsLoading}>
          <Loader />
        </div>
      ) : (
        <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Список постов' />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      <Outlet />
    </div>
  )
}
