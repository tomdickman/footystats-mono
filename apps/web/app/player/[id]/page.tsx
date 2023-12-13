import { prisma, type Player } from 'database'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
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
  const player = await getPlayer(id)

  if (!player?.id || !player.givenname || !player.familyname || !player.birthdate) {
    notFound()
  }

  const date = new Date(player.birthdate)

  return(
    <>
      <h1 className='text-3xl'>{player.givenname} {player.familyname}</h1>
      <p>DOB: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='overflow-y-scroll' style={{ height: '80dvh' }}>
          <PlayerStatsTable id={player.id} />
        </div>
      </Suspense>
    </>
  )
}
