'use client'

import { CardPost } from '@/components/CardPost'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="mt-10 pb-40">
      <Input placeholder="Busque uma publicação" />

      <div className="mt-20 grid grid-cols-3 gap-6">
        {posts.map((post) => {
          return (
            <CardPost
              key={post.id}
              title={post.title}
              body={post.body}
              createAt={post.createAt}
              author={post.author}
            />
          )
        })}
      </div>
    </div>
  )
}
