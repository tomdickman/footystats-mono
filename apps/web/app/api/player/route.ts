import { prisma } from 'database'
import { auth } from '@/auth'

export const GET = auth(async (req): Promise<Response> => {
  if (!req.auth) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- Response.json takes data as any
    return Response.json({ message: "Not authenticated" }, { status: 401 })
  }

  const id = req.nextUrl.searchParams.get("id")

  if (!id) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- Response.json takes data as any
    return Response.json({ message: "Missing required parameter" }, { status: 400 })
  }

  const player = await prisma.player.findUnique({
    where: {
      id,
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- Response.json takes data as any
  return Response.json(player)
}) as unknown as () => Response
