import type { Post } from '../API/PostService'
import PostService from '../API/PostService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../components/UI/Loader/Loader'
import { useFetching } from '../components/hooks/useFetching'

export const PostIdPage = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<Post | null>(null)

  // useFetching теперь поддерживает аргументы
  const [fetchPostById, isLoading, error] = useFetching(async (postId: number) => {
    const response = await PostService.getById(postId)
    setPost(response.data)
  })

  useEffect(() => {
    if (id) {
      fetchPostById(Number(id))
    }
  }, [id])

  return (
    <div>
      <h1>Вы открыли пост с ID = {id}</h1>

      {isLoading && <Loader />}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {post && !isLoading && (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </div>
  )
}
