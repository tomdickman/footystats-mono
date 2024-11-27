import { prisma, type Venue } from 'database'
import { notFound } from 'next/navigation'

interface VenuePageParams {
  id: string
}

interface VenuePageProps {
  params: VenuePageParams
}

async function getVenue(id: string): Promise<Venue | undefined> {
  const venue = await prisma.venue.findFirst({
    where: {
      id,
    },
  })

  if (!venue) {
    return
  }

  return venue
}

export default async function VenuePage({
  params: { id },
}: VenuePageProps): Promise<JSX.Element> {
  const venue = await getVenue(decodeURIComponent(id))

  if (!venue) {
    notFound()
  }

  return(
    <div className='p-5'>
      <h1 className='text-3xl'>{venue.name}</h1>
    </div>
  )
}
