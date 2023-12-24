import { Suspense } from 'react'
import { prisma } from 'database'
import { PlayerList } from './components/PlayerList'

async function Page(): Promise<JSX.Element> {
  const players = await prisma.player.findMany({
    orderBy: {
      familyname: 'asc',
    }
  })

  return (
    <main className='flex flex-col items-center p-4'>
      <div className='grid grid-cols-1 text-center border-2 border-solid border:border-black dark:border-zinc-100/10 p-4 lg:p-10 rounded-lg mt-auto mb-1 lg:mb-5'>
        <h1 className='text-xl sm:text-4xl pb-4'>Welcome to AFL Footy Stats</h1>
        <p className='pb-0'>Your home for AFL fantasy stats and analysis</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PlayerList players={players} />
      </Suspense>
    </main>
  )
}

export default Page
