/* eslint-disable @typescript-eslint/no-unsafe-call  -- Response.json takes data as any */
import { auth } from '@/auth'

export const GET = auth((req): Response => {
  if (!req.auth) {
    return Response.json({ message: "Not authenticated" }, { status: 401 })
  }

  const message = {
    text: "This is a protected message.",
  }

  return Response.json({ message })
}) as unknown as () => Response
