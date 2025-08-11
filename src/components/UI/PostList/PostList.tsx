import React, { useRef, useMemo } from 'react'
import { PostItem } from '../PostItem/PostItem'
import type { Post } from '../../types/Post'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import style from './PostList.module.scss'

interface PostListProps {
  posts: Post[]
  title: string
  removePost: (post: Post) => void
}

const classNames = {
  enter: style['postEnter'],
  enterActive: style['postEnterActive'],
  exit: style['postExit'],
  exitActive: style['postExitActive'],
}

export const PostList = ({ posts, title, removePost }: PostListProps) => {
  const nodeRefs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({})

  useMemo(() => {
    posts.forEach((post) => {
      if (!nodeRefs.current[post.id]) {
        nodeRefs.current[post.id] = React.createRef<HTMLDivElement>()
      }
    })
  }, [posts])

  if (!posts.length) {
    return <h1 className={style.h1}>Посты не найдены!</h1>
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
