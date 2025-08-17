import axios from 'axios'
export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostsResponse {
  data: Post[]
  total: number
}

export default class PostService {
  static async getAll(limit = 10, page = 1): Promise<PostsResponse> {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: { _limit: limit, _page: page },
    })
    const total = Number(response.headers['x-total-count'] ?? 0)
    return { data: response.data, total }
  }

  static async getById(id: number | string) {
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  static async getComById(id: number | string) {
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
