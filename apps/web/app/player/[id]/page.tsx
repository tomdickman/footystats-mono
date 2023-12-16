import { prisma, type Player } from 'database'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { PlayerStatsTable } from '../../components/PlayerStatsTable'

interface PlayerPageParams {
  id: string
}

interface PlayerPageProps {
  params: PlayerPageParams
}

async function getPlayer(id: string): Promise<Player | undefined> {
  // TODO: Capture errors.
  const player = await prisma.player.findUnique({
    where: {
      id,
    },
  })

  if (!player) {
    return
  }

  // TODO: Validate data.
  return player
}

export default async function PlayerPage({
  params: { id },
}: PlayerPageProps): Promise<JSX.Element> {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (!user) {
    return (
      <div>
        <p>Please sign in to view this page.</p>
      </div>
    )
  }
  
  const player = await getPlayer(id)

  if (!player?.id || !player.givenname || !player.familyname || !player.birthdate) {
    notFound()
  }

  const date = new Date(player.birthdate)

  return(
    <>
      <h1 className='text-3xl'>{player.givenname} {player.familyname}</h1>
      <p>DOB: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
      <div className='py-5'>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='overflow-y-scroll' style={{ height: '80dvh' }}>
            <PlayerStatsTable id={player.id} />
          </div>
        </Suspense>
      </div>
    </>
  )
}
