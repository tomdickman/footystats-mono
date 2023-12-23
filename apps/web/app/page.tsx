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
    <main className='flex flex-col items-center p-4'>
      <div className='grid grid-cols-1 text-center border-2 border-solid border:border-black dark:border-zinc-100/10 p-20 rounded-lg mt-auto mb-20'>
        <h1 className='text-4xl pb-4'>Welcome to AFL Footy Stats</h1>
        <p className='pb-0'>Your home for AFL fantasy stats and analysis</p>
      </div>
      <div className='flex flex-col items-center overflow-y-auto w-full' style={{ maxHeight: '40dvh' }}>
        {players?.length ? (
          players.map((player: Player) => {
            return (
              <div key={player.id}>
                <a className='hover:underline hover:text-blue-600 dark:hover:text-blue-400' href={`/player/${player.id}`}>{player.familyname}, {player.givenname}</a>
              </div>
            )
          })
        ): (
          <p>No players found</p>
        )}
      </div>
    </main>
  )
}

export default Page
