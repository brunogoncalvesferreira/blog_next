import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const avatar = 'https://github.com/brunogoncalvesferreira.png'

export function Header() {
  return (
    <header className="mb-6 flex items-center justify-between border-b py-10">
      <Link href="/" className="text-xl font-bold text-slate-50">
        {'<Blog/>'}
      </Link>

      <div className="flex items-center gap-4">
        <Button>Faça sua publicação</Button>

        <Image
          className="rounded-full"
          src={avatar}
          alt="Avatar Bruno Github"
          width={48}
          height={48}
        />
      </div>
    </header>
  )
}
