import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { PostsProps } from '../app/page'
import Link from 'next/link'
import { formattedDate } from '@/utils/formatted'

export function CardPost({ title, body, author, createAt }: PostsProps) {
  const formatDate = formattedDate(createAt)

  return (
    <Link href={`/posts`}>
      <Card>
        <CardHeader className="flex flex-row  justify-between">
          <strong className="flex-1 text-xl">{title}</strong>
          <time className="w-fit text-sm">{formatDate}</time>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-5 leading-relaxed text-gray-300">{body}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">{author}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
