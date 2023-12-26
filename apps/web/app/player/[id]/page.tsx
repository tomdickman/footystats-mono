import { prisma, type Player } from 'database'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { auth } from '@/auth'
import { PlayerStatsTable } from '../../components/PlayerStatsTable'

interface PlayerPageParams {
  id: string
}

interface PlayerPageProps {
  params: PlayerPageParams
}

async function getPlayer(id: string): Promise<Player | undefined> {
  const player = await prisma.player.findUnique({
    where: {
      id,
    },
  })

  if (!player) {
    return
  }

  return player
}

export default async function PlayerPage({
  params: { id },
}: PlayerPageProps): Promise<JSX.Element> {
  const session = await auth()
  const player = await getPlayer(id)

  if (!player) {
    notFound()
  }

  const date = new Date(player.birthdate)

  return(
    <div className='p-5'>
      <h1 className='text-3xl'>{player.givenname} {player.familyname}</h1>
      <p>DOB: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
      <div className='py-5'>
        {session ? (
          <Suspense fallback={<div>Loading...</div>}>
            <PlayerStatsTable id={player.id} />
          </Suspense>
        ) : <p>You must be logged in to view this content</p>}
      </div>
    </div>
  )
}
