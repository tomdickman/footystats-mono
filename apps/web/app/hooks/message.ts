"use client"

import { useEffect, useState } from 'react'
import axios, { type AxiosError } from 'axios'
import useSWR from 'swr'

export function useMessage(url: string): { message: string } {
  const [message, setMessage] = useState("")

  const fetcher = async (): Promise<unknown> => {
    const res = await axios.get(url, {
      headers: {
        'content-type': 'application/json',
      },
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- TODO: fix
    return res.data
  }

  const { data, error, isLoading: isApiResponseLoading } = useSWR<unknown, AxiosError>(
    '/api/messages/protected',
    fetcher
  )

  useEffect(() => {
    if (isApiResponseLoading) {
      return
    }

    if (error?.response) {
      setMessage(
        error.response.data
          ? JSON.stringify(error.response.data, null, 2)
          : "Something went wrong"
      )
    }

    if (data) {
      setMessage(JSON.stringify(data, null, 2))
    }
  }, [data, error, isApiResponseLoading])

  return { message }
}
