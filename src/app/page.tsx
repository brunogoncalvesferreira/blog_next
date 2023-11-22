'use client'

import { CardPost } from '@/components/CardPost'

import { Input } from '@/components/ui/input'
import { PostsContext } from '@/contexts/PostsContext'
import { useContext } from 'react'

export default function Home() {
  const { posts, filterPosts } = useContext(PostsContext)
  function handleSearch(data: string) {
    filterPosts(data)
  }

  return (
    <div className="mt-10 pb-40">
      <form>
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Busque uma publicação"
        />
      </form>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
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
