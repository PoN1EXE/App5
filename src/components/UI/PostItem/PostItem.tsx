import { forwardRef } from 'react'
import styles from './PostItem.module.scss'
import { MyButton } from '../button/MyButton'
import type { Post } from '../../types/Post'

interface PostItemProps {
  number: number
  post: Post
  removePost: (post: Post) => void
}

export const PostItem = forwardRef<HTMLDivElement, PostItemProps>(({ number, post, removePost }, ref) => {
  return (
    <div ref={ref} className={styles.post}>
      <div>
        <strong>
          {post.id} {post.title}
        </strong>
        <div> {post.body}</div>
      </div>
      <div className={styles.postBtns}>
        <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  )
})
