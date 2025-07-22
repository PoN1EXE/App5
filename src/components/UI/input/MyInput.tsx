import styles from './MyInput.module.scss'

export const MyInput = (props) => {
  return <input className={styles.myInp} {...props} />
}
