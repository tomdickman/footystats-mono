import { Suspense } from 'react'
import { prisma } from 'database'
import Image from 'next/image'
import { PlayerList } from './components/PlayerList'

async function Page(): Promise<JSX.Element> {
  const players = await prisma.player.findMany({
    orderBy: {
      familyname: 'asc',
    }
  })

  const formattedPlayers = players.map((player) => {
    return {
      ...player,
      familyname: player.familyname.replace(/_/g, "'"),
      birthdate: new Date(player.birthdate),
    }
  })

  return (
    <main className='flex flex-col items-center p-4'>
      <div className='grid grid-cols-1 text-center border-2 border-solid border:border-black dark:border-zinc-100/10 p-4 lg:p-10 rounded-lg mt-auto mb-1 lg:mb-5'>
        <h1 className='text-xl sm:text-4xl'>Welcome to AFL Footy Stats</h1>
        <Image alt='AFL Footy Stats Logo' className='mx-auto' height={100} src='/footy.ico' width={100} />
        <p className='pb-0'>Your home for AFL fantasy stats and analysis</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PlayerList players={formattedPlayers} />
      </Suspense>
    </main>
  )
}

export default Page
