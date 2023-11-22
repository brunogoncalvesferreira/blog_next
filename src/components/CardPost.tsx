import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { formattedDate } from '@/utils/formatted'
import { PostsProps } from '@/contexts/PostsContext'

export function CardPost({ title, body, author, createdAt, id }: PostsProps) {
  const formatDate = formattedDate(createdAt)

  return (
    <Link href={`/post/${id}`}>
      <Card className="h-auto md:h-64">
        <CardHeader className="flex flex-row  justify-between">
          <strong className="flex-1 text-xl">{title}</strong>
          <time className="w-fit text-sm">{formatDate}</time>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 leading-relaxed text-gray-300">{body}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">{author}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
