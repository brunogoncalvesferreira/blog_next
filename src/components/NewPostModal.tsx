'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PostsContext } from '@/contexts/PostsContext'

const newPostSchema = z.object({
  title: z.string(),
  author: z.string(),
  body: z.string(),
})

export type newPostInputs = z.infer<typeof newPostSchema>

export function NewPostModal() {
  const { createPost } = useContext(PostsContext)
  const { register, handleSubmit } = useForm<newPostInputs>({
    resolver: zodResolver(newPostSchema),
  })

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Faça sua publicação</h1>

      <form className="space-y-6" onSubmit={handleSubmit(createPost)}>
        <Input
          type="text"
          placeholder="Título da publicação"
          {...register('title')}
        />
        <Input
          type="text"
          placeholder="Nome do Autor"
          {...register('author')}
        />
        <Textarea
          placeholder="Escreva sua publicação..."
          {...register('body')}
        />
        <Button>Publicar</Button>
      </form>
    </div>
  )
}
