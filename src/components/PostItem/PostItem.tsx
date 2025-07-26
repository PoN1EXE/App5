import styles from './PostItem.module.scss'
import { MyButton } from '../UI/button/MyButton'

export const PostItem = ({ number, post, removePost }) => {
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
