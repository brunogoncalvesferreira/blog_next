import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { NewPostModal } from './NewPostModal'

const avatar = 'https://github.com/brunogoncalvesferreira.png'

export function Header() {
  return (
    <header className="mb-6 flex items-center justify-between border-b py-10">
      <Link href="/" className="text-xl font-bold text-slate-50">
        {'<Blog/>'}
      </Link>

      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger>
            <Button>Nova publicação</Button>
          </DialogTrigger>
          <DialogContent>
            <NewPostModal />
          </DialogContent>
        </Dialog>

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
