import { NextResponse } from "next/server"

const GET = (): NextResponse => {
  const message = {
    text: "This is a protected message.",
  }

  return NextResponse.json(message)
}

export { GET }
