import { PostItem } from '../PostItem/PostItem'
import type { Post } from '../../types/Post'

interface PostListProps {
  posts: Post[]
  title: string
  removePost: (post: Post) => void
}

export const PostList = ({ posts, title, removePost }: PostListProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem removePost={removePost} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  )
}
