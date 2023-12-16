"use client"

import { useMessage } from '../hooks/message'

function Protected(): JSX.Element {
  const { message } = useMessage('/api/protected')

  return (
    <div>
      <div>
        <h1>
          Protected Page
        </h1>
        <p>
          This page retrieves a <strong>protected message</strong>.
        </p>
        <p>
          <strong>Only authenticated users can access this page.</strong>
        </p>
        <code>{message}</code>
        <p>
          <a href='/api/auth/logout'>Logout</a>
        </p>
      </div>
    </div>
  )
}

export default Protected
