import React from 'react'

export const PostItem = (props) => {
  return (
    <div className='post'>
      <div className='postContent'>
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div> {props.post.body}</div>
      </div>
      <div className='postBtns'>
        <button>Удалить</button>
      </div>
    </div>
  )
}
