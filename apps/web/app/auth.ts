import NextAuth from "next-auth"
import Auth0 from "next-auth/providers/auth0"

const {
  AUTH_AUTH0_CLIENT_ID,
  AUTH_AUTH0_CLIENT_SECRET,
  AUTH_SECRET,
  AUTH_URL
} = process.env

if (!AUTH_AUTH0_CLIENT_ID || !AUTH_AUTH0_CLIENT_SECRET || !AUTH_SECRET || !AUTH_URL) {
  throw new Error('Missing environment variables')
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Auth0({
    clientId: AUTH_AUTH0_CLIENT_ID,
    clientSecret: AUTH_AUTH0_CLIENT_SECRET,
  })],
  secret: process.env.AUTH_SECRET
})
