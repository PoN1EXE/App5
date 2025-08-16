import { forwardRef } from 'react'
import styles from './PostItem.module.scss'
import { MyButton } from '../button/MyButton'
import type { Post } from '../../types/Post'
import { useNavigate } from 'react-router-dom'

interface PostItemProps {
  number: number
  post: Post
  removePost: (post: Post) => void
}

export const PostItem = forwardRef<HTMLDivElement, PostItemProps>(({ number, post, removePost }, ref) => {
  const router = useNavigate()
  console.log(router)
  return (
    <div ref={ref} className={styles.post}>
      <div>
        <strong>
          {post.id} {post.title}
        </strong>
        <div> {post.body}</div>
      </div>
      <div className={styles.postBtns}>
        <MyButton onClick={() => router(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => removePost(post)}>удалить</MyButton>
      </div>
    </div>
  )
})
