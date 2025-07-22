import styles from './PostItem.module.scss'
import { MyButton } from '../UI/button/MyButton'

export const PostItem = (props, removePost) => {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div> {props.post.body}</div>
      </div>
      <div className={styles.postBtns}>
        <MyButton onClick={() => props.removePost(props.post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
