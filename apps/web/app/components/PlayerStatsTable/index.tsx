import { prisma } from 'database'
import { use } from 'react'

interface PlayerStatsTableProps {
  id: string
}

export function PlayerStatsTable({ id }: PlayerStatsTableProps): JSX.Element {
  const roundStats = use(prisma.roundstats.findMany({
    where: {
      playerid: id,
    },
    orderBy: {
      game: 'asc',
    }
  }))

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
