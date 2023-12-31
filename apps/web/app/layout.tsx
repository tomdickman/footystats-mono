import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AFL Footy Stats',
  description: 'Your home for AFL fantasy statistics and analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        </head>
        <body className={`${inter.className} bg-white dark:bg-zinc-900 text-black dark:text-white flex flex-col h-screen`}>
          <Header />
          <main className='container mx-auto'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
  )
}
