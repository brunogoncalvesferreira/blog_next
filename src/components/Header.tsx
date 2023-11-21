import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const avatar = 'https://github.com/brunogoncalvesferreira.png'

export function Header() {
  return (
    <header className="mb-6 flex items-center justify-between border-b py-6">
      <Link href="/" className="text-slate-50">
        Blog
      </Link>

      <div className="flex items-center gap-4">
        <Button>Faça sua publicação</Button>

        <Image
          className="rounded-full"
          src={avatar}
          alt="Avatar Bruno Github"
          width={64}
          height={64}
        />
      </div>
    </header>
  )
}