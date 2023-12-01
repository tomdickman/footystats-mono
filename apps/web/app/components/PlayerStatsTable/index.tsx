import { prisma } from 'database'

interface PlayerStatsTableProps {
  id: string
}

export async function PlayerStatsTable({ id }: PlayerStatsTableProps): Promise<JSX.Element> {
  const roundStats = await prisma.roundstats.findMany({
    where: {
      playerid: id,
    },
    orderBy: {
      game: 'asc',
    }
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Fantasy Points</th>
        </tr>
      </thead>
      <tbody>
        {roundStats.map(({ fantasypoints, game }) => (
          <tr key={game}>
            <td>{game}</td>
            <td>{fantasypoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
