import NextAuth from "next-auth"
import Auth0 from "next-auth/providers/auth0"

const {
  AUTH_AUTH0_CLIENT_ID,
  AUTH_AUTH0_CLIENT_SECRET,
  AUTH_AUTH0_ISSUER,
  AUTH_SECRET
} = process.env

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Auth0({
    clientId: AUTH_AUTH0_CLIENT_ID,
    clientSecret: AUTH_AUTH0_CLIENT_SECRET,
    issuer: AUTH_AUTH0_ISSUER,
  })],
  secret: AUTH_SECRET
})
