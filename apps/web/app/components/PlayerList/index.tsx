"use client"

import { type Player } from 'database'
import { type ChangeEvent, useCallback, useState, useMemo } from 'react'

export interface PlayerListProps {
  players?: Player[]
}

export function PlayerList({
  players
}: PlayerListProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }, [])

  const filteredPlayers = useMemo(() => {
    if (!players) return []
    return players.filter((player: Player) => {
      return player.familyname.toLowerCase().includes(searchTerm.toLowerCase()) || player.givenname.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }, [players, searchTerm])

  return (
    <>
      <div className='container p-5'>
        <form className='flex flex-col items-center w-100'>
          <label className='sr-only' htmlFor='search'>Search for a player</label>
          <input
            className='border-2 border-solid border-black dark:border-zinc-100/10 rounded-lg p-2 w-100 text-black'
            id='search'
            onChange={handleSearchTermChange}
            placeholder='Search for a player'
            type='text'
          />
        </form>
      </div>
      <div className='flex flex-col items-center overflow-y-auto w-full' style={{ maxHeight: '40dvh' }}>
        {filteredPlayers.length ? (
          filteredPlayers.map((player: Player) => {
            return (
              <div key={player.id}>
                <a className='hover:underline hover:text-blue-600 dark:hover:text-blue-400' href={`/player/${player.id}`}>{player.familyname}, {player.givenname}</a>
              </div>
            )
          })
        ): (
          <p>No players found</p>
        )}
      </div>
    </>
  )
}
