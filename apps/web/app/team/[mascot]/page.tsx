import { prisma, type Team } from 'database'
import { notFound } from 'next/navigation'

interface TeamPageParams {
  mascot: string
}

interface TeamPageProps {
  params: TeamPageParams
}

async function getTeam(mascot: string): Promise<Team | undefined> {
  const team = await prisma.team.findUnique({
    where: {
      mascot,
    },
  })

  if (!team) {
    return
  }

  return team
}

export default async function TeamPage({
  params: { mascot },
}: TeamPageProps): Promise<JSX.Element> {
  const team = await getTeam(mascot)

  if (!team) {
    notFound()
  }

  return(
    <div className='p-5'>
      <h1 className='text-3xl'>{team.club} {team.mascot}</h1>
    </div>
  )
}
