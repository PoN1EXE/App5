import styles from './MyInput.module.scss'
import type { InputHTMLAttributes } from 'react'

export const MyInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.myInp} {...props} />
}
