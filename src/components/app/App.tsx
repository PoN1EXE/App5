import './App.scss'
import { useRef, useState } from 'react'
import { PostList } from '../PostList/PostList'
import { MyButton } from '../UI/button/MyButton'
import { MyInput } from '../UI/input/MyInput'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'TSX', body: 'Description' },
    { id: 2, title: 'TSX 2', body: 'Description' },
    { id: 3, title: 'TSX 3', body: 'Description' },
    { id: 4, title: 'TSX 4', body: 'Description' },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className='app'>
      <form>
        <MyInput value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Заголовок поста' />
        <MyInput value={body} onChange={(e) => setBody(e.target.value)} type='text' placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов' />
    </div>
  )
}
