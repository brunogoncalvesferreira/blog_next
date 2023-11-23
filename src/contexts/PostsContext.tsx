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
  createdAt: string
}

export type PostsContextProps = {
  posts: PostsProps[]
  createPost: (data: newPostInputs) => void
  getPosts: (query?: string) => void
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

  const getPosts = useCallback(async (query?: string) => {
    const response = await api.get('posts', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setPosts(response.data)
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])
  return (
    <PostsContext.Provider value={{ posts, createPost, getPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
