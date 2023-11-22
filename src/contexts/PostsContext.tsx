'use client'

import { newPostInputs } from '@/components/NewPostModal'
import { api } from '@/lib/axios'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

export interface PostsProps {
  id?: number
  title: string
  body: string
  author: string
  createAt: string
}

export type PostsContextProps = {
  posts: PostsProps[]
  createPost: (data: newPostInputs) => void
  filterPosts: (query?: string) => void
}

export const PostsContext = createContext({} as PostsContextProps)

interface PostsContextProviderProps {
  children: ReactNode
}

export function PostContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostsProps[]>([])

  const createPost = useCallback(async (data: newPostInputs) => {
    const { title, author, body } = data

    const response = await api.post('posts', {
      title,
      author,
      body,
      createdAt: new Date(),
    })

    setPosts((state) => [response.data, ...state])
  }, [])

  const getPosts = useCallback(async () => {
    const response = await api.get('posts')
    setPosts(response.data)
  }, [])

  const filterPosts = useCallback(async (query?: string) => {
    const response = await api.get('posts', {
      params: {
        q: query,
      },
    })
    setPosts(response.data)
  }, [])

  useEffect(() => {
    getPosts()
    filterPosts()
  }, [getPosts, filterPosts])
  return (
    <PostsContext.Provider value={{ posts, createPost, filterPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
