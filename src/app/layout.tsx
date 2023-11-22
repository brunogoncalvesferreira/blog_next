import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { PostContextProvider } from '@/contexts/PostsContext'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Next',
  description: 'Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <PostContextProvider>
          <div className="mx-auto w-full max-w-6xl px-6">
            <Header />
            <main> {children}</main>
          </div>
        </PostContextProvider>
      </body>
    </html>
  )
}
