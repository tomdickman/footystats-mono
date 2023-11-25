import { prisma } from 'database'
import { type NextRequest, NextResponse } from 'next/server'
import { EN } from './lang'

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json(
      { error: EN.ERROR.MISSING_PLAYER_ID },
      { status: 400 },
    )
  }

  try {
    const data = await prisma.player.findUnique({
      where: {
        id,
      },
    })

    if (!data) {
      return NextResponse.json(
        { error: EN.ERROR.NO_PLAYER_DATA_FOUND },
        { status: 404 },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: EN.ERROR.UNABLE_TO_FETCH_PLAYER_DATA },
      { status: 400 },
    )
  }
}
