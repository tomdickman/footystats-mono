'use client'

import type { GridOptions, ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react'
import { type RoundStats } from 'database'
import { ChangeEventHandler, useMemo, useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export function Table({
  roundStats
}: { roundStats: RoundStats[] }): JSX.Element {
  const [filteredRoundStats, setFilteredRoundStats] = useState<RoundStats[]>(roundStats)

  const colDefs = useMemo<ColDef[]>(() => [
    {
      field: 'game',
      headerName: 'Game',
      headerTooltip: 'Career Game Number',
      sort: 'desc'
    },
    {
      field: 'opponent',
      headerName: 'Opponent',
      headerTooltip: 'Opponent'
    },
    {
      field: 'roundnumber',
      headerName: 'Round',
      headerTooltip: 'Season Round Number'
    },
    {
      field:'year',
      headerName: 'Year',
      headerTooltip: 'Year'
    },
    {
      field: 'fantasypoints',
      headerName: 'Pts',
      headerTooltip: 'Fantasy Points'
    },
    {
      field: 'handballs',
      headerName: 'HB',
      headerTooltip: 'Handballs'
    },
    {
      field: 'kicks',
      headerName: 'K',
      headerTooltip: 'Kicks'
    },
    {
      field: 'tackles',
      headerName: 'T',
      headerTooltip: 'Tackles'
    },
    {
      field: 'freekicksagainst',
      headerName: 'FA',
      headerTooltip: 'Free Kicks Against'
    },
    {
      field: 'freekicksfor',
      headerName: 'FF',
      headerTooltip: 'Free Kicks For'
    },
    {
      field: 'goals',
      headerName: 'G',
      headerTooltip: 'Goals'
    },
    {
      field: 'behinds',
      headerName: 'B',
      headerTooltip: 'Behinds'
    },
  ], [])

  const gridOptions = useMemo<GridOptions>(() => ({
    autoSizeStrategy: {
      type: 'fitGridWidth',
      defaultMinWidth: 100
    },
    defaultColDef: {
      filter: true,
      floatingFilter: true,
      suppressMenu: true,
    }
  }), [])

  const handleYearSelect: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    const selectedYear = event.currentTarget.value
    if (selectedYear === 'all') {
      setFilteredRoundStats(roundStats)
    } else {
      setFilteredRoundStats(roundStats.filter((roundStat) => roundStat.year.toString() === selectedYear))
    }
  }

  return (
    <>
      <div className='container py-2'>
        <form>
          <label className='sr-only' htmlFor='year'>Select a year</label>
          <select
            className='border-2 border-solid border-black dark:border-zinc-100/10 rounded-lg p-2 w-100 text-black'
            id='year'
            onChange={handleYearSelect}
          >
            <option key='all' value='all'>All Years</option>
            {Array.from(new Set(roundStats.map((roundStat) => roundStat.year))).map((year) => {
              return (
                <option key={year} value={year}>{year}</option>
              )
            })}
          </select>
        </form>
      </div>
      <div className='ag-theme-alpine-auto-dark' style={{ height: '60dvh' }}>
        <AgGridReact columnDefs={colDefs} gridOptions={gridOptions} rowData={filteredRoundStats} />
      </div>
    </>
  )
}
