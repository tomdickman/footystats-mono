import { prisma, type Player } from 'database'
import { notFound } from 'next/navigation'

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

  if (!player) {
    notFound()
  }

  return(
    <>
      <h1>{player.givenname} {player.familyname}</h1>
      {player.birthdate ? (
        <p>DOB: {new Date(player.birthdate).toUTCString()}</p>
      ) : null}
    </>
  )
}
