import { type Player, prisma } from 'database'

async function getPlayers(): Promise<Player[] | undefined> {
  const players = await prisma.player.findMany({
    orderBy: {
      familyname: 'asc',
    },
  })

  if (!players.length) {
    return
  }

  return players
}

async function Page(): Promise<JSX.Element> {
  const players = await getPlayers()

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-4xl pb-4'>Welcome to AFL Footy Stats</h1>
      {players?.length ? (
        players.map((player: Player) => {
          return (
            <div key={player.id}>
              <a className='hover:underline' href={`/player/${player.id}`}>{player.familyname}, {player.givenname}</a>
            </div>
          )
        })
      ): (
        <p>No players found</p>
      )}
    </main>
  )
}

export default Page
