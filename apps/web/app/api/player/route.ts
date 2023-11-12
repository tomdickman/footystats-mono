import { prisma } from 'database'
import { type NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get('id')

  if (!id) {
    throw new Error('No ID provided')
  }

  try {
    const data = await prisma.player.findUnique({
      where: {
        id,
      },
    })

    if (!data) {
      throw new Error('No data')
    }

    return NextResponse.json(data)
  } catch (error) {
    throw new Error(`Unable to fetch player ID: ${id}`, { cause: error })
  }
}
