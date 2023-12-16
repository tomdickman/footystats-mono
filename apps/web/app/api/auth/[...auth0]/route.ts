import { type HandleAuth, handleAuth, handleLogin } from "@auth0/nextjs-auth0"

const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      prompt: "login",
    },
    returnTo: "/profile",
  }),
  signup: handleLogin({
    authorizationParams: {
      prompt: "login",
      screen_hint: "signup",
    },
    returnTo: "/profile",
  }),
}) as HandleAuth

export { GET }
