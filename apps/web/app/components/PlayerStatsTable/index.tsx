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
      game: 'desc',
    }
  }))

  return (
    <table className='table-auto mx-auto p-2 w-full'>
      <thead>
        <tr className='border-black dark:border-gray-400 border-2'>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Game</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Opponent</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Round #</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Year</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Handballs</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Kicks</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Tackles</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Frees Against</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Frees For</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Goals</th>
          <th className='px-2 py-1 border-r-2 border-black dark:border-gray-400'>Behinds</th>
          <th className='px-2 py-1'>Fantasy Points</th>
        </tr>
      </thead>
      <tbody>
        {roundStats.map((stats) => (
          <tr className='border-black dark:border-gray-400 border-solid border-2' key={stats.game}>
            <td className='px-2 py-1 text-left'>{stats.game}</td>
            <td className='px-2 py-1 text-left whitespace-nowrap' title={stats.opponent || undefined}>
              <div className='max-w-[7em] text-ellipsis overflow-hidden'>{stats.opponent}</div>
            </td>
            <td className='px-2 py-1 text-center'>{stats.roundnumber}</td>
            <td className='px-2 py-1 text-center'>{stats.year}</td>
            <td className='px-2 py-1 text-right'>{stats.handballs}</td>
            <td className='px-2 py-1 text-right'>{stats.kicks}</td>
            <td className='px-2 py-1 text-right'>{stats.tackles}</td>
            <td className='px-2 py-1 text-right'>{stats.freekicksagainst}</td>
            <td className='px-2 py-1 text-right'>{stats.freekicksfor}</td>
            <td className='px-2 py-1 text-right'>{stats.goals}</td>
            <td className='px-2 py-1 text-right'>{stats.behinds}</td>
            <td className='px-2 py-1 text-right'>{stats.fantasypoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
