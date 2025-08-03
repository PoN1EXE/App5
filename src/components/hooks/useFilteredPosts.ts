import { useMemo, useState } from 'react'
import type { Post } from '../types/Post'

interface Filter {
  sort?: keyof Post
  query: string
}

export function useFilteredPosts(posts: Post[]) {
  const [filter, setFilter] = useState<Filter>({ sort: undefined, query: '' })

  const sortedAndSearchedPosts = useMemo(() => {
    const sorted = filter.sort
      ? [...posts].sort((a, b) =>
          String(a[filter.sort as keyof Post]).localeCompare(String(b[filter.sort as keyof Post]))
        )
      : posts
    return sorted.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.sort, filter.query, posts])
  return { filter, setFilter, sortedAndSearchedPosts }
}
