import { prisma } from 'database'
import { use } from 'react'
import { Table } from './table'

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
    <Table roundStats={roundStats} />
  )
}
