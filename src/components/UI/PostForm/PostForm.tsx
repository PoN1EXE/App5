import { MyButton } from '../button/MyButton'
import { MyInput } from '../input/MyInput'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { Post } from '../../types/Post'

interface PostFormProps {
  createPost: (post: Post) => void
}

export const PostForm = ({ createPost }: PostFormProps) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPost: Post = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    }
    createPost(newPost)
    setPost({ title: '', body: '' })
  }

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value })
  }

  const onChangeBody = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, body: e.target.value })
  }

  return (
    <form onSubmit={addNewPost}>
      <MyInput value={post.title} onChange={onChangeTitle} type='text' placeholder='Заголовок поста' />
      <MyInput value={post.body} onChange={onChangeBody} type='text' placeholder='Описание поста' />
      <MyButton type='submit'>Создать пост</MyButton>
    </form>
  )
}
