'use client'

import { CardPost } from '@/components/CardPost'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/axios'
import { useEffect, useState, useCallback } from 'react'

export interface PostsProps {
  id?: number
  title: string
  body: string
  author: string
  createAt: string
}
export default function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  async function getPosts() {
    const response = await api.get('posts')
    setPosts(response.data)
  }

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
  }, [filterPosts])

  async function handleSearch(data: string) {
    await filterPosts(data)
  }

  return (
    <div className="mt-10 pb-40">
      <form>
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Busque uma publicação"
        />
      </form>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {posts.map((post) => {
          return (
            <CardPost
              key={post.id}
              title={post.title}
              body={post.body}
              createAt={post.createAt}
              author={post.author}
              id={post.id}
            />
          )
        })}
      </div>
    </div>
  )
}
