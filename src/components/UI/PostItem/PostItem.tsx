import styles from './PostItem.module.scss'
import { MyButton } from '../button/MyButton'
import type { Post } from '../../types/Post'

interface PostItemProps {
  number: number
  post: Post
  removePost: (post: Post) => void
}

export const PostItem = ({ number, post, removePost }: PostItemProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <strong>
          {number} {post.title}
        </strong>
        <div> {post.body}</div>
      </div>
      <div className={styles.postBtns}>
        <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
