import { auth } from '@/auth'

export async function Header(): Promise<JSX.Element> {
  const session = await auth()

  return (
    <header className='container py-2 flex items-center w-100 mx-auto'>
      <a className='text-md leading-5 font-semibold hover:underline' href='/'>Home</a>
      <div className='flex items-center justify-end gap-1.5 ml-auto p-1'>
        <a className='text-sm leading-5 font-semibold bg-zinc-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-zinc-400/20 dark:highlight-white/5' href={`/api/auth/${session ? 'signout' : 'signin'}`}>{session ? 'Logout' : 'Login'}</a>
      </div>
    </header>
  )
}
