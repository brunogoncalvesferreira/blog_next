'use client'

import { api } from '@/lib/axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PostsProps } from '@/app/page'
import { Calendar, User } from 'phosphor-react'
import { formattedDate } from '@/utils/formatted'

export default function Post() {
  const params = useParams()

  const id = params.id

  const [post, setPost] = useState<PostsProps>({} as PostsProps)

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`posts/${id}`)
      setPost(response.data)
    }
    getPost()
  }, [id])

  const formatDate = formattedDate(post.createAt)

  return (
    <div className="space-y-6">
      <div className="mb-6 flex gap-10">
        <span className="flex items-center gap-1">
          <User size={24} />
          {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={24} />
          {formatDate}
        </span>
      </div>
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-lg leading-relaxed text-muted-foreground">
        {post.body}
      </p>
    </div>
  )
}
