import React, { useRef } from 'react'
import { PostItem } from '../PostItem/PostItem'
import type { Post } from '../../types/Post'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './PostList.module.scss'

interface PostListProps {
  posts: Post[]
  title: string
  removePost: (post: Post) => void
}

const classNames = {
  enter: styles['post-enter'],
  enterActive: styles['post-enter-active'],
  exit: styles['post-exit'],
  exitActive: styles['post-exit-active'],
}

export const PostList = ({ posts, title, removePost }: PostListProps) => {
  const nodeRefs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({})

  posts.forEach((post) => {
    if (!nodeRefs.current[post.id]) {
      nodeRefs.current[post.id] = React.createRef<HTMLDivElement>()
    }
  })

  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
  }

  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames={classNames}
            nodeRef={nodeRefs.current[post.id]}
            unmountOnExit>
            <PostItem ref={nodeRefs.current[post.id]} removePost={removePost} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
