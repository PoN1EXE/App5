import { PostItem } from '../PostItem/PostItem'

export const PostList = ({ posts, title, removePost }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem removePost={removePost} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  )
}
