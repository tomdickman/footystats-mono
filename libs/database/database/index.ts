/* eslint-disable import/no-mutable-exports -- Export value will vary by environment */
// @see Prisma best practices: https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient
const prismaGlobal = globalThis as unknown as { prisma?: PrismaClient }

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!prismaGlobal.prisma) {
    prismaGlobal.prisma = new PrismaClient()
  }
  prisma = prismaGlobal.prisma
}

export { prisma }
