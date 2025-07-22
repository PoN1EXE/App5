import { MyButton } from '../UI/button/MyButton'
import { MyInput } from '../UI/input/MyInput'
import { useState } from 'react'

export const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    createPost(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form onSubmit={addNewPost}>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='Заголовок поста'
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='Описание поста'
      />
      <MyButton type='submit'>Создать пост</MyButton>
    </form>
  )
}
